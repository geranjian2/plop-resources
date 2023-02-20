import { type UserAdminModel } from '../models'
import { BaseRepository } from './base-repository'
export * from './user-admin-repository'
export interface UserAdminRepository extends BaseRepository<UserAdminModel> {
  base?:string
}