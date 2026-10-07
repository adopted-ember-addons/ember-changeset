import { Changeset, EmberChangeset } from 'ember-changeset';
import { get } from '@ember/object';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

// Like a WarpDrive schema record: reading a string key outside its schema
// throws, while symbol reads and `in` answer without throwing.
function strictRecord(fields) {
  return new Proxy(fields, {
    get(target, prop) {
      if (typeof prop === 'symbol' || prop in target) {
        return Reflect.get(target, prop);
      }
      throw new Error(`No field named ${String(prop)} on page`);
    },
  });
}

module('Unit | strict content', function (hooks) {
  setupTest(hooks);

  test('Ember get reads a strict record field that has no value yet', function (assert) {
    const dummy = Changeset(strictRecord({ title: undefined }));

    assert.strictEqual(get(dummy, 'title'), undefined);
  });

  test('sets a strict record field', function (assert) {
    const dummy = Changeset(strictRecord({ title: 'About' }));

    dummy.set('title', 'Contact');

    assert.strictEqual(dummy.get('title'), 'Contact');
  });

  test('safeGet reads a key off a primitive', function (assert) {
    const dummy = new EmberChangeset({});

    assert.strictEqual(dummy.safeGet('About', 'length'), 5);
  });
});
