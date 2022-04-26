import express from 'express'
import { buscarTodos } from '../controller/controladores.js'

export let rutas=express.Router()

rutas.get('/API/v1/viernes', buscarTodos)

rutas.get('/API/v1/viernes', controlador.buscarTodos)
rutas.get('/API/v1/viernes/:id', controlador.buscarPorId)
rutas.post('/API/v1/viernes', controlador.insertar)
rutas.put('/API/v1/viernes/id', controlador.editar)
rutas.delete('/API/v1/viernes/id', controlador.eliminar)