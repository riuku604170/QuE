// ==========================================================================
// BASE DE DATOS DE ARTÍCULOS DE LA WIKI
// ==========================================================================
let wikiData = [
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

let currentArticleId = 'bienvenida';
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