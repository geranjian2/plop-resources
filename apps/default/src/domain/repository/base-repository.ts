
export * from './base-repository'
export interface IBaseRepository<T> {
  save: (user: T) => Promise<T>
  getAll: () => Promise<T[]>
  getById: (userId: string) => Promise<T | undefined>
  delete: (user: T) => Promise<string>
  update: (user: T) => Promise<T>
}