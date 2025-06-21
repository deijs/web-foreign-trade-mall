// 通用响应格式
export interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

// 分页请求参数
export interface PaginationParams {
  page: number
  pageSize: number
}

// 分页响应数据
export interface PaginationResult<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}

// 用户相关类型
export interface UserInfo {
  id: number
  username: string
  email: string
  avatar?: string
  role: string
  createdAt: string
  updatedAt: string
}

export interface LoginParams {
  username: string
  password: string
}
