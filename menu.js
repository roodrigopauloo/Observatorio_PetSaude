const menuHTML = `
    <aside class="sidebar">    
        <img src="UFCG-vetor.svg" alt="LogoUFCG" class="logo-ufcg">    
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
            
            <div class="header-actions">

                <a href="https://www.instagram.com/pet_saude_digital_ufcg" target="_blank" class="action-circle" title="Siga nosso Instagram">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>

                <button id="dark-mode-toggle" class="action-circle" title="Alternar Modo Noturno">
                    <img src="modo-escuro.svg" alt="Modo Noturno" class="icon">       
                </button>
            </div>

        </nav>
    </aside>
`;

document.getElementById('menu-container').innerHTML = menuHTML;

// Faz a barrinha laranja (classe active) mudar automaticamente com base na página atual
const links = document.querySelectorAll('.menu-item');
links.forEach(link => {
    // Adicionado uma checagem (href) para não dar erro no "span" do GATs
    const href = link.getAttribute('href');
    if (href && window.location.href.includes(href)) {
        link.classList.add('active');
    }
});

// Script para fazer o botão do Modo Noturno funcionar
const darkModeBtn = document.getElementById('dark-mode-toggle');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}