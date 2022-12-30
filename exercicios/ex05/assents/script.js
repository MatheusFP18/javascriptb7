function validar(usuario, senha) {
    if (usuario === 'Pedro' && senha === 123) {
        return true;
    } else {
        return false;
    }
}

let usuario = 'Pedro';
let senha = 123;
let validacao = validar(usuario, senha);

if (validacao) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}