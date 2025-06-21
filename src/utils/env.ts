/**
 * 获取环境变量
 * @param envKey 环境变量key
 * @param defaultValue 默认值
 */
export function getEnvValue<T = string>(envKey: keyof ImportMetaEnv, defaultValue?: T): T {
  const envValue = import.meta.env[envKey]
  return (envValue ?? defaultValue) as T
}

// 环境变量
export const env = {
  // 应用信息
  appTitle: getEnvValue('VITE_APP_TITLE', '外贸商城'),

  // API配置
  apiUrl: getEnvValue('VITE_APP_API_BASE_URL', '/api'),
  apiTimeout: getEnvValue<number>('VITE_APP_API_TIMEOUT', 15000),
  uploadUrl: getEnvValue('VITE_APP_UPLOAD_URL', '/api/upload'),

  // 功能开关
  enablePwa: getEnvValue<boolean>('VITE_APP_ENABLE_PWA', false),
  enableI18n: getEnvValue<boolean>('VITE_APP_ENABLE_I18N', true),
  enableDevTools: getEnvValue<boolean>('VITE_APP_ENABLE_DEVTOOLS', false),
  enableDebug: getEnvValue<boolean>('VITE_APP_ENABLE_DEBUG', false),

  // 服务器配置
  devServerPort: getEnvValue<number>('VITE_APP_DEV_SERVER_PORT', 3000),
  devServerHost: getEnvValue('VITE_APP_DEV_SERVER_HOST', 'localhost'),

  // CDN配置
  cdnUrl: getEnvValue('VITE_APP_CDN_URL', ''),

  // 错误追踪
  sentryDsn: getEnvValue('VITE_APP_SENTRY_DSN', ''),

  // 运行环境
  isDev: getEnvValue<boolean>('VITE_APP_IS_DEV', import.meta.env.DEV),
  isProd: import.meta.env.PROD,
  mode: getEnvValue('VITE_APP_MODE', import.meta.env.MODE),
}

export default env
