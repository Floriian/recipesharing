import {
  CallHandler,
  ExecutionContext,
  HttpException,
  NestInterceptor,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Observable, catchError, map, throwError } from 'rxjs';

/**
 * This interceptor add success field to every response.
 */
export class BaseResponseInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return { success: true, data };
      }),
      catchError((error) => {
        return throwError(() => this.errorHandler(error));
      }),
    );
  }

  private errorHandler(error: any) {
    if (error instanceof HttpException) {
      throw new HttpException(
        {
          success: false,
          data: {
            message: error.message,
            statusCode: error.getStatus(),
            causedBy: error.getResponse()['message'],
          },
        },
        error.getStatus(),
      );
    } else {
      return throwError(() => {
        throw error;
      });
    }
  }
}
