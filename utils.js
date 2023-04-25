//traerTienda

export const traerTienda = async () => {
    console.log("x1");
    const response = await fetch("https://raw.githubusercontent.com/matilocker/master/master/tienda.json");
    const data = await response.json()};

//class producto
export class Producto {
    imagen = ""
    title = ""

    constructor(image, title) {
        this.imagen = image;
        this.title = title;
    }

    render() {
        const div = document.createElement('div')
        const jpg = document.createElement('img')
        const titulo = document.createElement('p')
        jpg.src = this.imagen;
        titulo.innerHTML = this.title;

        div.appendChild(jpg);
        div.appendChild(titulo);
        return div;
    }
}