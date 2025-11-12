 function abrirBotao() {

    console.log("aaaaaaaaaaaaaa");

      /*let fontes = document.querySelector("div ul");*/
      let fontes = document.getElementsByClassName("centralizarBotoes")

      if(fontes.style.height == fontes.scrollHeight + "px"){
        fontes.style.height = "0px";
       
      } else{
        fontes.style.height = menu.scrollHeight + "px";

      }


    }