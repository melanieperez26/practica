import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody } from '@nestjs/websockets';
import {Server} from 'socket.io';
import { InventariosService } from './inventarios.service';
import {OnGatewayConnection, OnGatewayDisconnect} from '@nestjs/websockets';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Inventario } from './entities/inventario.entity';

@WebSocketGateway({cors: true})
export class InventariosGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss: Server;

  constructor(
    private readonly inventariosService: InventariosService,
  ) {}
  handleConnection(client: any, ...args: any[]) {
    const token = client.handshake.headers.authorization as string;

    //validarToken
    console.log(`Token: ${token}`);
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createInventario')
  async create(@MessageBody() createInventarioDto: CreateInventarioDto): Promise<boolean> {
    await this.inventariosService.create(createInventarioDto);
    const inventarios = await this.inventariosService.findAll();
    this.wss.emit('newInventarios', inventarios);
    return true;
  }

  @SubscribeMessage('findAllInventario')
  async findAll(): Promise<Inventario[]> {
    return this.inventariosService.findAll();
  }

  @SubscribeMessage('findOneInventario')
  async findOne(@MessageBody() id: number): Promise<Inventario | null> {
    return this.inventariosService.findOne(id);
  }

  @SubscribeMessage('updateInventario') 
  async update(@MessageBody() updateInventarioDto: UpdateInventarioDto): Promise<boolean> {
    await this.inventariosService.update(updateInventarioDto.id, updateInventarioDto);
    const inventarios = await this.inventariosService.findAll();
    this.wss.emit('updateInventarios', inventarios);
    return true;
  }

  @SubscribeMessage('removeInventario')
  async remove(@MessageBody() id: number): Promise<boolean> {
    await this.inventariosService.remove(id);
    const inventarios = await this.inventariosService.findAll();
    this.wss.emit('deleteInventarios', inventarios);
    return true;
  }
}
