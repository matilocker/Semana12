import {traerTienda, Producto} from "./utils.js";

const render = async () => {
const data = await traerTienda();
console.log(data);
//for 
}

render();
