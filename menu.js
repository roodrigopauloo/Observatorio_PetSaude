const menuHTML = `
    <aside class="sidebar">        
        <div class="logo-container">
            <img src="logoPet.png" alt="Logo" class="minha-logo">
            <span class="logo-text">Fortalecimento e aprimoramento da Saúde Digital:<br>Educação, Inovação e Gestão para o SUS</span>
        </div>
        <nav>
            <a href="index.html" class="menu-item">HOME</a>
            <div class="dropdown">
            <span class="menu-item dropdown-trigger">GAT's</span>
            
            <div class="dropdown-content">
                <a href="gat1.html">GAT 1</a>
                <a href="gat2.html">GAT 2</a>
                <a href="gat3.html">GAT 3</a>
                <a href="gat4.html">GAT 4</a>
                <a href="gat5.html">GAT 5</a>
                <a href="gat.html">GAT 6</a>
                <a href="gat7.html">GAT 7</a>
                <a href="gat8.html">GAT 8</a>
                <a href="gat9.html">GAT 9</a>
                <a href="gat10.html">GAT 10</a>
            </div>
        </div>
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