function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 16
let verficacao = maiorDeIdade(idade);

if (verficacao) {
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}