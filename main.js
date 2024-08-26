document.getElementById('btn-pc').addEventListener('click', function() {
    mostrarModal(
        "PC (Computadora Personal)",
        "Una PC es una computadora diseñada para el uso personal en el hogar o la oficina. Puede ser usada para realizar una amplia gama de tareas como procesamiento de texto, navegación en internet, juegos y mucho más.",
        ["1. Puede ser utilizada para una variedad de propósitos, desde trabajos de oficina hasta entretenimiento.",
         "2. Los usuarios pueden actualizar o cambiar componentes como el almacenamiento, RAM, CPU o GPU.",
         "3. Utiliza sistemas operativos como Windows, macOS o Linux.",
         "4. Puede ser de tipo de escritorio (desktop) o portátil (laptop).",
         "5. Incluye puertos para conectividad como USB, HDMI, Ethernet, entre otros."],
        "https://www.mielectro.es/blog/wp-content/uploads/2021/12/torres-ordenador-limpieza-1024x756.jpg"
    );
});

document.getElementById('btn-gpu').addEventListener('click', function() {
    mostrarModal(
        "GPU (Unidad de Procesamiento Gráfico)",
        "La GPU es responsable del procesamiento gráfico en una computadora, especialmente en aplicaciones de videojuegos, diseño 3D y edición de video.",
        ["1. Permite realizar múltiples cálculos gráficos al mismo tiempo, ideal para renderización.",
         "2. La GPU tiene su propia memoria para almacenar y procesar texturas y gráficos complejos.",
         "3. Suele requerir sistemas de refrigeración más avanzados debido al calor generado durante el procesamiento.",
         "4. Aumenta la tasa de fotogramas por segundo (FPS) y la calidad visual en juegos.",
         "5. Soporta tecnologías como DirectX, Vulkan y OpenGL para el procesamiento de gráficos."],
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKKfNI9CIQI5WzhV0OvdMGO6_buxAmsf1-Q&s"
    );
});

document.getElementById('btn-cpu').addEventListener('click', function() {
    mostrarModal(
        "CPU (Unidad Central de Procesamiento)",
        "La CPU es el cerebro de la computadora y realiza todas las instrucciones de los programas mediante cálculos y control de los procesos.",
        ["1. Medida en GHz, determina cuántas operaciones puede realizar por segundo.",
         "2. Puede tener múltiples núcleos (dual-core, quad-core, etc.) para realizar varias tareas simultáneamente.",
         "3. Puede ser de 32 o 64 bits, lo que afecta la cantidad de memoria que puede manejar y el rendimiento.",
         "4. Memoria interna ultrarrápida para acelerar el acceso a datos frecuentes.",
         "5. Puede variar dependiendo de su rendimiento y eficiencia energética, medido en vatios (TDP)."],
        "https://concepto.de/wp-content/uploads/2014/08/CPU-e1551228076500.jpg"
    );
});

document.getElementById('btn-fuentes').addEventListener('click', function() {
    mostrarModal(
        "Fuentes de Poder",
        "La fuente de poder, también conocida como PSU (Power Supply Unit), es un componente esencial en una computadora que convierte la corriente alterna (AC) de la red eléctrica en corriente continua (DC) que es utilizada por los distintos componentes del sistema.",
        ["1. Se mide en vatios (W) y determina cuánta energía puede suministrar a los componentes.",
         "2. Certificaciones como 80 PLUS garantizan que la fuente de poder es eficiente en la conversión de energía, minimizando pérdidas.",
         "3. Algunas PSU permiten conectar solo los cables necesarios, mejorando el flujo de aire en el gabinete.",
         "4. Incluyen protecciones contra sobretensión, cortocircuitos y sobrecalentamiento para evitar daños en los componentes.",
         "5. Pueden tener ventiladores para enfriar activamente o disipar el calor de manera pasiva."],
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanD-jE4RvlHd1i7WancgOdowTVtRSTvaKkA&s"
    );
});

document.getElementById('btn-placa').addEventListener('click', function() {
    mostrarModal(
        "Placa Madre (Motherboard)",
        "La placa madre es el circuito principal de la computadora donde se conectan todos los componentes como la CPU, la GPU, la memoria RAM, y el almacenamiento.",
        ["1. Determina qué tipo de procesador es compatible con la placa madre.",
         "2. Especifica cuánta memoria RAM se puede instalar y de qué tipo (DDR4, DDR5, etc.).",
         "3. Incluye ranuras PCIe para conectar tarjetas gráficas, tarjetas de sonido y otros componentes.",
         "4. Soporta unidades de almacenamiento como SSD y HDD a través de puertos SATA y M.2.",
         "5. Contiene el firmware que gestiona las funciones básicas del hardware antes de cargar el sistema operativo."],
        "https://cdn.pixabay.com/photo/2015/03/21/06/28/motherboard-683247_1280.png"
    );
});

