/*
 * @Author: Loong wentloop@gmail.com
 * @Date: 2025-06-21 09:31:41
 * @LastEditors: Loong wentloop@gmail.com
 * @LastEditTime: 2025-06-21 09:33:02
 * @FilePath: \web-foreign-trade-mall\src\types\env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 应用标题 */
  readonly VITE_APP_TITLE: string
  /** API基础URL */
  readonly VITE_API_URL: string
  /** 上传文件URL */
  readonly VITE_UPLOAD_URL: string
  /** 静态资源URL */
  readonly VITE_ASSETS_URL: string
  /** 是否使用Mock数据 */
  readonly VITE_USE_MOCK: boolean
  /** 是否启用PWA */
  readonly VITE_USE_PWA: boolean
  /** 是否启用开发工具 */
  readonly VITE_USE_DEVTOOLS: boolean
  /** 是否启用代码压缩 */
  readonly VITE_BUILD_COMPRESS: boolean
  /** 是否删除console */
  readonly VITE_DROP_CONSOLE: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
