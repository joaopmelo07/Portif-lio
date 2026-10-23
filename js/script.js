console.log("João! O JavaScript está funcionando!");

const nome = "João Melo";
let hora = new Date() .getHours() ;
console.log(hora);

let saudacao;
if (hora <=12) {
    saudacao = "Bom dia";
} else if (hora <=18) {
    saudacao ="Boa Tarde";
} else {
    saudacao ="Boa Noite";
}
console.log (saudacao);

const titulo = document.querySelector("h1");
titulo.textContent = saudacao + ", eu sou o " + nome + "!";
