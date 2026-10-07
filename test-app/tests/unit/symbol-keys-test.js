import ChangesetKlass, { Changeset, ValidatedChangeset } from 'ember-changeset';
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

const factories = {
  Changeset: (obj) => Changeset(obj),
  ChangesetKlass: (obj) => new ChangesetKlass(obj),
  ValidatedChangeset: (obj) => ValidatedChangeset(obj),
};

module('Unit | symbol keys', function (hooks) {
  setupTest(hooks);

  Object.entries(factories).forEach(([name, create]) => {
    test(`${name}: Ember get reads a strict record's field`, function (assert) {
      const dummy = create(strictRecord({ title: 'About' }));

      assert.strictEqual(get(dummy, 'title'), 'About');
    });

    test(`${name}: a symbol key is stored on the changeset, not as a change`, function (assert) {
      const marker = Symbol('marker');
      const dummy = create({ title: 'About' });

      dummy[marker] = 'set';

      assert.strictEqual(dummy[marker], 'set');
      assert.false(dummy.isDirty);
    });
  });
});
