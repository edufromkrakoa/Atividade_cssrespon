document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os contêineres das seções
    const homePage = document.querySelector('.home-page');
    const aboutusSection = document.getElementById('aboutus');
    const storeSection = document.getElementById('store');
    
    // Exibe a homepage por padrão e oculta as demais
    if (homePage) homePage.style.display = 'block';
    if (aboutusSection) aboutusSection.style.display = 'none';
    if (storeSection) storeSection.style.display = 'none';
    
    // Função para alternar a exibição
    function switchSection(sectionToShow) {
        // Oculta todas as seções
        if (homePage) homePage.style.display = 'none';
        if (aboutusSection) aboutusSection.style.display = 'none';
        if (storeSection) storeSection.style.display = 'none';
        
        // Exibe a seção desejada (caso exista)
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
            sectionToShow.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    // Evento para o link "Página Inicial"
    const homeLink = document.getElementById("homeLink");
    if (homeLink) {
      homeLink.addEventListener("click", function(event) {
          event.preventDefault();
          switchSection(homePage);
      });
    }
    
    // Evento para o link "Sobre"
    const aboutLink = document.getElementById("aboutLink");
    if (aboutLink) {
      aboutLink.addEventListener("click", function(event) {
          event.preventDefault();
          switchSection(aboutusSection);
      });
    }
    
    // Evento para o link "Loja"
    const storeLink = document.getElementById("storeLink");
    if (storeLink) {
      storeLink.addEventListener("click", function(event) {
          event.preventDefault();
          switchSection(storeSection);
      });
    }
});
