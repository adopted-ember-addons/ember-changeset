// @flow

import { get } from '@ember/object';
import isObject from 'ember-changeset/utils/is-object';
import includes from 'ember-changeset/utils/includes';
import Node from 'ember-changeset/-private/node';

const { keys } = Object;

/**
 * Traverse `obj` in depth-first order.
 */
export function* traverse(obj /*: Object */ = {}) /*: Generator<Node, void, void> */ {
  const stack = [new Node('', obj)];
  const seen  = [];

  // While stack is not empty,
  while (stack.length) {
    // Pop node off stack.
    const node = stack.shift();

    // Visit node.
    if (node.value !== obj) yield node;

    // If node is not an object, we don't need to add children.
    if (!isObject(node.value)) continue;

    // Otherwise, mark the node as "seen".
    seen.push(node.value);

    // Then, for each of the node's children,
    const { key: parentKey } = node;
    keys(node.value).forEach(childKey => {
      const key   = parentKey ? `${parentKey}.${childKey}` : childKey;
      const value = get(obj, key);

      // Do nothing if we've seen the child.
      if (includes(seen, value)) return;

      // Otherwise, add the child to the stack.
      const n = new Node(key, value);
      stack.push(n);
    });
  }
}

/**
 * Given an object, collect all key-value pairs of the object into an
 * array and return the array.
 */
export default function pairs(obj /*: Object */) {
  const a = [];
  for (const v of traverse(obj)) a.push(v);
  return a;
}