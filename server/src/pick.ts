export function pick<Object extends object, Key extends keyof Object>(
  obj: Object | undefined,
  keys: Array<Key>,
): Partial<Object> | undefined {
  if (!obj) {
    return undefined;
  }

  const result: Partial<Object> = {};

  keys.forEach((key: Key) => {
    result[key] = obj[key];
  });

  return result;
}
