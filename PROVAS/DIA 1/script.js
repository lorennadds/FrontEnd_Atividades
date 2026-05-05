function revelar() {

    document.querySelector(".card-img-top").src = "img/_vinicius_junior.png";

    document.getElementById("Nome").innerHTML =
        'Vinícius José Paixão de Oliveira Júnior <span id="Rank" class="badge text-bg-secondary">9,5</span>';

    document.getElementById("Data_Nas").textContent = "📅 12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent = "📏 1,76 m";
    document.getElementById("Posição ").textContent = "🏃 Ponta-esquerda / Atacante";

    var elementos = document.querySelectorAll(".placeholder");
    elementos.forEach(function(el) {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });

    var glows = document.querySelectorAll(".placeholder-glow");
    glows.forEach(function(el) {
        el.classList.remove("placeholder-glow");
    });

}