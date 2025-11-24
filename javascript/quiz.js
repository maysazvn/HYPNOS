


function verificar() {

    let p1 = document.querySelector("input[name='p1']:checked");
    let p2 = document.querySelector("input[name='p2']:checked");
    let p3 = document.querySelector("input[name='p3']:checked");
    let p4 = document.querySelector("input[name='p4']:checked");
    let p5 = document.querySelector("input[name='p5']:checked");
    let p6 = document.querySelector("input[name='p6']:checked");
    let p7 = document.querySelector("input[name='p7']:checked");
    let p8 = document.querySelector("input[name='p8']:checked");
    let p9 = document.querySelector("input[name='p9']:checked");
    let p10 = document.querySelector("input[name='p10']:checked");
    let p11 = document.querySelector("input[name='p11']:checked");
    let p12 = document.querySelector("input[name='p12']:checked");
    let p13 = document.querySelector("input[name='p13']:checked");
    let p14 = document.querySelector("input[name='p14']:checked");
    let p15 = document.querySelector("input[name='p15']:checked");
    let p16 = document.querySelector("input[name='p16']:checked");
    let p17 = document.querySelector("input[name='p17']:checked");
    let p18 = document.querySelector("input[name='p18']:checked");
    let p19 = document.querySelector("input[name='p19']:checked");
    let p20 = document.querySelector("input[name='p20']:checked");
    let p21 = document.querySelector("input[name='p21']:checked");
    let vinte2 = document.querySelector(".vinte2");
    let vinte3 = document.querySelector(".vinte3");
    let vinte4 = document.querySelector(".vinte4");
    let vinte5 = document.querySelector(".vinte5");
    let vinte6 = document.querySelector(".vinte6");
    let verificarResultado = document.querySelector(".verificarResultado");



    let mausHabitos = 0;
    let insonia = 0;
    let apneiaSono = 0;
    let narcolepsia = 0;
    let nenhumDisturbio = 0;


    if (p1.value === "sim") {
        mausHabitos += 2
    } else if (p1.value === "vezes") {
        mausHabitos++
    } else if (p1.value === "nao") {
        nenhumDisturbio++
    }

    if (p2.value === "sim") {
        mausHabitos += 2
    } else if (p2.value === "vezes") {
        mausHabitos++
    } else if (p2.value === "nao") {
        nenhumDisturbio++
    }

    if (p3.value === "sim") {
        mausHabitos += 2
    } else if (p3.value === "vezes") {
        mausHabitos++
    } else if (p3.value === "nao") {
        nenhumDisturbio++
    }

    if (p4.value === "sim") {
        mausHabitos += 2;
    } else if (p4.value === "vezes") {
        mausHabitos++
    } else if (p4.value === "nao") {
        nenhumDisturbio++
    }
    if (p5.value === "sim") {
        mausHabitos += 2;
    } else if (p5.value === "vezes") {
        mausHabitos++
    } else if (p5.value === "nao") {
        nenhumDisturbio++
    }

    if (p6.value === "sim") {
        insonia += 2
    } else if (p6.value === "vezes") {
        insonia++
    } else if (p6.value === "nao") {
        nenhumDisturbio++
    }

    if (p7.value === "sim") {
        insonia += 2;
    } else if (p7.value === "vezes") {
        insonia++
    } else if (p7.value === "nao") {
        nenhumDisturbio++
    }

    if (p8.value === "sim") {
        apneiaSono += 2;
    } else if (p8.value === "vezes") {
        apneiaSono++
    } else if (p8.value === "nao") {
        nenhumDisturbio++
    }

    if (p9.value === "sim") {
        apneiaSono += 2;
    } else if (p9.value === "vezes") {
        apneiaSono++
    } else if (p9.value === "nao") {
        nenhumDisturbio++
    }

    if (p10.value === "sim") {
        apneiaSono += 2;
        insonia++;
        narcolepsia++;
    } else if (p10.value === "vezes") {
        apneiaSono++
    } else if (p10.value === "nao") {
        nenhumDisturbio++
    }

    if (p11.value === "sim") {
        narcolepsia += 2;
    } else if (p11.value === "vezes") {
        narcolepsia++
    } else if (p11.value === "nao") {
        nenhumDisturbio++
    }

    if (p12.value === "sim") {
        insonia += 2;
    } else if (p12.value === "vezes") {
        insonia++
    } else if (p12.value === "nao") {
        nenhumDisturbio++
    }

    if (p13.value === "sim") {
        apneiaSono += 2;
    } else if (p13.value === "vezes") {
        apneiaSono++
    } else if (p13.value === "nao") {
        nenhumDisturbio++
    }

    if (p14.value === "sim") {
        apneiaSono += 2;
        insonia += 2;
        narcolepsia += 2;
        mausHabitos += 2;
    } else if (p14.value === "vezes") {
        apneiaSono++
        insonia++;
        narcolepsia++;
        mausHabitos++;
    } else if (p14.value === "nao") {
        nenhumDisturbio += 2;
    }

    if (p15.value === "vezes") {
        mausHabitos++
    } else if (p15.value === "nao") {
        mausHabitos += 2;
    }

    if (p16.value === "vezes") {
        mausHabitos++;
    } else if (p16.value === "sim") {
        mausHabitos += 2;
    }

    if (p17.value === "vezes") {
        mausHabitos++;
    } else if (p17.value === "sim") {
        mausHabitos += 2;
    }

    if (p18.value === "nao") {
        mausHabitos += 2;
    } else if (p18.value === "vezes") {
        mausHabitos++;
    }

    if (p19.value === "sim") {
        apneiaSono += 2
        mausHabitos++
    }

    if (p20.value === "sim") {
        apneiaSono += 2;
    } else if (p20.value === "nao") {
        nenhumDisturbio += 2
    }

    if (p21.value === "vezes") {
        mausHabitos++
    } else if (p21.value === "nao") {
        mausHabitos += 2;
    }


    let resultado = "";

    if (mausHabitos >= insonia && mausHabitos >= apneiaSono && mausHabitos >= narcolepsia && mausHabitos >= nenhumDisturbio) {
        resultado = "Maus Hábitos";
        vinte5.style.display = "block";
        verificarResultado.style.display = "none";

    } else if (insonia >= mausHabitos && insonia >= apneiaSono && insonia >= narcolepsia && insonia >= nenhumDisturbio) {
        resultado = "Insônia";
        vinte2.style.display = "block";
        verificarResultado.style.display = "none";

    } else if (apneiaSono >= mausHabitos && apneiaSono >= insonia && apneiaSono >= narcolepsia && apneiaSono >= nenhumDisturbio) {
        resultado = "Apneia Do Sono";
        vinte3.style.display = "block";
        verificarResultado.style.display = "none";

    } else if (narcolepsia >= mausHabitos && narcolepsia >= insonia && narcolepsia >= apneiaSono && narcolepsia >= nenhumDisturbio) {
        resultado = "Narcolepsia";
        vinte4.style.display = "block";
        verificarResultado.style.display = "none";

    } else if (nenhumDisturbio >= mausHabitos && nenhumDisturbio >= insonia && nenhumDisturbio >= narcolepsia && nenhumDisturbio >= apneiaSono) {
        resultado = "Nenhum possível distúrbio identificado";
        vinte6.style.display = "block";
        verificarResultado.style.display = "none";
    }
}