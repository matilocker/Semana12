import { traerTienda, Producto } from "./utils.js";

const titulo = document.querySelector(".titulo");
const p = document.createElement("p");
titulo.appendChild(p);
p.innerHTML = "MercadoLibreLife";
p.classList.add("title");

const renderizar = async () => {
    const data = await traerTienda();
    console.log(data);
    for (let ropa of data) {
        let cloth = new Producto(ropa.image, ropa.title, ropa.id);
        console.log("hola");
        const contenedor = document.querySelector(".contenedor");
        const clothes = cloth.render();
        contenedor.appendChild(clothes);
        cloth.addClickListener();
    };
}

renderizar();