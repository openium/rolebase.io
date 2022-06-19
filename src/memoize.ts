// Memoize a function result
// Results are cached in a Map forever

export function memoize<Args extends any[], Result>(
  fn: (...args: Args) => Result
) {
  const map = new Map<string, Result>()

  const memoized = (...args: Args): Result => {
    const key = JSON.stringify(args)
    if (map.has(key)) {
      const result = map.get(key)
      if (result !== undefined) {
        return result
      }
    }
    const result = fn(...args)
    map.set(key, result)
    return result
  }
  return memoized
}
