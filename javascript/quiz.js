let iniciar = prompt('Você gostaria de iniciar o quiz? (Use S - sim e N - não)').toUpperCase().trim();

if(iniciar == "N" ){
    alert("Quiz não iniciadio");
}else if(iniciar != "S" || iniciar != "N"){
    alert("Valor inválido");
}