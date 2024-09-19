let BaseDatos = [
  {
    nombre: "Control PS5",
    precio: 300000,
    descripcion: "Control original y firmado por Sony para jugar PS5",
    categoria: ["juegos", "control", "videojuegos"],
    stock: 10,
    colores_disp: ["Rojo", "Negro"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Escape Akrapovic",
    precio: 200000,
    descripcion: "Slip On AAA para moto",
    categoria: ["Motos", "Accesorios", "Vehiculos"],
    stock: 50,
    colores_disp: ["Rojo", "Negro", "Tornasol"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Control PS5",
    precio: 300000,
    descripcion: "Control original y firmado por Sony para jugar PS5",
    categoria: ["juegos", "control", "videojuegos"],
    stock: 10,
    colores_disp: ["Rojo", "Negro"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Escape Akrapovic",
    precio: 200000,
    descripcion: "Slip On AAA para moto",
    categoria: ["Motos", "Accesorios", "Vehiculos"],
    stock: 50,
    colores_disp: ["Rojo", "Negro", "Tornasol"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Control PS5",
    precio: 300000,
    descripcion: "Control original y firmado por Sony para jugar PS5",
    categoria: ["juegos", "control", "videojuegos"],
    stock: 10,
    colores_disp: ["Rojo", "Negro"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Escape Akrapovic",
    precio: 200000,
    descripcion: "Slip On AAA para moto",
    categoria: ["Motos", "Accesorios", "Vehiculos"],
    stock: 50,
    colores_disp: ["Rojo", "Negro", "Tornasol"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Control PS5",
    precio: 300000,
    descripcion: "Control original y firmado por Sony para jugar PS5",
    categoria: ["juegos", "control", "videojuegos"],
    stock: 10,
    colores_disp: ["Rojo", "Negro"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Escape Akrapovic",
    precio: 200000,
    descripcion: "Slip On AAA para moto",
    categoria: ["Motos", "Accesorios", "Vehiculos"],
    stock: 50,
    colores_disp: ["Rojo", "Negro", "Tornasol"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Control PS5",
    precio: 300000,
    descripcion: "Control original y firmado por Sony para jugar PS5",
    categoria: ["juegos", "control", "videojuegos"],
    stock: 10,
    colores_disp: ["Rojo", "Negro"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Escape Akrapovic",
    precio: 200000,
    descripcion: "Slip On AAA para moto",
    categoria: ["Motos", "Accesorios", "Vehiculos"],
    stock: 50,
    colores_disp: ["Rojo", "Negro", "Tornasol"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Control PS5",
    precio: 300000,
    descripcion: "Control original y firmado por Sony para jugar PS5",
    categoria: ["juegos", "control", "videojuegos"],
    stock: 10,
    colores_disp: ["Rojo", "Negro"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
  {
    nombre: "Escape Akrapovic",
    precio: 200000,
    descripcion: "Slip On AAA para moto",
    categoria: ["Motos", "Accesorios", "Vehiculos"],
    stock: 50,
    colores_disp: ["Rojo", "Negro", "Tornasol"],
    imagen: "https://all2bikes.com/cdn/shop/files/6FA8EF1D-DDD5-40FB-8F04-9AE0C3B640DD.jpg?v=1701911555",
  },
];

function listaProductos(listaP, filter=""){

    let productsContainer = document.getElementById('productsContainer')

    for(let producto of listaP){

        // recorrer todas las palabras

        //comparar la palabara filtro

        //unicamente mostrar la que sea igual 

        if(filter && producto.categoria.length > 0){



            for(let palabrasClave of categoria){
                console.log(palabrasClave)
            }

        }

        let card = `
        <div class="card shadow-lg border-0" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <a href="#" class="btn btn-primary">Comprar por ${producto.precio}</a>
            </div>
        </div>
        `

        productsContainer.innerHTML += card

    }

}

listaProductos(BaseDatos)