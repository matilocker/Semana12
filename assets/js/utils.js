//traerTienda

export const traerTienda = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};

//class producto
export class Producto {
    imagen = "";
    title = "";
    id = "";

    constructor(image, title, id) {
        this.imagen = image;
        this.title = title;
        this.id = id;
    }

    render() {
        const div = document.createElement('div');
        const jpg = document.createElement('img');
        const titulo = document.createElement('p');
        div.classList.add("product");
        jpg.id = "image"+this.id;
        jpg.src = this.imagen;
        jpg.classList.add("imagen");
        titulo.innerHTML = this.title;

        div.appendChild(jpg);
        div.appendChild(titulo);
        return div;
    };
   
    addClickListener() {
        const image = document.querySelector("#image"+this.id);
        image.addEventListener("click", () => {
            window.location = "/product.html?productId="+this.id;
        });
    };
};