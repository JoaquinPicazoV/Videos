// Arreglo para guardar los "anuncios" de las carreras
let arrayAnuncios = [];

// Se le da el valor inicial de 0 
let pos = 0;

// Acceder a los elementos del html
let titulo = document.getElementById('title');
let texto = document.getElementById('txt');

// Creo la clase anuncio para trabajar de forma más "cómoda" el contenido de las carreras
class anuncio {
    constructor(video, title, info) {
        this.video = video;
        this.title = title;
        this.info = info;
    }
}

// Creo objetos a partir de la clase anuncio
let informatica = new anuncio('../8-Videos/video/informatica.mp4', 'COMPUTER ENGINEERING', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo modi iste optio Facere voluptate dolore, provident pariatur, officia consequatur quidem accusantium natus error impedit modi voluptatibus vel facilis repudiandae. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Libero ut provident dolore modi. Assumenda repudiandae laborum, labore temporatemporibus similique optio tenetur illum quos odio aut, unde dignissimos, reiciendis eligendi?. <br><br> Repudiandae explicabo modi iste optio Facere voluptate dolore, provident pariatur, officia consequatur quidem accusantium natus error impedit modi voluptatibus vel facilis repudiandae. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Libero ut provident dolore modi. Assumenda repudiandae laborum, labore temporatemporibus similique optio tenetur illum quos odio. <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo modi iste");
let electrica = new anuncio('../8-Videos/video/electricidad.mp4', 'ELECTRICAL ENGINEERING', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo modi iste optio Facere voluptate dolore, provident pariatur, officia consequatur quidem accusantium natus error impedit modi voluptatibus vel facilis repudiandae. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Libero ut provident dolore modi. Assumenda repudiandae laborum, labore temporatemporibus similique optio tenetur illum quos odio aut, unde dignissimos, reiciendis eligendi?. dolor sit amet consectetur adipisicing elit. Repudiandae explicabo modi iste optio Facere <br> <br> voluptate dolore, provident pariatur, officia consequatur quidem accusantium natus error impedit modi voluptatibus vel facilis repudiandae. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Libero ut provident dolore modi. Assumenda repudiandae laborum, labore temporatemporibus similique.");
let industrial = new anuncio('../8-Videos/video/industrial.mp4', 'INDUSTRIAL ENGINEERING', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo modi iste optio Facere voluptate dolore, provident pariatur, officia consequatur quidem accusantium natus error impedit modi voluptatibus vel facilis repudiandae. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Libero ut provident dolore modi. Assumenda repudiandae laborum, labore temporatemporibus. consectetur adipisicing elit. Repudiandae explicabo modi iste optio Facere voluptate dolore, provident pariatur, officia consequatur quidem accusantium natus error impedit modi voluptatibus vel facilis repudiandae. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Libero ut provident dolore modi. Assumenda repudiandae laborum, labore temporatemporibus similique optio tenetur");

// Ingreso los objetos al arreglo
arrayAnuncios.push(informatica);
arrayAnuncios.push(electrica);
arrayAnuncios.push(industrial);

// Función para pasar al siguiente anuncio/carrera
function siguiente() {
    let video = document.getElementById('video-background');
    rastrear();
    // Si el video está en el final del arreglo, vuelve al inicio
    if (pos == (arrayAnuncios.length - 1)) {
        pos = 0;
    } else {
        // De lo contrario, avanza al siguiente puesto
        pos += 1;
    }

    // Refresca el video, título y texto de la carrera
    video.src = arrayAnuncios[pos].video;
    titulo.innerHTML = arrayAnuncios[pos].title;
    texto.innerHTML = arrayAnuncios[pos].info;

}

// Función para pasar al anuncio/carrera anterior
function anterior() {
    let video = document.getElementById('video-background');
    rastrear();
    // Si el video está en la posición inicial del arreglo 
    if (pos == 0) {
        pos = arrayAnuncios.length - 1;
    } else {
        // En caso contrario, retrocede una posición en el arreglo
        pos -= 1;
    }

    // Refresca el video, título y texto de la carrera
    video.src = arrayAnuncios[pos].video;
    titulo.innerHTML = arrayAnuncios[pos].title;
    texto.innerHTML = arrayAnuncios[pos].info;
}

// Función para encontrar en que posición del arreglo se encuentra el anuncio/carrera que se está mostrando 
function rastrear() {
    let video = document.getElementById('video-background');
    if (video.src == arrayAnuncios[0].video) {
        pos = 0;
    } else if (video.src == arrayAnuncios[1].video) {
        pos = 1;
    } else if (video.src == arrayAnuncios[2].video) {
        pos = 2;
    }
    return pos;
}


