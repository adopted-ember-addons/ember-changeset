import { assert, runInDebug } from '@ember/debug';
import isObject from 'ember-changeset/utils/is-object';
import setDeep from '../-private/set-deep';

const { keys } = Object;

/**
 * Inflate an Object, optionally transforming each key's value by
 * `transform` function.
 */
export default function inflate<T>(
  obj: {  [key: string]: any },
  transform: (arg: T) => any = a => a
): object {
  runInDebug(() => {
    keys(obj).forEach(key => {
      key.split('.').forEach((_part, i, allParts) => {
        if (i < allParts.length - 1) {
          let path = allParts.slice(0, i+1).join('.');
          let msg = `Path ${path} leading up to ${key} must be an Object if specified.`;
          assert(msg, isObject(obj[path]) || !obj[path]);
        }
      });
    });
  });

  let result = keys(obj)
    .sort()
    .reduce((inflatedObj, key) => {
      // set-deep will convert nested string key to single key per level
      setDeep(inflatedObj, key, transform(obj[key]));
      return inflatedObj;
    }, {});

  return result;
}