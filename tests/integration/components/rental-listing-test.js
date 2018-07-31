import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import {render, click} from '@ember/test-helpers';
module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.rental = EmberObject.create({
      image: 'fake.jpg',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    });
  });
  test('should display rental details', async function(assert) {
      await render(hbs`{{rental-listing rental=rental}}`);
      assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title');
      assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner', 'Owner: test-owner');
  });
  test('should toggle wide class on click ', async function(assert) {
      await render(hbs`{{rental-listing rental=rental}}`);
      assert.notOk(this.element.querySelector('.image.wide'), 'initiallysmall image');
      await click('.image');
      assert.ok(this.element.querySelector('.image.wide'), 'rendered wide');
      await click('.image');
      assert.notOk(this.element.querySelector('.image.wide'), 'rendered to small again');
  });
});