document.getElementById('btn-ranuras').addEventListener('click', function() {
    mostrarModal(
        "Ranuras",
        "Las ranuras de la placa madre son conectores que permiten la instalación de componentes adicionales, como tarjetas gráficas, de sonido, o de expansión. Están diseñadas para mejorar la capacidad y funcionalidad de la computadora.",
        ["1. Están diseñadas para aceptar componentes específicos según el tipo de ranura (PCI, PCIe, RAM, etc.), asegurando que solo los dispositivos compatibles puedan ser instalados.",
         "2. Dependiendo del tipo de ranura (por ejemplo, PCIe x16), permiten diferentes tasas de transferencia de datos, lo que es crucial para el rendimiento de componentes como las tarjetas gráficas.",
         "3. Existen diferentes tipos de ranuras (PCI, PCIe, AGP) con distintas longitudes y formas, adaptándose a las necesidades de diferentes componentes.",
         "4. Las placas madre vienen con un número limitado de ranuras, lo que determina la cantidad de componentes adicionales que pueden instalarse.",
         "5. Algunas ranuras pueden ser utilizadas para distintos tipos de tarjetas de expansión, proporcionando flexibilidad al usuario para personalizar su equipo según sus necesidades."],
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6HMkoH4gsWv_1l08HlO4TWboRB5_mqqDzg&s"
    );
});
document.getElementById('btn-puertos').addEventListener('click', function() {
    mostrarModal(
        "USB",
        "Los puertos USB (Universal Serial Bus) son interfaces comunes en las computadoras que permiten conectar una variedad de dispositivos periféricos.",
        ["1. Los puertos USB son estándar y permiten conectar una amplia gama de dispositivos como teclados, ratones, memorias USB, impresoras y más, independientemente del fabricante.",
         "2. Dependiendo del tipo de puerto USB, la velocidad de transferencia puede variar. USB 2.0 tiene una velocidad de hasta 480 Mbps, mientras que USB 3.0 puede llegar a 5 Gbps y versiones más nuevas pueden ser aún más rápidas.",
         "3. Los puertos USB pueden suministrar energía a dispositivos conectados. Por ejemplo, un puerto USB puede cargar teléfonos móviles y otros dispositivos portátiles, y puede suministrar energía adicional para discos duros externos.",
         "4. La cantidad de puertos USB disponibles en una placa madre varía. Puede haber varios puertos USB en el panel trasero de la placa madre y también en la parte frontal del chasis del computador, lo que proporciona flexibilidad y conveniencia para conectar dispositivos.",
         "5. Los puertos USB son retrocompatibles, lo que significa que puedes conectar dispositivos más antiguos a puertos USB más nuevos y viceversa. "],
        "https://www.profesionalreview.com/wp-content/uploads/2020/09/C%C3%B3mo-solucionar-velocidad-usb-5.jpg"
    );
});
document.getElementById('btn-alimentacion').addEventListener('click', function() {
    mostrarModal(
    
    );
});

document.getElementById('btn-disipador').addEventListener('click', function() {
    mostrarModal(
        "Tarjetas Gráficas",
        "Una tarjeta gráfica es un componente especializado que se encarga de renderizar imágenes y gráficos. Es crucial para juegos, edición de video y modelado 3D.",
        ["1. GPU dedicada que maneja cálculos gráficos.",
         "2. Memoria dedicada (VRAM) para almacenar texturas y datos gráficos.",
         "3. Soporte para múltiples pantallas y resoluciones 4K o superiores.",
         "4. Capacidad para procesamiento en paralelo.",
         "5. Conexión a través de ranuras PCIe."],
        "https://qph.cf2.quoracdn.net/main-qimg-811efb31f956ba8ccce7f83f8a2f64f3-pjlq"
    );
});

document.getElementById('btn-chips').addEventListener('click', function() {
    mostrarModal(
        "Chipset de la Placa Base",
        "El chipset es un conjunto de circuitos en la placa madre que gestionan la comunicación entre la CPU, la memoria y los periféricos conectados a la placa base.",
        ["1. Coordina la interacción entre la CPU y el resto de los componentes.",
         "2. Gestiona el acceso a los dispositivos de almacenamiento y periféricos.",
         "3. Determina las capacidades de expansión de la placa madre (cantidad de puertos USB, SATA, PCIe, etc.).",
         "4. Define el soporte para tecnologías específicas como overclocking y RAID.",
         "5. Tiene controladores integrados para audio, red y otros dispositivos."],
        "https://www.profesionalreview.com/wp-content/uploads/2023/04/chipset-amd.jpg"
    );
});

function mostrarModal(titulo, descripcion, caracteristicas, imagen) {
    document.getElementById('titulo-modal').textContent = titulo;
    document.getElementById('descripcion-modal').textContent = descripcion;

    const listaCaracteristicas = document.createElement('ul');
    caracteristicas.forEach(function(caracteristica) {
        const item = document.createElement('li');
        item.textContent = caracteristica;
        listaCaracteristicas.appendChild(item);
    });

    const modalContent = document.querySelector('.modal-content');
    const listaAnterior = modalContent.querySelector('ul');
    if (listaAnterior) {
        modalContent.removeChild(listaAnterior);
    }

    modalContent.appendChild(listaCaracteristicas);

    document.getElementById('imagen-modal').src = imagen;
    document.getElementById('modal').style.display = 'flex';
}

document.getElementById('cerrar-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('descargar-imagen').addEventListener('click', function() {
    const modalContent = document.querySelector('.modal-content');
    
    html2canvas(modalContent).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'modal-content.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

document.getElementById('btn-github').addEventListener('click', function() {
    window.location.href = 'https://github.com/marelinguzman';
});