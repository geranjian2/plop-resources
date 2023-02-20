import { type UserModel } from '../models'
import { BaseRepository } from './base-repository'
export * from './user-repository'
export interface IUserRepository extends IBaseRepository<UserModel> {
  base?:string
}