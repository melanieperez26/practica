export class Receta {
  constructor(
    public id: string,
    public nombre: string,
    public tiempoPreparacion: number,
    public ingredientes: string[]
  ) {}
}