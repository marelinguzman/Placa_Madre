import { informacion } from './body.js';

let root = document.querySelector(".root");

root.innerHTML = `
<div class="header">
    <div class="title">
      <b>TechMap MC</b>
    </div>
    <div class="clasificacion">
        <div id="pc">PC</div>
        <div id="cpu">CPU</div>
        <div id="gpu">GPU</div>
        <div id="pm">Placa madre</div>
        <div id="fp">Fuentes de poder</div>
        <div class="item github">
            <a href="https://github.com/marelinguzman">GitHub Page</a>
        </div>
    </div>
</div>

<div class="filtros">
    <h3>Filtros</h3>
    <hr>
    <label class="checkbox-container">Ranuras
        <input type="checkbox" data-filter="ranuras">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Puertos
        <input type="checkbox" data-filter="puertos">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Alimentación
        <input type="checkbox" data-filter="alimentacion">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Disipadores
        <input type="checkbox" data-filter="disipadores">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Chips
        <input type="checkbox" data-filter="chips">
        <span class="checkmark"></span>
    </label>
</div>

<div class="botones">
    <div class="btn btn1" data-tooltip="Ranuras" data-category="ranuras"></div>
    <div class="btn btn3" data-tooltip="Chipset de la placa base" data-category="chips"></div>
    <div class="btn btn4" data-tooltip="Tarjeta gráfica" data-category="disipadores"></div>
    <div class="btn btn5" data-tooltip="Puertos USB" data-category="puertos"></div>
    <div class="btn btn6" data-tooltip="Puertos externos" data-category="puertos"></div>
    <div class="btn btn8" data-tooltip="Disipador" data-category="disipadores"></div>
    <div class="btn btn9" data-tooltip="CPU" data-category="chips"></div>
    <div class="btn btn10" data-tooltip="Ranuras" data-category="ranuras"></div>
    <div class="btn btn11" data-tooltip="Conector del cable IDE" data-category="puertos"></div>
    <div class="btn btn12" data-tooltip="BIOS" data-category="chips"></div>
</div>



<div class="modal hidden">
    <div class="modal-content">
        <span class="modal-close">&times;</span>
        <div class="modal-header">
            <h2 class="modal-title"></h2>
        </div>
        <div class="modal-body">
            <p class="modal-description"></p>
            <ul class="modal-caracteristicas"></ul>
            <div class="modal-imagenes"></div>
            <button id="download-img">Descargar como imagen</button>
        </div>
    </div>
</div>
`;

let modal = document.querySelector('.modal');
let modalContent = document.querySelector('.modal-content');
let modalClose = document.querySelector('.modal-close');
let modalTitle = document.querySelector('.modal-title');
let modalDescription = document.querySelector('.modal-description');
let modalCaracteristicas = document.querySelector('.modal-caracteristicas');
let modalImagenes = document.querySelector('.modal-imagenes');
let downloadBtn = document.getElementById('download-img');

function mostrarInformacion(indice) {
    let datos = informacion[indice];

    let listaCaracteristicas = datos.caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join("");
    let listadoImagenes = datos.imagenes.map(imagen =>
        `<div><img src="${imagen}" alt="${datos.titulo}" class="modal-imagen"></div>`
    ).join("");

    modalTitle.textContent = datos.titulo;
    modalDescription.textContent = datos.descripcion;
    modalCaracteristicas.innerHTML = listaCaracteristicas;
    modalImagenes.innerHTML = listadoImagenes;

    modal.classList.remove('hidden');
}

modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
});

document.querySelectorAll('.btn').forEach((boton, indice) => {
    boton.addEventListener('click', () => {
        mostrarInformacion(indice);
    });
});

downloadBtn.addEventListener('click', () => {
    html2canvas(modalContent).then(canvas => {
        let link = document.createElement('a');
        link.download = 'informacion_modal.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});

document.querySelectorAll('.checkbox-container input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        let categoriaSeleccionada = checkbox.getAttribute('data-filter');

        document.querySelectorAll('.btn').forEach((boton) => {
            let categoriaBoton = boton.getAttribute('data-category');

            if (checkbox.checked && categoriaBoton === categoriaSeleccionada) {
                boton.classList.add('show-tooltip');
                tooltipsActivos[categoriaBoton] = true;
            } else if (!checkbox.checked && categoriaBoton === categoriaSeleccionada) {
                boton.classList.remove('show-tooltip');
                delete tooltipsActivos[categoriaBoton];
            }
        });
    });
});

function handleClick(className) {
    let btn = document.querySelector(`.btn.${className}`);
    let btnIndex = Array.from(document.querySelectorAll('.btn')).indexOf(btn);
    mostrarInformacion(btnIndex);
}
document.querySelector('#gpu').addEventListener('click', () => handleClick('btn4'));
document.querySelector('#cpu').addEventListener('click', () => handleClick('btn9'));
document.querySelector('#pc').addEventListener('click', () => handleClick('btn12'));
document.querySelector('#fp').addEventListener('click', () => handleClick('btn8'));
document.querySelector('#pm').addEventListener('click', () => handleClick('btn1'));

document.addEventListener('DOMContentLoaded', () => {
  cargar_footer();
});