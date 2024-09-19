let BaseDatos = [
  {
    nombre: "Control PS5",
    precio: 300000,
    descripcion: "Control original y firmado por Sony para jugar PS5",
    categoria: ["juegos", "control", "videojuegos"],
    stock: 10,
    colores_disp: ["Rojo", "Negro"],
    imagen: "_url",
  },
  {
    nombre: "Escape Akrapovic",
    precio: 200000,
    descripcion: "Slip On AAA para moto",
    categoria: ["Motos", "Accesorios", "Vehiculos"],
    stock: 50,
    colores_disp: ["Rojo", "Negro", "Tornasol"],
    imagen: "_url",
  },
];

function listaProductos(listaP, filter=""){

    let productsContainer = document.getElementById('productsContainer')

    for(let producto of listaP){

        let card = `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
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