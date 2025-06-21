import type { ApiResponse, LoginParams } from './types'
import http from '~/utils/http'

export async function getPKApi() {
  return http.get<any>('/app/getPK')
}

export async function login(data: LoginParams) {
  return http.post<ApiResponse<{ token: string }>>('/auth/login', data)
}
