let posicao = 0;



                    function move(lado) {
                        console.log("Oi");

                        let tamanho = document.querySelector(".carrossel .carro-imagens img").scrollWidth;
                        let qtd_imagens = document.querySelectorAll(".carrossel .carro-imagens img").length;

                        console.log(qtd_imagens);


                        if (lado == 1) {
                            if (posicao < (qtd_imagens - 1)) {
                                posicao += 1;
                                console.log(posicao)
                            } else {
                                posicao = 0;
                            }
                        } else {
                            if (posicao > 0) {
                                posicao -= 1;
                                console.log(posicao)
                            } else {
                                posicao = qtd_imagens - 1;
                            }
                        }


                        //let container = document.querySelector("div.container div");
                        let container = document.querySelector(".carro-imagens");
                        console.log("-" + (posicao * tamanho) + "px");
                        container.style.left = "-" + (posicao * tamanho) + "px";

                    }