//Verificar Palíndromo
// solução 1

function verificaPalindromo(string){
    if(!string) return;

    return string.split("").reverse().join("")===string;
}
console.log(verificaPalindromo("ovo"));

//Solução 2

function verificaPalindromo2(string){
    if(!string) return;
    for(let i = 0;i < string.length/2; i++){
        if(string[i] !== string[string.length - 1 - i]){
        return false;
        }
    }
    return true
}
console.log(verificaPalindromo2("abba"));

function substituiPares(array){
    if(!array) return "[-1]";
    if(!array.length) return "[-1]";
    for(let i = 0; i < array.length; i++){
        if (array[i] === 0){
            console.log("Você já é zero!!")
        }else if (array[i] %2 ===0){
            console.log(`Substituindo ${array[i]} por 0...`);   
            array[i]=0;
        }
    }
    return array;
}

let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
console.log(substituiPares(array1));
let array2 = [];
console.log("\n"+substituiPares(array2));
let array3 = null;
console.log("\n"+substituiPares(array3));
