import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { BadRequestError } from '../errors';

export const PrismaErrorHandler = (e: any) => {
  if (e instanceof PrismaClientKnownRequestError) {
    throw new BadRequestError(e.message.split('\n')[8].split('.')[0]);
  } else {
    throw e;
  }
};
