import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';                  

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SimulacionesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('SimulacionesGateway');

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // Method to emit simulation updates to all connected clients
  emitSimulationCreated(simulation: any) {
    this.server.emit('simulationCreated', simulation);
  }

  // Method to emit simulation updates to a specific client
  emitSimulationUpdated(simulation: any) {
    this.server.emit('simulationUpdated', simulation);
  }
}
