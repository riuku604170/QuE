// ==========================================================================
// BASE DE DATOS DE ARTÍCULOS DE LA WIKI
// ==========================================================================
let wikiData = [
    {
        id: 'diario-21-11-2026',
        category: 'Diario y Relatos',
        title: '21/11/2026: Nunca he viajado tan lejos. R0',
        subtitle: 'Registro de viaje en el asiento E7; recuerdos de infancia y la expectativa de lo que aguarda más allá de las nubes.',
        tags: ['Diario', 'R0', 'Relato'],
        date: '21/11/2026',
        readTime: '3 min',
        content: `
            <figure class="story-media-card">
                <img src="img/0001.png" alt="21/11/2026: Nunca he viajado tan lejos. R0" class="wiki-image">
                <figcaption>Registro visual adjunto — <code>img/0001.png</code></figcaption>
            </figure>

            <h2 id="despegue">Registro de Vuelo (Asiento E7)</h2>
            <p>Las puertas del avión se abren y me dejan paso sin mucho esfuerzo. Mi sitio es el E7, me dirijo al asiento y espero al resto de la cola. Eventualmente todos pasan, y, en cuanto me fijo, soy el único integrante de mi propia fila. En cierto modo tengo a ambos lados acceso a ventana, y, algo pícaro de mi parte, decido colarme en el asiento de al lado puesto que este me permite reposar mi mano y al mismo tiempo contemplar las futuras vistas del cielo.</p>

            <p>El cielo más allá de las nubes me recuerda a un viaje al que fuí cuando era chiquito, aún cuando solía ir a sitios interesantes con mi padre. Esa fue mi primera y, hasta ahora, última vez montando un avión, y jamás podría olvidarlo. Primero fuimos en tren hacia el aeropuerto y con bastante apuro nos subimos. No recuerdo bien el método pero nunca podría olvidar lo anticlimático que fue ese evento. Todo era demasiado tranquilo en comparación con mis espectativas: La ventana estaba cerrada y si la abría solo se veía un cielo completamente cubierto de negro. No había un mar de nubes ni unas vistas dignas de mención sino un simple, vasto vacío propio de una noche cualquiera en una ventana que solía permanecer cerrada. Evidentemente yo nunca me rendía y, quizás con suerte, podía ver siquiera algo. No obstante, así no fue.</p>

            <p>El avión se eleva por segunda vez, esta vez fuera de mi memoria. No poseo el vocabulario necesario para expresar cómo sienta al cuerpo dicha sensación pero la inclinación del horizonte más allá de la ventana me entusiasma. Todavía veo aquello que antes podía ver con las limitaciones de entonces y mis esperanzas aumentaban en gran proporción. Quizás este sea el momento indicado y seguramente encuentre consuelo con aquello que veo más allá de la ventana. Espero poder encontrar pronto imágenes propias de mención en este diario.</p>
        `
    },
    {
        id: 'diario-23-11-2026',
        category: 'Diario y Relatos',
        title: '23/11/2026: Una taza de nostalgia sola',
        subtitle: 'El descenso tras el vuelo, la búsqueda del té y un brindis silencioso por los recuerdos y quienes siguen cerca.',
        tags: ['Diario', 'Relato', 'Nostalgia'],
        date: '23/11/2026',
        readTime: '3 min',
        content: `
            <figure class="story-media-card">
                <img src="img/0003.png" alt="23/11/2026: Una taza de nostalgia sola" class="wiki-image">
                <figcaption>Registro visual adjunto — <code>img/0003.png</code></figcaption>
            </figure>

            <h2 id="aterrizaje-y-te">Aterrizaje y el Ritual del Té</h2>
            <p>Un viaje plácido termina con un descenso propio, uno lento, apacible. Bajo del avión y camino apurado en dirección al restaurante más cercano:</p>

            <blockquote class="wiki-quote">
                <p>-”Mesero, mesero, ¿aquí se sirve té?”-</p>
                <p style="margin-bottom: 0;">-”Lo siento, joven. Aquí no lo servimos aún.”-</p>
            </blockquote>

            <p>¿Aún? Quizás esté a la espera la moda para que la teína recupere la fama que le arrebató el café. Siempre tuve mi ojo echado al té, hacía ya mucho tiempo, cuando la bisabuela de mi vecina me invitaba a tomar infusiones caseras mientras mi madre dedicaba su tiempo haciendo Dios sepa qué.</p>

            <p>Llevo mucho tiempo sin saber de ella. Gradualmente perdí el contacto con ella, con mi vecina, con sus familiares y con esos días que lentamente se emborronaban conforme otras preocupaciones llenaron mi conciencia adolescente. De alguna forma una parte de mí sigue arraigada a ellos y, ahora yo en los pies de un joven adulto, me encuentro fantaseando con posibles combinaciones de tés y, cada vez que pruebo una infusión de nombre diferente, mi fascinación hacia aquel arte solamente crece y crece.</p>

            <p>Tomé de mi bolsillo una bolsita de té negro, saqué de la cafetería un vaso de plástico y fui corriendo a la dispensadora de agua más cercana que había. Al igual que como hago hoy día en la ESI me preparo yo mismo la bebida, me siento en el primer asiento disponible y dejo reposar mi tan ansiado té negro. A día de hoy este té que tomo representa a más de una persona: Una que desearía no haber perdido tan rápido, unas que desearía no perder ahora y en el fondo, muy en el fondo, una mucho más importante para mí que aquellas personas a las que brindo este momento: Brindo también por aquel chico que reluce en el brillo de sus ojos cuando pasan tiempo conmigo. Brindo por aquellos días que, de todo corazón, espero hayan disfrutado conmigo. Os quiero mucho, mucho más de lo que penséis, me leáis o no ahora.</p>
        `
    },
    {
        id: 'entrada-1-nc',
        category: 'Personajes',
        title: 'Entrada 1: NC (0)',
        subtitle: 'Archivo de personaje, perfil artístico, intereses y análisis psicológico dentro del grupo.',
        tags: ['Personaje', 'Escritora', 'No R2', 'R0', 'R1'],
        date: 'Actualizado',
        readTime: '6 min',
        content: `
            <div class="character-layout">
                <aside class="character-infobox">
                    <div class="infobox-header">Entrada 1: NC</div>
                    <div class="infobox-image-wrap">
                        <img src="img/0002.png" alt="Entrada 1: NC" class="infobox-image">
                    </div>
                    <div class="infobox-body">
                        <div class="infobox-row">
                            <span class="infobox-label">Identidad</span>
                            <span class="infobox-value">Seudónimo artístico. Sin nombre establecible por el canon actualmente.</span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Fuentes artísticas</span>
                            <span class="infobox-value">Literatura, creación de personajes y escenarios principalmente <em>bloodbath / gore / slasher</em>.</span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Intereses</span>
                            <span class="infobox-value">Contacto físico, regalos detallados, tiempo de calidad con la otra persona, cualquier representación de ella como “especial” o “importante”.</span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Disgustos</span>
                            <span class="infobox-value">Arte excesivamente popular o “comercial”, arte dependiente de IA o equipos innecesariamente grandes de trabajo, lascividad carente de romanticismo previo. <span class="status-badge" style="margin-top:4px;">No R2</span></span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Personas favoritas</span>
                            <span class="infobox-value">Gregorio, ???</span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Menos favoritas</span>
                            <span class="infobox-value">???</span>
                        </div>
                    </div>
                </aside>

                <div class="character-prose">
                    <h2 id="obra-y-tematica">Obra y Temática Literaria</h2>
                    <p>NC es reconocible como la mayor escritura dentro del grupo. Sus principales intereses siempre han recaído en la deshumanización y rehumanización del arte dentro de sus obras, lo que suele ser interpretado a raíz de sus personajes.</p>

                    <p>Usualmente estos viven en un mundo que los deshumaniza, los manipula para volverse herramientas de diferentes usos sin consideración en repercusiones morales. A partir de ese contexto inicial los personajes son vistos como criaturas comparables a animales en su conducta pero con una crueldad abismal, esta reflejo de la sociedad en la que viven y la opinión pesimista de su autora con respecto a la idea de sociedad. Esta deshumanización se muestra a modo de exageración, un recurso habitual de desahogo por parte de la autora. El mensaje en algunas de estas obras es, precisamente, la des-exageración del entorno y la consecuente rehumanización utópica del entorno: Escenas en las que literales monstruos son capaces de expresar emociones humanas a pesar de sus imperfecciones, estas ocasionadas por la previa sobre-exageración del inicio de la obra.</p>

                    <p>También existen obras con el mensaje dado de vuelta, con un comienzo humano que lentamente cae en la locura de la exageración hasta el punto en el que la humanidad del inicio capa a capa se reduce a nada, a un ser cruel y carente de disciplina o valores que lentamente pierde en una tortura psicológica o física.</p>

                    <h2 id="caracter-y-personalidad">Carácter y Comportamiento</h2>
                    <p>Con respecto a su carácter NC destaca por ser una Erik bastante tímida y callada en eventos sociales. Es extraño que ella hable en eventos de grupo y es bastante probable que su único aporte sea uno criticista a la hora del debate. Sus soluciones frente a los problemas suelen recaer en cómo estos afectan a la paz común del grupo independientemente de su unificación o los planes originales, lo que la hace bastante capaz de adaptarse al cambio siempre y cuando este no la aleje de su entorno de paz.</p>

                    <p>A pesar de sus intereses marcados en un entorno pacífico independiente de personas partícipes en él, ella sufre la soledad tanto como cualquiera y valora encarecidamente el interés de otros en su mundo. Todos aquellos que sean vistos por ella como interesados tanto en sus obras como en su escenario idílico de paz tienen un espacio importante en su corazón. Ella ve a estas personas como merecedoras de su confianza y, al mismo tiempo, la presencia de ellos le sirve como reafirmación: A pesar de sus exageraciones y sus formas grotescas de presenciar la adversidad siempre existe un refugio al que regresar en cuanto se hace necesario el descanso. Este “refugio” es uno muy importante para ella puesto que la protege de ser víctima de sus propios pensamientos fatalistas.</p>

                    <h2 id="evolucion-r0-r1">Evolución: De R0 a R1</h2>
                    <p>Eventualmente, en R0, ella aprende cómo el trabajo puede ser gestionado sin necesidad de expresarlo con figuras retorcidas y macabras, pues tales imágenes lentamente desaparecen de su mente conforme más evidente se hace la luz al final del camino. Lentamente su progreso se ve decorado con rosas blancas y rebosantes de pureza conforme se desarraiga de las espinas de los rosales negros de los cementerios de los que su mente se hacía presa. Ella, ahora, en R0, no necesita a nadie que le recuerde que ella es un ser humano en todos sus aspectos, libre de las cadenas del trauma, limpia de los errores del pasado ahora que es capaz de encontrar la forma de perdonar todo el sufrimiento por el que ya pasó.</p>

                    <p>Actualmente, en R1, ella vive una escala de grises entre aquel jardín idílico y las cicatrices aún visibles de su pasado. Su cuerpo sigue lleno de heridas que aún desconoce cómo curar y con la sangre negra que derrama sigue escribiendo cartas de amor destinadas al día en el que finalmente se quede sin motivos para los que seguir escribiendo, pues, de alguna forma, escribir siempre fue su forma de desahogar el dolor que entonces la ahogaba en lo que entonces eran lienzos vacíos. Solo ella podría. Solo ella sería capaz de darle tal uso a su propio dolor.</p>
                </div>
            </div>
        `
    },
    {
        id: 'entrada-2-amaya',
        category: 'Personajes',
        title: 'Entrada 2: AMAYA (0)',
        subtitle: 'Representación del “fin”, expresión musical libre y memorias de adolescencia.',
        tags: ['Personaje', 'Música', 'Danza', 'Amaya'],
        date: 'Archivo Canon',
        readTime: '4 min',
        content: `
            <div class="character-layout">
                <aside class="character-infobox">
                    <div class="infobox-header">Entrada 2: AMAYA (0)</div>
                    <div class="infobox-image-wrap">
                        <img src="img/0004.png" alt="Entrada 2: AMAYA (0)" class="infobox-image">
                    </div>
                    <div class="infobox-body">
                        <div class="infobox-row">
                            <span class="infobox-label">Significado</span>
                            <span class="infobox-value">Llamada así como representación del “fin” originalmente.</span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Fuentes artísticas</span>
                            <span class="infobox-value">La música, principalmente improvisada en instrumentos de cuerda, y la danza. Abierta a todo tipo de expresión artística.</span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Intereses</span>
                            <span class="infobox-value">Prevalencia de la libertad de expresión y felicidad en general. No existe nada más bello para ella que la alegría genuina, en su estado más puro.</span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Disgustos</span>
                            <span class="infobox-value">Cualquier forma de represión contra la libertad creativa o crítica destructiva hacia el arte. Repugna la burla hacia la originalidad o la necesidad moderna de ser “normal”.</span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Personas favoritas</span>
                            <span class="infobox-value">José, ???</span>
                        </div>
                        <div class="infobox-row">
                            <span class="infobox-label">Menos favoritas</span>
                            <span class="infobox-value">???</span>
                        </div>
                    </div>
                </aside>

                <div class="character-prose">
                    <h2 id="trayectoria-musical">Trayectoria Musical y Creación</h2>
                    <p>Amaya, entre todos los miembros del grupo, es la más reconocida por su labor como música. Dicho interés proviene directamente de hacía más de 5 años, durante 2021. Mi madre me había comprado un teclado con el que tocaba música con tal de relajarme y, eventualmente, sin saber nada de teoría musical, empezaba a componer mis propias melodías. En ese entonces no poseía partituras ni sabía cómo realizarlas, así que aquellas canciones se quedaron en mi memoria. Eventualmente, allá en verano de 2023, empecé a usar “Jummbox” y otras páginas web diferentes para componer, esta vez sí, música publicable en internet. No obstante, dichos proyectos entonces solo los mantenía en grupos privados.</p>

                    <p>José vino un día hacia mí y me dió la idea de crear una cuenta de música, cuando compusimos una canción juntos: “Dreamlike Duality”. En ese entonces el personaje que utilicé para representar mi cuenta musical fue “L’amborgambor” pero aquella sensación de haber creado arte sin miedo alguno a la crítica y enviarlo en compañía fue aquello que se hizo mi primera inspiración a la hora de crear a Amaya.</p>

                    <h2 id="origen-e-inspiracion">Origen e Inspiración</h2>
                    <p>Este personaje está inspirado en mi época de entre 1º y 2º de Bachillerato, época en la que mis principales intereses estaban puestos en el arte en todos sus aspectos y los estudios estaban a la orden del día. No obstante, a pesar de tales dificultades, aquello por lo que más recuerdo esos años fue los tiempos que pasé con mis amigos. Entre esos tiempos hubieron algunos horribles, otros preciosos y otros “inolvidables” en ambos sentidos, y, a raíz de mi psicología de ese entonces, inventé a Amaya.</p>
                </div>
            </div>
        `
    },
    {
        id: 'bienvenida',
        category: 'Primeros Pasos',
        title: 'Bienvenido a tu Nueva Wiki',
        subtitle: 'Una base de conocimiento rápida, limpia y estructurada en archivos independientes para desarrollo local.',
        tags: ['Introducción', 'Guía'],
        date: 'Actualizado hoy',
        readTime: '2 min',
        content: `
            <h2 id="introduccion">¿Qué es esta plataforma?</h2>
            <p>Esta wiki está estructurada en tres archivos separados (<code>index.html</code>, <code>styles.css</code> y <code>scripts.js</code>) para que puedas editarla cómodamente en local o pedirme cambios específicos en cualquier archivo.</p>
            
            <div class="callout-box">
                <i data-lucide="sparkles"></i>
                <div>
                    <strong>Consejo colaborativo:</strong> Puedes pedirme en cualquier momento que añada nuevas categorías, cambie la paleta de colores en <code>styles.css</code> o escriba artículos completos dentro de <code>scripts.js</code>.
                </div>
            </div>

            <h2 id="caracteristicas">Características Principales</h2>
            <ul>
                <li><strong>Arquitectura Modular:</strong> HTML semántico, CSS con variables nativas y JavaScript limpio sin dependencias pesadas.</li>
                <li><strong>Buscador en Tiempo Real:</strong> Filtra al instante por título, resumen o contenido interno.</li>
                <li><strong>Tabla de Contenidos Automática:</strong> Detecta todos los subtítulos <code>&lt;h2&gt;</code> y crea el índice lateral derecho automáticamente.</li>
            </ul>
        `
    },
    {
        id: 'estructura',
        category: 'Primeros Pasos',
        title: 'Estructura de los Archivos',
        subtitle: 'Cómo funcionan juntos index.html, styles.css y scripts.js en tu carpeta local.',
        tags: ['Arquitectura', 'Archivos'],
        date: 'Actualizado hoy',
        readTime: '3 min',
        content: `
            <h2 id="organizacion">Organización del Proyecto</h2>
            <p>Asegúrate de guardar los tres archivos en la misma carpeta de tu ordenador:</p>
            <ol>
                <li><strong>index.html:</strong> Contiene la estructura principal de la interfaz, el buscador y los contenedores de lectura.</li>
                <li><strong>styles.css:</strong> Controla el diseño responsivo, las variables de color y el modo oscuro/claro.</li>
                <li><strong>scripts.js:</strong> Almacena los artículos, controla la navegación, el buscador y el editor rápido.</li>
            </ol>

            <h2 id="personalizacion">Personalización Temática</h2>
            <p>¿De qué tratará tu wiki? Podemos adaptarla para videojuegos, documentación técnica, apuntes de estudio, lore de historias o gestión de proyectos.</p>
        `
    },
    {
        id: 'guia-estilo',
        category: 'Guías y Conceptos',
        title: 'Guía de Estilo y Componentes',
        subtitle: 'Ejemplos de citas, tablas y bloques informativos listos para usar en tus artículos.',
        tags: ['Diseño', 'Componentes'],
        date: 'Actualizado hoy',
        readTime: '2 min',
        content: `
            <h2 id="bloques-destacados">Bloques Destacados</h2>
            <p>Los artículos incluyen clases CSS listas para resaltar citas o notas importantes sin cansar la vista.</p>
            
            <blockquote class="wiki-quote">
                "La buena documentación es como una buena interfaz: te permite encontrar lo que buscas sin tener que pensar en cómo funciona."
            </blockquote>

            <h2 id="tablas-datos">Ejemplo de Tabla</h2>
            <div class="table-wrapper">
                <table class="wiki-table">
                    <thead>
                        <tr>
                            <th>Archivo</th>
                            <th>Responsabilidad</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>index.html</strong></td>
                            <td>Maquetación y estructura semántica</td>
                            <td><span class="status-badge">Listo</span></td>
                        </tr>
                        <tr>
                            <td><strong>styles.css</strong></td>
                            <td>Estilos visuales y modo oscuro</td>
                            <td><span class="status-badge">Listo</span></td>
                        </tr>
                        <tr>
                            <td><strong>scripts.js</strong></td>
                            <td>Datos de la wiki e interactividad</td>
                            <td><span class="status-badge">Listo</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        id: 'atajos',
        category: 'Recursos',
        title: 'Edición y Nuevos Artículos',
        subtitle: 'Cómo probar la creación de páginas directamente desde el navegador.',
        tags: ['Productividad'],
        date: 'Actualizado hoy',
        readTime: '1 min',
        content: `
            <h2 id="edicion-rapida">Edición en Vivo</h2>
            <p>Haz clic en el botón <strong>"Editar página"</strong> en la parte superior derecha de cualquier artículo para modificar su título o contenido en tiempo real.</p>
            <h2 id="siguientes-pasos">Siguientes Pasos</h2>
            <p>Dime qué temática quieres darle a esta wiki y empezaré a modificar estos archivos para adaptarlos a tu idea.</p>
        `
    }
];

let currentArticleId = 'diario-21-11-2026';
let isEditing = false;

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSidebar();
    loadArticle(currentArticleId);
    setupSearch();
    setupMobileMenu();
    if (window.lucide) lucide.createIcons();
});

// ==========================================================================
// GESTIÓN DE TEMA (CLARO / OSCURO)
// ==========================================================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const iconDark = document.getElementById('theme-icon-dark');
    const iconLight = document.getElementById('theme-icon-light');

    const updateIcons = (isDark) => {
        if (isDark) {
            iconDark.classList.remove('hidden');
            iconLight.classList.add('hidden');
        } else {
            iconDark.classList.add('hidden');
            iconLight.classList.remove('hidden');
        }
    };

    const prefersDark = localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (prefersDark) {
        document.documentElement.classList.add('dark');
    }
    updateIcons(prefersDark);

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.theme = isDark ? 'dark' : 'light';
        updateIcons(isDark);
    });
}

// ==========================================================================
// NAVEGACIÓN Y RENDERIZADO DE ARTÍCULOS
// ==========================================================================
function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    const categories = [...new Set(wikiData.map(item => item.category))];
    
    nav.innerHTML = categories.map(cat => {
        const articles = wikiData.filter(item => item.category === cat);
        return `
            <div class="sidebar-group">
                <h3 class="sidebar-cat-title">${cat}</h3>
                <ul class="sidebar-list">
                    ${articles.map(art => {
                        const isActive = art.id === currentArticleId;
                        return `
                            <li>
                                <button onclick="loadArticle('${art.id}')" class="sidebar-link ${isActive ? 'active' : ''}">
                                    <span>${art.title}</span>
                                    ${isActive ? '<span class="active-dot"></span>' : ''}
                                </button>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>
        `;
    }).join('');
}

function loadArticle(id) {
    const article = wikiData.find(a => a.id === id);
    if (!article) return;

    currentArticleId = id;
    if (isEditing) toggleEditMode();

    document.getElementById('crumb-category').textContent = article.category;
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-subtitle').textContent = article.subtitle;
    document.getElementById('article-date').textContent = article.date;
    document.getElementById('article-readtime').textContent = article.readTime;
    document.getElementById('article-content').innerHTML = article.content;

    const tagsContainer = document.getElementById('article-tags');
    tagsContainer.innerHTML = (article.tags || []).map(tag => 
        `<span class="tag-pill">#${tag}</span>`
    ).join('');

    renderSidebar();
    generateTableOfContents();
    renderPagination();
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.lucide) lucide.createIcons();
}

function generateTableOfContents() {
    const tocList = document.getElementById('toc-list');
    const headings = document.querySelectorAll('#article-content h2');
    
    if (headings.length === 0) {
        tocList.innerHTML = '<li style="color: var(--text-muted); font-style: italic;">Sin subsecciones</li>';
        return;
    }

    tocList.innerHTML = Array.from(headings).map((h2, index) => {
        if (!h2.id) h2.id = 'sec-' + index;
        return `
            <li>
                <a href="#${h2.id}">${h2.textContent}</a>
            </li>
        `;
    }).join('');
}

function renderPagination() {
    const idx = wikiData.findIndex(a => a.id === currentArticleId);
    const prev = wikiData[idx - 1];
    const next = wikiData[idx + 1];
    const container = document.getElementById('article-pagination');

    container.innerHTML = `
        ${prev ? `
            <button onclick="loadArticle('${prev.id}')" class="page-nav-card prev">
                <div class="page-nav-label"><i data-lucide="arrow-left"></i> Anterior</div>
                <div class="page-nav-title">${prev.title}</div>
            </button>
        ` : '<div></div>'}
        ${next ? `
            <button onclick="loadArticle('${next.id}')" class="page-nav-card next">
                <div class="page-nav-label">Siguiente <i data-lucide="arrow-right"></i></div>
                <div class="page-nav-title">${next.title}</div>
            </button>
        ` : '<div></div>'}
    `;
}

// ==========================================================================
// BUSCADOR EN TIEMPO REAL
// ==========================================================================
function setupSearch() {
    const input = document.getElementById('search-input');
    const resultsBox = document.getElementById('search-results');

    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            resultsBox.classList.add('hidden');
            return;
        }

        const matches = wikiData.filter(art => 
            art.title.toLowerCase().includes(query) || 
            art.subtitle.toLowerCase().includes(query) ||
            art.content.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            resultsBox.innerHTML = `<div class="search-item" style="text-align:center; color: var(--text-muted);">Sin resultados para "${query}"</div>`;
        } else {
            resultsBox.innerHTML = matches.map(m => `
                <button onclick="selectSearchResult('${m.id}')" class="search-item">
                    <div class="search-item-cat">${m.category}</div>
                    <div class="search-item-title">${m.title}</div>
                    <div class="search-item-sub">${m.subtitle}</div>
                </button>
            `).join('');
        }
        resultsBox.classList.remove('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !resultsBox.contains(e.target)) {
            resultsBox.classList.add('hidden');
        }
    });
}

