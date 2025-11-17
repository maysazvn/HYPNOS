function abrirBotao() {

  let fontes = document.querySelector(".fontesAzuis");
  let fontesDois = document.querySelector(".fontesRoxas");
  let fontesTres = document.querySelector(".fontesBrancas");
  let fontesQuatro = document.querySelector(".fontesBrancas2");

  if (fontes) {
    if (fontes.style.height == fontes.scrollHeight + "px") {
      fontes.style.height = "0px";
    } else {
      fontes.style.height = fontes.scrollHeight + "px";
    }
  }

  if (fontesDois) {
    if (fontesDois.style.height == fontesDois.scrollHeight + "px") {
      fontesDois.style.height = "0px";
    } else {
      fontesDois.style.height = fontesDois.scrollHeight + "px";
    }
  }

  if (fontesTres) {
    if (fontesTres.style.height == fontesTres.scrollHeight + "px") {
      fontesTres.style.height = "0px";
    } else {
      fontesTres.style.height = fontesTres.scrollHeight + "px";
    }
  }

  if (fontesQuatro) {
    if (fontesQuatro.style.height == fontesQuatro.scrollHeight + "px") {
      fontesQuatro.style.height = "0px";
    } else {
      fontesQuatro.style.height = fontesQuatro.scrollHeight + "px";
    }
  }

}
