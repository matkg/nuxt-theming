/** Minimal deep merge where `override` wins. Arrays are replaced, not concatenated. */
export function deepMerge<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base
  if (
    typeof base !== 'object' ||
    base === null ||
    Array.isArray(base) ||
    typeof override !== 'object' ||
    Array.isArray(override)
  ) {
    return override as T
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) }
  for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
    result[key] = deepMerge(result[key], value)
  }
  return result as T
}
