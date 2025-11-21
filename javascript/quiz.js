let iniciar = prompt('Você gostaria de iniciar o quiz? (Use S - sim e N - não)').toUpperCase().trim();

if(iniciar == "N" ){
    alert("Quiz não iniciadio");
}else if(iniciar != "S" || iniciar != "N"){
    alert("Valor inválido");
}

function verificar() {

    let mausHabitos = 0;
    let insonia = 0;
    let apneiaSono = 0
    let narcolepsia = 0;
    let nenhumDisturbio = 0;

    let p1 = document.querySelector('input[name="p1"]: checked')

    if (p1 && p1.value === "sim") {
        mausHabitos++
    } else if (p1 && p1.value === "nao") {
        nenhumDisturbio++
    }

}