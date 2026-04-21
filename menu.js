const menuHTML = `
    <aside class="sidebar">        
        <div class="logo-container">
            <img src="logoPet.png" alt="Logo" class="minha-logo">
            <span class="logo-text">Fortalecimento e aprimoramento da Saúde Digital:<br>Educação, Inovação e Gestão para o SUS</span>
        </div>
        <nav>
            <a href="index.html" class="menu-item">HOME</a>
            <a href="gat.html" class="menu-item">GAT's</a>
            <a href="sobre.html" class="menu-item">SOBRE NÓS</a>
            <a href="noexist.html" class="menu-item">NOTÍCIAS</a>
            <a href="indicadores.html" class="menu-item">INDICADORES</a>
            

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