 function mostrarTabela() {
      if (document.getElementById("tabela-jogos")) {
        return;
      }
 
      
      var img = document.createElement("img");
      img.src = "Tabela_Jogos.png";
      img.alt = "Tabela Oficial de Jogos - Copa do Mundo FIFA 2026";
      img.id = "tabela-jogos";
 
      
      document.body.appendChild(img);
 
    
      img.scrollIntoView({ behavior: "smooth" });
 
    
      document.getElementById("btn-tabela").textContent = "Tabela já exibida!";
      document.getElementById("btn-tabela").disabled = true;
      document.getElementById("btn-tabela").style.backgroundColor = "#C2C4B6";
      document.getElementById("btn-tabela").style.color = "#3a4a5a";
      document.getElementById("btn-tabela").style.cursor = "default";
    }

   