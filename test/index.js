import mapMerge from '../src';
import assert from 'power-assert';

describe('mapMerge', () => {
  it('merges objects', () => {
    const actual = mapMerge([{a:1}, {b:2}], x => x);
    assert.deepEqual(actual, {a:1, b:2});
  });

  it('transforms objects', () => {
    const actual = mapMerge([['a', 1], ['b', 2]], x => ({[x[0]]:x[1]}));
    assert.deepEqual(actual, {a:1, b:2});
  });
});
