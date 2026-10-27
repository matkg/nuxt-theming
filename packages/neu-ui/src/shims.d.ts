declare module '#imports' {
  export function useAppConfig(): Record<string, any>
}

declare module '#build/app.config' {
  const appConfig: Record<string, any>
  export default appConfig
}
