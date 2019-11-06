import { computed, get } from '@ember/object';
import ComputedProperty from '@ember/object/computed';

const { keys } = Object;

/**
 * Transform an Object's values with a `transform` function.
 */
export default function transform<T>(
  dependentKey: string,
  transform: (arg: T) => any
): ComputedProperty<{}, {}> {
  return computed(dependentKey, function() {
    let obj: { [key: string]: any } = get(this, dependentKey);
    return keys(obj).reduce((newObj: { [key: string]: any }, key: string) => {
      newObj[key] = transform(obj[key]);
      return newObj;
    }, Object.create(null));
  });
}
