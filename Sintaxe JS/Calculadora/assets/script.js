function calculadora() {
    const operacao = Number(prompt ('Escolha uma operação: \n 1 - Soma(+) \n 2 - Subtração(-) \n 3 - Multiplicação(*) \n 4 - Divisão Real(/) \n 5 - Divisão Inteiro(%) \n 6 - Potenciação(**)'));       
    console.log(operacao);
    let n1 = Number(prompt ('Insira o primeiro valor:'));
    let n2 = Number(prompt ('Insira o segundo valor'));
    let resultado;
    
    function soma(){
        resultado = n1 + n2;
        alert (`${n1} + ${n2}=${resultado}`);
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2}=${resultado}`);
    }
    function mult(){
        resultado = n1 * n2;
        alert (`${n1} * ${n2}=${resultado}`);
    }
    function divReal(){
        resultado = n1 / n2;
        alert (`${n1} / ${n2}=${resultado}`);
    }
    function divInteiro(){
        resultado = n1 % n2;
        alert (`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
    }
    function poten(){
        resultado = n1 **n2;
        alert (`${n1} elevado à ${n2} é igual a ${resultado}`);
    }

    if(operacao ==1){
        soma();
    }else if(operacao ==2){
        subtracao();
    }else if(operação == 3){
        mult();
    }else if(operacao ==4){
        divReal();
    }else if(operação == 5){
        divInteiro();
    }else if(operacao ==6){
        poten();
    }
}


calculadora();