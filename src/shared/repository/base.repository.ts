import { PrismaErrorHandler } from '../errorHandler';
import { InvalidModelError } from '../errors';
import { DatabaseService, Models } from '../service';
import { IBaseRepository } from './base.repository.interface';

export class BaseRepository<T extends { id: any }>
  implements IBaseRepository<T>
{
  constructor(
    private readonly db: DatabaseService,
    private readonly model: string,
  ) {
    if (!Models.includes(model))
      throw new InvalidModelError(`Model ${model} already exists`);
  }

  async create(data: any): Promise<T> {
    let object = undefined;
    try {
      object = await this.db[this.model].create({ data });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async createMany(data: any[]): Promise<{ count: number }> {
    let object = undefined;
    try {
      object = await this.db[this.model].createMany({ data: data });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async updateOne(id: T['id'], query: any): Promise<T> {
    let object = undefined;
    try {
      object = await this.db[this.model].update({
        where: { id },
        ...query,
      });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async updateMany(where: any, data: any): Promise<T> {
    let object = undefined;
    try {
      object = await this.db[this.model].updateMany({
        where,
        data,
      });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async remove(id: T['id']): Promise<T> {
    let object = undefined;
    try {
      object = await this.db[this.model].update({
        where: { id },
        data: { deletedAt: new Date() },
      });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async deleteMany(query: any): Promise<{ count: number }> {
    let object = undefined;
    try {
      object = await this.db[this.model].deleteMany({
        ...query,
      });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async delete(id: T['id']): Promise<void> {
    let object = undefined;
    try {
      object = await this.db[this.model].delete({
        where: { id },
      });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async findAll(): Promise<T[]> {
    let object = undefined;
    try {
      object = await this.db[this.model].findMany();
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async findById(id: T['id']): Promise<T> {
    let object = undefined;
    try {
      object = await this.db[this.model].findUnique({ where: { id } });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async findMany(query: any): Promise<T[]> {
    let object = undefined;
    try {
      object = await this.db[this.model].findMany({ ...query });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }

  async findOne(query: any): Promise<T> {
    let object = undefined;
    try {
      object = await this.db[this.model].findFirst({ ...query });
    } catch (e) {
      PrismaErrorHandler(e);
    }
    return object;
  }
}
