import express from 'express'
import config from './config.js'

import RouterProductos from './router/productos.js'
import RouterPedidos from './router/pedidos.js'
import RouterUpload from './router/upload.js'

import CnxMongoDB from './model/DBMongo.js'

import cors from 'cors'

const app = express()
app.use(cors())         // Habilito CORS: peticiones al servidor desde orígenes cruzados

app.use(express.static('public'))

app.use(express.json())

// -------------- Rutas / endpoints API RESTFUL ------------------
app.use('/api/productos', new RouterProductos().config())
app.use('/api/pedidos', new RouterPedidos().config())
app.use('/api/upload', new RouterUpload().config())


// --------------- Listen del Servidor ------------------
if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful ECommerce escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))


