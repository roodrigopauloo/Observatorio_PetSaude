const footerHTML = `
    <footer class="footer">
        
        <div class="footer-top">
            <div class="footer-col">
                <h4>O Observatório</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Ações e Resultados</a></li>
                    <li><a href="#">Publicações</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4>Sobre Nós</h4>
                <ul>
                    <li><a href="sobre.html">O Projeto</a></li>
                    <li><a href="#">PET-Saúde Digital</a></li>
                    <li><a href="#">Ministério da Saúde</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>GAT's</h4>
                <ul class="two-columns">
                    <li><a href="sobre.html">GAT 1</a></li>
                    <li><a href="sobre.html">GAT 2</a></li>
                    <li><a href="sobre.html">GAT 3</a></li>
                    <li><a href="sobre.html">GAT 4</a></li>
                    <li><a href="sobre.html">GAT 5</a></li>
                    <li><a href="sobre.html">GAT 6</a></li>
                    <li><a href="sobre.html">GAT 7</a></li>
                    <li><a href="sobre.html">GAT 8</a></li>
                    <li><a href="sobre.html">GAT 9</a></li>
                    <li><a href="sobre.html">GAT 10</a></li>
                </ul>
            </div>

            
            <div class="footer-col">
                <h4>Participe</h4>
                <ul>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4>Redes Sociais</h4>
                <ul>
                    <li><a href="https://www.instagram.com/pet_saude_digital_ufcg" target="_blank">Instagram</a></li>
                </ul>
            </div>

            <div class="textFooter">
                <ul>Este Observatório é uma iniciativa do PET-Saúde Informação e Saúde Digital da UFCG, vinculada ao Programa PET-Saúde, do Ministério da Saúde em parceria com o Ministério da Educação.</ul>
            <div>
        </div>

    </footer>  
`;



document.getElementById('footer-container').innerHTML = footerHTML;

const anoAtual = new Date().getFullYear();
document.getElementById('ano-atual').innerText = anoAtual;

// Botão retornar ao topo

// Cria o botão dinamicamente
const btnTopo = document.createElement('button');
btnTopo.innerHTML = '↑'; // Seta para cima
btnTopo.className = 'back-to-top';
btnTopo.setAttribute('title', 'Voltar ao topo');
document.body.appendChild(btnTopo);

// Mostra o botão apenas se o usuário rolar mais de 300px para baixo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add('show');
    } else {
        btnTopo.classList.remove('show');
    }
});

// Ação de clique para voltar ao topo suavemente
btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});