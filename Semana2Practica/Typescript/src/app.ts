let nombre_variable: string = "hola mundo"
console.log(nombre_variable)

const student: Istudent = {
    id: 1,
    name: "Melanie",
    correo: "melani@gmail.com",
    direccion: "casa",
}


//interfaces
interface Istudent{
    id: number;
    name: string;
    correo:  string;
    direccion: string;
    calificacion?: number; 
}

//arreglo con tres estudiantes
const estudiantes: Istudent[]=[
    {
        id: 11,
        name: "Melanie",
        correo: "melani@gmail.com",
        direccion: "casa",
    },

    {
        id: 22,
        name: "Denisse",
        correo: "Denisse@gmail.com",
        direccion: "casa",
        calificacion: 10,
    }
]

//para agregar un estudiante mas 
estudiantes.push({id:33,name:"maria",correo:"maria@gmail.com", direccion:"su casa"});

//otra forma 
estudiantes.push(student);

//como crear una funcion para agregar estudiantes al arreglo

function Agregar(estudiante: Istudent):void{
    estudiantes.push(estudiante);
}


const estudiante1: Istudent={id:44,name:'',correo:'',direccion:'',}
Agregar(estudiante1)



function Agregar2(param:Istudent,callback:(estudiante: Istudent)=>void){
    estudiantes.push(param);
    callback(param)
}

const estudiante2:Istudent={id:44,name:'',correo:'',direccion:'',}
Agregar2(estudiante2,(param:Istudent)=>console.log);

function Agregar3(param:Istudent):Promise<Istudent>{
    return new Promise((resolve)=>{
        estudiantes.push(param);
        setTimeout(()=>{
            resolve(param)

        },
        1000
        )
    })
   
}

//para llamar a la funcion
/*Agregar3(estudiante1).then((Istudent)=>{
    console.log(student);
})
*/

async function main (){
    await Agregar3(estudiante1)
    try 
    {
        await Agregar3(estudiante1)
    }
    catch (ex){

    }
    finally
    {

    }

}
main()
