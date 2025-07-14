import { SubscribeMessage, WebSocketGateway, MessageBody } from '@nestjs/websockets';
import {DistribucionesService} from './distribuciones.service';
import {CreateDistribucioneDto} from './dto/create-distribucione.dto';
import {UpdateDistribucioneDto} from './dto/update-distribucione.dto';
import {OnGatewayConnection, OnGatewayDisconnect} from '@nestjs/websockets';
import { Server} from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';
import { Distribucione } from './entities/distribucione.entity';



@WebSocketGateway({cors: true})
export class DistribucionesGateway implements OnGatewayConnection, OnGatewayDisconnect  {

  @WebSocketServer()
  wss: Server;

  constructor(
    private readonly distribucionesService: DistribucionesService,
  ) {}

  handleConnection(client: any, ...args: any[]) {
    const token = client.handshake.headers.authorization as string;

    //validarToken
    console.log(`Token: ${token}`);
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createDistribucion')
  async create(@MessageBody() createDistribucioneDto: CreateDistribucioneDto): Promise<boolean> {
    await this.distribucionesService.create(createDistribucioneDto);
    const distribuciones = await this.distribucionesService.findAll();
    this.wss.emit('nuevodistribuciones', distribuciones);
    return true;
  }

  @SubscribeMessage('finAllDistribucion')
  async findAll(): Promise<Distribucione[]> {
    return this.distribucionesService.findAll();
  }

  @SubscribeMessage('findOneDistribucion')
  async findOne(@MessageBody() id: number): Promise<Distribucione | null> {
    return this.distribucionesService.findOne(id);
  }

  @SubscribeMessage('updateDistribucion') 
  async update(@MessageBody() updateDistribucioneDto: UpdateDistribucioneDto): Promise<boolean> {
    await this.distribucionesService.update(updateDistribucioneDto.id, updateDistribucioneDto);
    const distribuciones = await this.distribucionesService.findAll();
    this.wss.emit('actualizarDistribuciones', distribuciones);
    return true;
  }

  @SubscribeMessage('removeDistribucion')
  async remove(@MessageBody() id: number): Promise<boolean> {
    await this.distribucionesService.remove(id);
    const distribuciones = await this.distribucionesService.findAll();
    this.wss.emit('borrarDistribuciones', distribuciones);
    return true;
  }
}
