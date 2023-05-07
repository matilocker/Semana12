import { traerTienda, Producto } from "./utils.js";

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
    /*for (let ropa of data){
        let cloth = new Producto(ropa.image, ropa.title, ropa.id);
        if (window.location === "/product.html?productId="+ropa.id){
            const div = document.queryselector(".producto");
            const jpg = document.createElement("img");
            jpg.src = ropa.image;
    
            div.appendChild(jpg);
        }
    }*/
}

renderizar();

const titulo = document.querySelector(".titulo");
const p = document.createElement("p");
titulo.appendChild(p);
p.innerHTML = "MercadoLibreLife";
p.classList.add("title");