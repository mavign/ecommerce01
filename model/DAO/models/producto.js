import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    descripcionCorta: String,
    descripcionLarga: String,
    edadDesde: Number,
    edadHasta: Number,    
    detalles: String,
    foto: String,
    envio: Boolean,
}, { versionKey: false })

export const ProductoModel = mongoose.model('productos', productoSchema)