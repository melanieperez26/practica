// Variables 
const sistemaAgro: string = "SmartAgro"
let totalCultivos: number = 3
console.log(`Sistema: ${sistemaAgro}`); 
console.log(`Cultivos actuales: ${totalCultivos}`);


//interfaces
interface Cultivo { 
    id: number; nombre: string; tipo: string; temporada: string; 
}

interface Parcela { 
    id: number; ubicacion: string; tamanoM2: number; 
}

interface Temporada { 
    id: number; nombre: string; fechaInicio: string; fechaFin: string; 
}

//Objetos
const cultivo1: Cultivo ={
    id: 1, 
    nombre: "Maíz", 
    tipo: "Grano", 
    temporada: "Verano", 
}
const cultivo2: Cultivo = { 
    id: 2, 
    nombre: "Papa", 
    tipo: "Raíz", 
    temporada: "Invierno", 
};

//Arreglo de Objetos 
const cultivos: Cultivo[]=[cultivo1, cultivo2];

//Funciones

function AgregarCultivo(id: number, nombre: string, tipo: string, temporada: string ): Cultivo{
    return { id, nombre, tipo, temporada };
}

function MostrarCultivo(c:Cultivo): void{
    console.log(`${c.nombre} (${c.tipo}) - Temporada: ${c.temporada}`);
}

//spread y rest
const cultivosExtra:Cultivo[]=[...cultivos,{
    id: 3, nombre: "Arroz", tipo: "Grano", temporada: "Otoño" 
},];

function registrarCultivos(...nuevos:Cultivo[]){
    nuevos.forEach(c=>console.log(`Cultivo registrado: ${c.nombre}`));
}

//Callbacks
function procesarCultivo(cultivo: Cultivo, callback:(c:Cultivo)=>void):void{
    callback(cultivo)
}

procesarCultivo(cultivo1, MostrarCultivo);

//Promise 
function guardarCultivo(c:Cultivo):Promise<string>{
    return new Promise((resolve)=>{setTimeout(()=>{
        resolve(`Cultivo ${c.nombre} guardado correctamente.`);
    },1000);});
}

//Async/Await
async function main (){
    const cultivoNuevo = AgregarCultivo(4, "Cebada", "Grano", "Primavera");
    const mensaje = await guardarCultivo(cultivoNuevo); console.log(mensaje); 

}
main()
