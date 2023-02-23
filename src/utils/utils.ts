/**
 * Creates a random unsecure string of 8 characters for limited ID purposes
 * @returns a random string
 */
export function createRandomId(): string {
  return Math.random().toString(36).substring(2, 10);
}

/**
 * Takes an array of objects and a current key name and a new key name, and then changes the name of the key for all objects in the array
 * @param arr original array of objects
 * @param currentKey old key name
 * @param newKey new key name
 * @returns modified array of objects with new key names
 */
export function changeObjectKeyName(
  arr: { [key: string]: unknown }[],
  currentKey: string,
  newKey: string
): any[] {
  // TODO: fix any type
  arr.forEach((obj) => {
    obj[newKey] = obj[currentKey];
    delete obj[currentKey];
  });
  return arr;
}

/**
 * Creates a deep copy of an object
 * @param obj original object
 * @returns new deep copy of original object
 */
export function deepCopyObj(obj: { [key: string]: unknown }): {
  [key: string]: unknown;
} {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Creates a deep copy of an array of objects
 * @param arr original array of objects
 * @returns new deep copy of original array of objects
 */
export function deepCopyArrayObj(
  arr: readonly any[] | any[]
  // TODO: fix any type
): { [key: string]: unknown }[] {
  return arr.map((obj) => deepCopyObj(obj));
}
