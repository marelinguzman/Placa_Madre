export let informacion = [
    { 
        titulo: "Placa Madre (Motherboard)",
        descripcion: "La placa madre es el circuito principal de la computadora donde se conectan todos los componentes como la CPU, la GPU, la memoria RAM, y el almacenamiento.",
        caracteristicas: [
            "1. Determina qué tipo de procesador es compatible con la placa madre.",
            "2. Especifica cuánta memoria RAM se puede instalar y de qué tipo (DDR4, DDR5, etc.).",
            "3. Incluye ranuras PCIe para conectar tarjetas gráficas, tarjetas de sonido y otros componentes.",
            "4. Soporta unidades de almacenamiento como SSD y HDD a través de puertos SATA y M.2.",
            "5. Contiene el firmware que gestiona las funciones básicas del hardware antes de cargar el sistema operativo."
        ],
        imagenes: [
            "https://www.digitarinformatica.com.ar/wp-content/uploads/2023/08/Placa-madre-Gigabyte-B660M-DS3H-AX-S1700-2.jpeg"
        ]
    },
    { 
        titulo: "Ranuras",
        descripcion: "Las ranuras de la placa madre son conectores que permiten la instalación de componentes adicionales, como tarjetas gráficas, de sonido, o de expansión. Están diseñadas para mejorar la capacidad y funcionalidad de la computadora.",
        caracteristicas: [
            "1. Están diseñadas para aceptar componentes específicos según el tipo de ranura (PCI, PCIe, RAM, etc.), asegurando que solo los dispositivos compatibles puedan ser instalados.",
            "2. Dependiendo del tipo de ranura (por ejemplo, PCIe x16), permiten diferentes tasas de transferencia de datos, lo que es crucial para el rendimiento de componentes como las tarjetas gráficas.",
            "3. Existen diferentes tipos de ranuras (PCI, PCIe, AGP) con distintas longitudes y formas, adaptándose a las necesidades de diferentes componentes.",
            "4. Las placas madre vienen con un número limitado de ranuras, lo que determina la cantidad de componentes adicionales que pueden instalarse.",
            "5. Algunas ranuras pueden ser utilizadas para distintos tipos de tarjetas de expansión, proporcionando flexibilidad al usuario para personalizar su equipo según sus necesidades."
        ],
        imagenes: [
            "https://hardzone.es/app/uploads-hardzone.es/2019/11/Ranuras-placa-base-01-1.jpg?x=480&y=375&quality=40"
        ]
    },
    {
        titulo: "GPU (Unidad de Procesamiento Gráfico)", 
        descripcion: "La GPU es responsable del procesamiento gráfico en una computadora, especialmente en aplicaciones de videojuegos, diseño 3D y edición de video.",
        caracteristicas: [
            "1. Permite realizar múltiples cálculos gráficos al mismo tiempo, ideal para renderización.",
            "2. La GPU tiene su propia memoria para almacenar y procesar texturas y gráficos complejos.",
            "3. Suele requerir sistemas de refrigeración más avanzados debido al calor generado durante el procesamiento.",
            "4. Aumenta la tasa de fotogramas por segundo (FPS) y la calidad visual en juegos.",
            "5. Soporta tecnologías como DirectX, Vulkan y OpenGL para el procesamiento de gráficos."
        ],        
        imagenes: [
            "https://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/cpu_vs_gpu_whats_the_difference_signal/Signal-cpu-vs-gpu-comparison-Hero.jpg?width=1200&name=Signal-cpu-vs-gpu-comparison-Hero.jpg"
        ]
    },
    { 
        titulo: "USB", 
        descripcion: "Los puertos USB (Universal Serial Bus) son interfaces comunes en las computadoras que permiten conectar una variedad de dispositivos periféricos.",
        caracteristicas: [
            "1. Los puertos USB son estándar y permiten conectar una amplia gama de dispositivos como teclados, ratones, memorias USB, impresoras y más, independientemente del fabricante.",
            "2. Dependiendo del tipo de puerto USB, la velocidad de transferencia puede variar. USB 2.0 tiene una velocidad de hasta 480 Mbps, mientras que USB 3.0 puede llegar a 5 Gbps y versiones más nuevas pueden ser aún más rápidas.",
            "3. Los puertos USB pueden suministrar energía a dispositivos conectados. Por ejemplo, un puerto USB puede cargar teléfonos móviles y otros dispositivos portátiles, y puede suministrar energía adicional para discos duros externos.",
            "4. La cantidad de puertos USB disponibles en una placa madre varía. Puede haber varios puertos USB en el panel trasero de la placa madre y también en la parte frontal del chasis del computador, lo que proporciona flexibilidad y conveniencia para conectar dispositivos.",
            "5. Los puertos USB son retrocompatibles, lo que significa que puedes conectar dispositivos más antiguos a puertos USB más nuevos y viceversa. "
        ],        
        imagenes: [
        ]
    },
    { 
        titulo: "Puertos externos", 
        descripcion: "Los puertos externos de la placa madre son conexiones físicas ubicadas en la parte posterior de la computadora, que permiten conectar diversos periféricos y dispositivos externos como teclados, ratones, monitores, discos duros externos, y más.",
        caracteristicas: [
            "1.  Incluyen diferentes tipos de puertos como USB (2.0, 3.0, 3.1, etc.), HDMI, DisplayPort, Ethernet, y puertos de audio, cada uno diseñado para conectar distintos dispositivos.",
            "2. Dependiendo del tipo de puerto, la velocidad de transferencia de datos varía considerablemente, como en los puertos USB 3.0 (5 Gbps) o Thunderbolt (hasta 40 Gbps).",
            "3. Muchos puertos, como USB o HDMI, son estándares universales, lo que permite conectar una amplia variedad de dispositivos de diferentes fabricantes sin necesidad de adaptadores específicos.",
            "4. Están ubicados en la parte externa de la carcasa de la computadora, facilitando la conexión y desconexión rápida de dispositivos periféricos sin necesidad de abrir el equipo.",
            "5. Algunos puertos, como los USB, no solo permiten la transferencia de datos, sino que también proporcionan energía eléctrica a dispositivos como teléfonos móviles o discos duros portátiles."
        ],
        imagenes: [
           
        ]
    },
    { 
        titulo: "Fuente de Poder", 
        descripcion: "La fuente de poder, también conocida como PSU (Power Supply Unit), es un componente esencial en una computadora que convierte la corriente alterna (AC) de la red eléctrica en corriente continua (DC) que es utilizada por los distintos componentes del sistema.",
        caracteristicas: [
            "1. Se mide en vatios (W) y determina cuánta energía puede suministrar a los componentes.",
            "2. Certificaciones como 80 PLUS garantizan que la fuente de poder es eficiente en la conversión de energía, minimizando pérdidas.",
            "3. Algunas PSU permiten conectar solo los cables necesarios, mejorando el flujo de aire en el gabinete.",
            "4. Incluyen protecciones contra sobretensión, cortocircuitos y sobrecalentamiento para evitar daños en los componentes.",
            "5. Pueden tener ventiladores para enfriar activamente o disipar el calor de manera pasiva."
        ],        
        imagenes: [
           "https://mgainformatik.com/image-blog/fuentes-poder-computadoras.jpg"
        ]
    },
    { 
        titulo: "CPU (Unidad Central de Procesamiento)", 
        descripcion: "La CPU es el cerebro de la computadora y realiza todas las instrucciones de los programas mediante cálculos y control de los procesos.",
        caracteristicas: [
            "1. Medida en GHz, determina cuántas operaciones puede realizar por segundo.",
            "2. Puede tener múltiples núcleos (dual-core, quad-core, etc.) para realizar varias tareas simultáneamente.",
            "3. Puede ser de 32 o 64 bits, lo que afecta la cantidad de memoria que puede manejar y el rendimiento.",
            "4. Memoria interna ultrarrápida para acelerar el acceso a datos frecuentes.",
            "5. Puede variar dependiendo de su rendimiento y eficiencia energética, medido en vatios (TDP)."
        ],
        imagenes: [
            "https://concepto.de/wp-content/uploads/2014/08/CPU-e1551228076500.jpg"
        ]
    },
    { 
        titulo: "Disipador", 
        descripcion: "El disipador es un componente diseñado para reducir la temperatura de los elementos de una computadora, especialmente del procesador (CPU), distribuyendo el calor que generan y disipándolo hacia el aire circundante para evitar sobrecalentamientos." ,
        caracteristicas: [
            "1. Los disipadores suelen estar fabricados de materiales altamente conductivos como el aluminio o el cobre, que facilitan la transferencia de calor desde el componente al ambiente.",
            "2. La mayoría de los disipadores cuentan con múltiples aletas delgadas que aumentan el área de superficie para maximizar la disipación del calor en el aire.",
            "3. Los disipadores pueden ser activos, utilizando un ventilador para mejorar el flujo de aire, o pasivos, que dependen solo de la transferencia térmica natural sin ventiladores.",
            "4. Normalmente se coloca directamente sobre componentes que generan mucho calor, como el CPU o la GPU, utilizando pasta térmica para mejorar la conducción del calor.",
            "5. Los disipadores están diseñados para ser compatibles con diferentes tipos de sockets de procesadores, asegurando que se ajusten adecuadamente a la placa madre y al componente que necesitan enfriar."
        ],        
        imagenes: [
            "./img/img25.png"
        ]
    },
    { 
        titulo: "Ranuras",
        descripcion: "Las ranuras de la placa madre son conectores que permiten la instalación de componentes adicionales, como tarjetas gráficas, de sonido, o de expansión. Están diseñadas para mejorar la capacidad y funcionalidad de la computadora.",
        caracteristicas: [
            "1. Están diseñadas para aceptar componentes específicos según el tipo de ranura (PCI, PCIe, RAM, etc.), asegurando que solo los dispositivos compatibles puedan ser instalados.",
            "2. Dependiendo del tipo de ranura (por ejemplo, PCIe x16), permiten diferentes tasas de transferencia de datos, lo que es crucial para el rendimiento de componentes como las tarjetas gráficas.",
            "3. Existen diferentes tipos de ranuras (PCI, PCIe, AGP) con distintas longitudes y formas, adaptándose a las necesidades de diferentes componentes.",
            "4. Las placas madre vienen con un número limitado de ranuras, lo que determina la cantidad de componentes adicionales que pueden instalarse.",
            "5. Algunas ranuras pueden ser utilizadas para distintos tipos de tarjetas de expansión, proporcionando flexibilidad al usuario para personalizar su equipo según sus necesidades."
        ],
        imagenes: [
            "https://hardzone.es/app/uploads-hardzone.es/2019/11/Ranuras-placa-base-01-1.jpg?x=480&y=375&quality=40"
        ]
    },
    { 
        titulo: "PC (Computadora Personal)", 
        descripcion: "Una PC es una computadora diseñada para el uso personal en el hogar o la oficina. Puede ser usada para realizar una amplia gama de tareas como procesamiento de texto, navegación en internet, juegos y mucho más.",
        caracteristicas: [
            "1. Puede ser utilizada para una variedad de propósitos, desde trabajos de oficina hasta entretenimiento.",
            "2. Los usuarios pueden actualizar o cambiar componentes como el almacenamiento, RAM, CPU o GPU.",
            "3. Utiliza sistemas operativos como Windows, macOS o Linux.",
            "4. Puede ser de tipo de escritorio (desktop) o portátil (laptop).",
            "5. Incluye puertos para conectividad como USB, HDMI, Ethernet, entre otros."
        ],        
        imagenes: [
            ""
        ]
    },
];