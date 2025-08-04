import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PagosService } from './pagos.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';

@WebSocketGateway()
export class PagosGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly pagosService: PagosService) {}

  emitPagoCreated(pago: Pago) {
    this.server.emit('pagoCreated', pago);
  }

  emitPagoUpdated(pago: Pago) {
    this.server.emit('pagoUpdated', pago);
  }

  emitPagoDeleted(id: string) {
    this.server.emit('pagoDeleted', id);
  }

  @SubscribeMessage('createPago')
  create(@MessageBody() createPagoDto: CreatePagoDto) {
    return this.pagosService.create(createPagoDto);
  }

  @SubscribeMessage('findAllPagos')
  findAll() {
    return this.pagosService.findAll();
  }

  @SubscribeMessage('findOnePago')
  findOne(@MessageBody() id: string) {
    return this.pagosService.findOne(id);
  }
}
