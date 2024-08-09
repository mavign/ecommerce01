class ModelMem {

    constructor() {
        this.productos = [
            {
                nombre: "'Harry Potter y la Piedra Filosofal'",
                precio: "20000",
                stock: 100,
                marca: "Salamandra",
                categoria: "Libros",
                descripcionCorta: "Libro 1 de la Saga Harry Potter",
                descripcionLarga: "Un niño descubre que es un mago y comienza su épica aventura en Hogwarts, enfrentando a Lord Voldemort.",
                edadDesde: 6,
                edadHasta: 0,
                foto: "https://m.media-amazon.com/images/I/51lEw8wGCPL._SY445_SX342_.jpg",
                envio: true,
                id: "1"
            },
            {
                nombre: "'Harry Potter y la Cámara Secreta'",
                precio: 21000,
                stock: 99,
                marca: "Salamandra",
                categoria: "Libros",
                descripcionCorta: "Libro 2 de la Saga Harry Potter",
                descripcionLarga: "Harry desentraña los misterios de una siniestra cámara oculta en Hogwarts mientras lucha contra el heredero de Slytherin",
                edadDesde: 6,
                edadHasta: 0,
                foto: "https://m.media-amazon.com/images/I/51vyPHnXqoL._SY445_SX342_.jpg",
                envio: true,
                id: "2"
            },
            {
                nombre: "'Harry Potter y el Prisionero de Azkaban'",
                precio: 22000,
                stock: 125,
                marca: "Salamandra",
                categoria: "Libros",
                descripcionCorta: "Libro 3 de la Saga Harry Potter",
                descripcionLarga: "Harry se entera del pasado de su padre y enfrenta a Sirius Black, mientras descubre la verdad sobre su conexión con el temible mago que lo persigue.",
                edadDesde: 6,
                edadHasta: 0,
                foto: "https://m.media-amazon.com/images/I/41G6AGP-QHL._SY445_SX342_.jpg",
                envio: true,
                id: "3"
            }
            
        ]
    }

    obtenerProductos = async () => this.productos
    
    obtenerProducto = async id => {
        const producto = this.productos.find(producto => producto.id === id)
        return producto || {}
    }

    guardarProducto = async producto => {
        producto.id = String(+(this.productos[this.productos.length - 1]?.id || 0) + 1)

        this.productos.push(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        producto.id = id

        const index = this.productos.findIndex(p => p.id === id)
        const productoAnt = this.productos[index]
        const productoNuevo = { ...productoAnt, ...producto }

        this.productos.splice(index, 1, productoNuevo)
        return productoNuevo
    }

    borrarProducto = async id => {
        let productoEliminado = {}

        const index = this.productos.findIndex(p => p.id === id)

        if (index != -1) {
            productoEliminado = this.productos.splice(index, 1)[0]
        }
        return productoEliminado
    }
}

export default ModelMem