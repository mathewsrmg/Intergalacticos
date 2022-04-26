import express from 'express'
import {rutas} from '../routes/rutas.js'

export class Servidor{
    constructor(){
        this.app = express()
        this.enrutarPeticiones()
        this.llamarAuxiliares()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log("Servidor encendido")
        })
    }

    enrutarPeticiones(){
        this.app.use('/',rutas)
    }

    llamarAuxiliares(){
        this.app.use(express.json())
    }

}