export class Solicitud {
    id: string;
    clienteId: string;
    prestamoId: string;
    monto: number;
    tasaInteres: number;
    plazo: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: string;
}