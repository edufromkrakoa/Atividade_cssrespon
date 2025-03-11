document.addEventListener("DOMContentLoaded", function () {
    const store = document.getElementById("store");

    if (!store) {
        console.error("Erro: A seção #store não foi encontrada no DOM!");
        return;
    }

    // Remove qualquer CSS que possa estar escondendo a seção
    store.style.display = "block";
    store.style.visibility = "visible";
    store.style.height = "auto";

    // Verifica se a altura está correta
    const height = store.offsetHeight;
    if (height === 0) {
        console.warn("A altura de #store é 0! Aplicando altura manual...");
        store.style.minHeight = "200px";
    } else {
        console.log("A altura da seção #store é:", height + "px");
    }
});
