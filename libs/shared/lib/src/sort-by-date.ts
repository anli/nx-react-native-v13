export const sortByDate =
  <T, K extends keyof T>(key: K) =>
  (a: T, b: T) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new Date((a?.[key] as any) ?? new Date()).getTime() -
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new Date((b?.[key] as any) ?? new Date()).getTime();
