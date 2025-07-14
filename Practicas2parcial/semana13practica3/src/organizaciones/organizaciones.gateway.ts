import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody } from '@nestjs/websockets';
import {Server} from 'socket.io'; 
import { OrganizacionesService } from './organizaciones.service';
import {OnGatewayConnection, OnGatewayDisconnect} from '@nestjs/websockets';
import { CreateOrganizacioneDto } from './dto/create-organizacione.dto';
import { UpdateOrganizacioneDto } from './dto/update-organizacione.dto';
import { Organizacione } from './entities/organizacione.entity';

@WebSocketGateway({cors: true})
export class OrganizacionesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly organizacionesService: OrganizacionesService,
  ) {}
  handleConnection(client: any, ...args: any[]) {
    const token = client.handshake.headers.authorization as string;

    //validarToken
    console.log(`Token: ${token}`);
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }
  @WebSocketServer() 
  wss: Server;

  @SubscribeMessage('createOrganizacion')
  async create(@MessageBody() createOrganizacioneDto: CreateOrganizacioneDto): Promise<Organizacione> {
    const organizacione = await this.organizacionesService.create(createOrganizacioneDto);
    this.wss.emit('nuevaOrganizacion', organizacione);
    return organizacione;
  }

  @SubscribeMessage('findAllOrganizacion')
  async findAll(): Promise<Organizacione[]> {
    return this.organizacionesService.findAll();
  }

  @SubscribeMessage('findOneOrganizacion')
  async findOne(@MessageBody() id: number): Promise<Organizacione | null> {
    return this.organizacionesService.findOne(id);
  }

  @SubscribeMessage('updateOrganizacion') 
  async update(@MessageBody() updateOrganizacioneDto: UpdateOrganizacioneDto): Promise<boolean> {
    await this.organizacionesService.update(updateOrganizacioneDto.id, updateOrganizacioneDto);
    const organizaciones = await this.organizacionesService.findAll();
    this.wss.emit('actualizarOrganizacion', organizaciones);
    return true;
  }

  @SubscribeMessage('removeOrganizacion')
  async remove(@MessageBody() id: number): Promise<boolean> {
    await this.organizacionesService.remove(id);
    const organizaciones = await this.organizacionesService.findAll();
    this.wss.emit('borrarOrganizacion', organizaciones);
    return true;
  }
}
