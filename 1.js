const mongoose = require ('mongoose')
const url_BD = 'mongodb://localhost:27017/uno'

mongoose_connect ('mongodb://localhost:27017/uno')
.then(() => 
console.long("funciona conexion")
.catch((error) =>
    console.long ("no funciona la conexion") 
)
)
const esquema_mongoose  = new mongoose.Schema(
{
    name:{
    type: String
    },
    edad: {
    type: String
   },
   escuela:{
    type: String
   },
   mascota:{
    type: String
   },
})
const modelo_uno = new mongoose.model(
"tabla uno", esquema_uno
)
modelo_uno.create(
    {
        name: "karen",
        edad: "22",
        escuela: "metropolitana",
        mascota: "gato",
    }
)
// 2.

const mongoose = require ('mongoose')
const url_BD = 'mongodb://localhost:27017/dos'

 mongoose.connect ('mongodb://localhost:27017/dos')
.then(()=> {
    console.long("si funciona")
})
.catch ((error)=> {
    console.long("no funciona")
})
const esquema_dos = new mongoose.Schema(
{
    name_tienda:{
        type: String
    },
    ubicacion:{
        type: String
    },
    producto:{
        type: String
    },
    precio:{
        type: String
    } 
})
const modelo_dos = new mongoose.model(
    tabla_dos, esquema_dos 
)
modelo_dos.create(
    {
       name: "Walmart" ,
       ubicacion: "galerias",
       producto:"shampoo",
       precio:"78",
    }    
)
//3
const mongoose = require ('mongoose')
const url = "localhost"

mongoose.connect ('url')
.then(() =>{
    console.long("fuunciona")
}
)
.catch((error)=>{
    console.log("no funciona")
}
)
const esquema_tres = new mongoose.Schema(
{
    animal:{
        type: String
    },
    raza:{
        type: String
    },
    tamaño:{
        type: Number
    },
    color:{
        type: String

    },
    
})