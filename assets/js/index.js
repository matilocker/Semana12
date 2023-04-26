import {traerTienda, Producto} from "./utils.js";

const render = async () => {
const data = await traerTienda();
console.log(data);
for (let ropa of data) {
    let cloth = new Producto(ropa.image, ropa.title);
    const contenedor = document.querySelector(".contenedor");
    const clothes = cloth.render();
    contenedor.appendChild(clothes);
} 
}

render();