function selectSearchResult(id) {
    document.getElementById('search-results').classList.add('hidden');
    document.getElementById('search-input').value = '';
    loadArticle(id);
}

// ==========================================================================
// EDITOR EN VIVO Y CREACIÓN DE ARTÍCULOS
// ==========================================================================
function toggleEditMode() {
    isEditing = !isEditing;
    const articleView = document.getElementById('article-view');
    const editView = document.getElementById('edit-view');
    const article = wikiData.find(a => a.id === currentArticleId);

    if (isEditing) {
        document.getElementById('edit-title').value = article.title;
        document.getElementById('edit-subtitle').value = article.subtitle;
        document.getElementById('edit-content').value = article.content.trim();
        articleView.classList.add('hidden');
        editView.classList.remove('hidden');
    } else {
        articleView.classList.remove('hidden');
        editView.classList.add('hidden');
    }
    if (window.lucide) lucide.createIcons();
}

function saveArticleEdits() {
    const article = wikiData.find(a => a.id === currentArticleId);
    article.title = document.getElementById('edit-title').value;
    article.subtitle = document.getElementById('edit-subtitle').value;
    article.content = document.getElementById('edit-content').value;
    article.date = 'Editado ahora';
    
    loadArticle(currentArticleId);
    showToast('Artículo actualizado correctamente');
}

