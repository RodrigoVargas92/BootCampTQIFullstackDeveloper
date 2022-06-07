function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade+anos} anos.`;
}
const pessoa1={
    nome : "Rodrigo",
    idade : 29
}
const pessoa2 = {
    nome : "Talita",
    idade: 24
}
console.log(calculaIdade.call(pessoa1,30));
console.log(calculaIdade.call(pessoa2,30));
