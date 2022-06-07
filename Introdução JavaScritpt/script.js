let input = gets();

let leitor = parseInt(input)
let C = leitor
for (let i = 0; i < C; i++) {
    input = gets()
    let N = parseInt(input)
  	if (N > 8000){
    		print('Mais de 8000!');
  	}	else { 
      print('Inseto!');
    }
}