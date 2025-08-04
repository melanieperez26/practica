import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ClientesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('ClientesGateway');

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // Method to emit cliente updates to all connected clients
  emitClienteCreated(cliente: any) {
    this.server.emit('clienteCreated', cliente);
  }

  // Method to emit cliente updates to a specific client
  emitClienteUpdated(cliente: any) {
    this.server.emit('clienteUpdated', cliente);
  }

  emitClienteDeleted(id: string) {
    this.server.emit('clienteDeleted', id);
  }
}