function openNewArticleModal() {
    document.getElementById('new-article-modal').classList.remove('hidden');
}

function closeNewArticleModal() {
    document.getElementById('new-article-modal').classList.add('hidden');
}

function createNewArticle() {
    const category = document.getElementById('new-category').value;
    const title = document.getElementById('new-title').value.trim();
    const subtitle = document.getElementById('new-subtitle').value.trim();
    const rawContent = document.getElementById('new-content').value.trim();

    if (!title) {
        showToast('Por favor, escribe un título');
        return;
    }

    const newId = 'art-' + Date.now();
    const formattedContent = rawContent 
        ? `<h2>Contenido</h2><p>${rawContent.replace(/\n/g, '</p><p>')}</p>`
        : '<p>Artículo en construcción.</p>';

    wikiData.push({
        id: newId,
        category,
        title,
        subtitle: subtitle || 'Nuevo artículo de la wiki.',
        tags: ['Nuevo'],
        date: 'Recién creado',
        readTime: '1 min',
        content: formattedContent
    });

    document.getElementById('new-title').value = '';
    document.getElementById('new-subtitle').value = '';
    document.getElementById('new-content').value = '';
    
    closeNewArticleModal();
    loadArticle(newId);
    showToast('Artículo publicado en la wiki');
}

// ==========================================================================
// MENÚ MÓVIL Y NOTIFICACIONES
// ==========================================================================
function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const backdrop = document.getElementById('sidebar-backdrop');
    btn.addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
        backdrop.classList.toggle('hidden');
    });
    backdrop.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-backdrop').classList.add('hidden');
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
