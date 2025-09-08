var idade = 67//cria uma variavel para idade e coloca um valor
console.log(`Você tem ${idade} anos.`)//exibe a frase falando a idade
if (idade < 16) {//condição se for menor que 16
    console.log("Não vota.")//para os menores de 16 aparece a mensagem "não vota"
} else if (idade < 18 || idade > 65) {//ver se não é menor que 16, verifica se é menor que 18 ou maior que 65 e se for coloca no bloco
        console.log("Voto opcional.")//coloca na tela se vale para adolescentes entre 16 e 17 anos ou idosos acima de 65 anos
    } else {//se a condição não for verdadeira
        console.log("Voto obrigatório.")//coloca na tela, porque é a faixa de idade com voto obrigatório no Brasil.
    }