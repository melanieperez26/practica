import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const rpcError = exception.getError();

    
    if (typeof rpcError === 'string' && rpcError.includes('Empty response')) {
      response.status(500).json({
        statusCode: 500,
        message: rpcError.substring(0, rpcError.indexOf('(') - 1),
      });
      return;
    }

    if (
      typeof rpcError === 'object' &&
      rpcError !== null &&
      'status' in rpcError &&
      'message' in rpcError
    ) {
      const typedError = rpcError as { status: number | string; message: string };
      const status = isNaN(+typedError.status) ? 400 : +typedError.status;

      response.status(status).json({
        statusCode: status,
        message: typedError.message,
      });
      return;
    }


    response.status(400).json({
      statusCode: 400,
      message: typeof rpcError === 'string' ? rpcError : 'Unknown RPC error',
    });
  }
}
