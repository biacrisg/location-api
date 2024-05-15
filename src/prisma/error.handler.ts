import { HttpException, HttpStatus } from '@nestjs/common' 
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export const PrismaErrorHandler = (error: Error) => {
  if (error instanceof PrismaClientKnownRequestError) {
    return new HttpException({
      ...error
    }, HttpStatus.BAD_REQUEST)
  } else if (error instanceof HttpException) {
    throw error
  }
  
  return new HttpException(error, HttpStatus.BAD_REQUEST)
}