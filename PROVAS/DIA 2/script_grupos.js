var grupos = [
  {
    id_div: "grupo-a",
    titulo: "Grupo A",
    selecoes: [" México", "África do Sul", "oreia do Sul", "República Tcheca"],
    fatos: "O jogo de abertura será México x África do Sul. Confrontos entre Coreia do Sul e seleções europeias já ocorreram em várias Copas, com histórico equilibrado."
  },
  {
    id_div: "grupo-b",
    titulo: "Grupo B",
    selecoes: ["Canadá", " Suíça", "Catar", " Vaga Europeia (Bósnia)"],
    fatos: "O Canadá joga em casa, fator importante de desempenho. Catar e Suíça já se enfrentaram recentemente em amistosos internacionais."
  },
  {
    id_div: "grupo-c",
    titulo: "Grupo C",
    selecoes: [" Brasil", " Marrocos", "Haiti", "🏴󠁧󠁢󠁳󠁣󠁴Escócia"],
    fatos: "Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas."
  }
];
 
var proximosGrupos = [
  {
    id_div: "grupo-a",
    titulo: " Grupo D",
    selecoes: ["Estados Unidos", "Paraguai", "Austrália", "Turquia"],
    fatos: "Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios."
  },
  {
    id_div: "grupo-b",
    titulo: "Grupo E",
    selecoes: ["Alemanha", "Equador", "Costa do Marfim", "Curaçao"],
    fatos: "Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes."
  },
  {
    id_div: "grupo-c",
    titulo: " Grupo F",
    selecoes: ["Holanda", "Japão", "Tunísia", "Suécia"],
    fatos: "Holanda e Japão têm estilos de jogo contrastantes. Tunísia e Suécia buscam surpreender no torneio."
  }
];
 
var paginaAtual = 0; // 0 = grupos A/B/C, 1 = grupos D/E/F
 
function proximoGrupo() {
  var btn = document.getElementById("btn-proximo");
 
  if (paginaAtual === 0) {
    // Alterna para grupos D, E, F
    atualizarGrupos(proximosGrupos);
    btn.textContent = "Voltar";
    paginaAtual = 1;
  } else {
    // Volta para grupos A, B, C
    atualizarGrupos(grupos);
    btn.textContent = "Próximo";
    paginaAtual = 0;
  }
}
 
function atualizarGrupos(lista) {
  lista.forEach(function(grupo) {
    var div = document.getElementById(grupo.id_div);
 
    // Atualiza título
    div.querySelector("h2").textContent = grupo.titulo;
 
    // Atualiza lista de seleções
    var ul = div.querySelector("ul");
    ul.innerHTML = "";
    grupo.selecoes.forEach(function(selecao) {
      var li = document.createElement("li");
      li.textContent = selecao;
      ul.appendChild(li);
    });
 
    // Atualiza fatos
    div.querySelector("details p").textContent = grupo.fatos;
 
    // Fecha o details ao trocar
    div.querySelector("details").removeAttribute("open");
  });
}