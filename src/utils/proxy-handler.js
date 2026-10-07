// Symbol keys belong to the changeset object itself. Turning them into strings
// would look up keys like "Symbol(PROXY_CONTENT)" on the content, and record
// them as changes on set.
const proxyHandler = {
  get(targetBuffer, key, receiver) {
    if (typeof key === 'symbol') {
      return Reflect.get(targetBuffer, key, receiver);
    }
    return targetBuffer.get(key);
  },

  set(targetBuffer, key, value, receiver) {
    if (typeof key === 'symbol') {
      return Reflect.set(targetBuffer, key, value, receiver);
    }
    targetBuffer.set(key, value);
    return true;
  },
};

export default proxyHandler;
