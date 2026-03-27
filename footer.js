const footerHTML = `
    <footer class="footer">
        
        <div class="footer-top">
            <div class="footer-col">
                <h4>O Observatório</h4>
                <ul>
                    <li><a href="index.html">Visão Geral</a></li>
                    <li><a href="#">Os 10 GATs</a></li>
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
        </div>

        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <span class="copyright">
                    &copy; <span id="ano-atual"></span> Observatório PetSaúde Digital. Iniciativa vinculada ao Ministério da Saúde.
                </span>
                <a href="#" class="privacy-policy">Política de Privacidade</a>
            </div>
        </div>

    </footer>  
`;

// 1. Insere o rodapé dentro da div no HTML
document.getElementById('footer-container').innerHTML = footerHTML;

// 2. Truque para atualizar o ano automaticamente
const anoAtual = new Date().getFullYear();
document.getElementById('ano-atual').innerText = anoAtual;