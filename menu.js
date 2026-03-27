const menuHTML = `
    <aside class="sidebar">        
        <img src="logoPet.png" alt="Logo" class="minha-logo">
        <nav>
            <a href="index.html" class="menu-item">Visão Geral</a>
            <a href="gat.html" class="menu-item">GAT6</a>
            <a href="" class="menu-item">Indicadores</a>
            <a href="sobre.html" class="menu-item">Sobre</a>
        </nav>
    </aside>
`;

document.getElementById('menu-container').innerHTML = menuHTML;

// Faz a barrinha laranja (classe active) mudar automaticamente com base na página atual
const links = document.querySelectorAll('.menu-item');
links.forEach(link => {
    // Verifica se o link do botão é igual ao link da página atual
    if (window.location.href.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});