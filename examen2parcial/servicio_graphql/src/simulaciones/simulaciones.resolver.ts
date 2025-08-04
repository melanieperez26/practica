import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SimulacionesService } from './simulaciones.service';
import { Simulacione } from './entities/simulacione.entity';
import { CreateSimulacioneInput } from './dto/create-simulacione.input';
import { UpdateSimulacioneInput } from './dto/update-simulacione.input';

@Resolver(() => Simulacione)
export class SimulacionesResolver {
  constructor(private readonly simulacionesService: SimulacionesService) {}

  @Mutation(() => Simulacione)
  createSimulacione(@Args('createSimulacioneInput') createSimulacioneInput: CreateSimulacioneInput) {
    return this.simulacionesService.create(createSimulacioneInput);
  }

  @Query(() => [Simulacione], { name: 'simulaciones' })
  findAll() {
    return this.simulacionesService.findAll();
  }

  @Query(() => Simulacione, { name: 'simulacione' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.simulacionesService.findOne(id);
  }

  @Mutation(() => Simulacione)
  updateSimulacione(@Args('updateSimulacioneInput') updateSimulacioneInput: UpdateSimulacioneInput) {
    return this.simulacionesService.update(updateSimulacioneInput.id, updateSimulacioneInput);
  }

  @Mutation(() => Simulacione)
  removeSimulacione(@Args('id', { type: () => String }) id: string) {
    return this.simulacionesService.remove(id);
  }
}
