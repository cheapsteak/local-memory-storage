import { LocalMemoryStorage } from '../src';

test('webstorage methods should work', () => {
  const memoryStorage = new LocalMemoryStorage();
  memoryStorage.setItem('a', 'b');
  expect(memoryStorage.getItem('a')).toBe('b');

  memoryStorage.clear();
  expect(memoryStorage.getItem('a')).toBe(null);

  memoryStorage.setItem('a', 'c');
  expect(memoryStorage.getItem('a')).toBe('c');

  memoryStorage.removeItem('a');
  expect(memoryStorage.getItem('a')).toBe(null);
});

test('behaviours should match localStorage', () => {
  const memoryStorage = new LocalMemoryStorage();
  expect(Object.keys(memoryStorage)).toEqual([]);

  memoryStorage.setItem('a', 'b');
  expect(Object.keys(memoryStorage)).toEqual(['a']);
  expect(Reflect.ownKeys(memoryStorage)).toEqual(['a']);
  expect(Object.getOwnPropertyNames(memoryStorage)).toEqual(['a']);
  expect(memoryStorage.getItem('a')).toBe('b');
  expect(memoryStorage).toEqual({ a: 'b' });
  expect(memoryStorage['a']).toEqual('b');
  expect(memoryStorage).toMatchInlineSnapshot(`
    bound LocalMemoryStorage {
      "a": "b",
    }
  `);
});
