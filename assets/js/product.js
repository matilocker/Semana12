import { traerTienda, Producto } from "./utils.js";

const div = document.querySelector(".producto");

const articulo = async () => {
    const data = await traerTienda();
    console.log(data);
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("productId");

    for (const ropa of data) {
        if (ropa.id === productId) {
            let cloth = new Producto(ropa.image, ropa.title, ropa.id);
            const jpg = document.createElement("img");
            jpg.src = cloth.image;
            div.appendChild(jpg);
            break;
        }
        console.log("ropa.id:", ropa.id, productId);
    }
    console.log("productId:", productId);
};

articulo();