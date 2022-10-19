export abstract class IBaseRepository<T extends { id: any }> {
  abstract create(data: any): Promise<T>;
  abstract createMany(data: any[]): Promise<{ count: number }>;
  abstract findAll(): Promise<T[]>;
  abstract findById(id: T['id']): Promise<T>;
  abstract findMany(query: any): Promise<T[]>;
  abstract findOne(query: any): Promise<T>;
  abstract remove(id: T['id']): Promise<T>;
  abstract delete(id: T['id']): Promise<void>;
  abstract updateOne(id: T['id'], data: any): Promise<T>;
  abstract deleteMany(query: any): Promise<{ count: number }>;
}
