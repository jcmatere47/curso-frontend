function calcularMedia( notas ) {

     let soma = 0;
     for ( c = 0; c < notas.length; c++) {
     soma += notas[c];
    }
    media = soma / notas.length;
    
    return media;

}

let media; //escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + '- Resultado:' + condicao;



}

// Funções Recursivas

function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;
    
    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);




}

// contagem regressiva(50);
const formulario1 = document.getElementById('formulario-01')

if(formulario1)
formulario1.addEventListener('submit', function ( evento ) {

    evento.preventDefault();
    evento.stopPropagation();

    if ( this.getAttribute('class').match(/erro/)) {
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()) {

        let numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0; // é um número

        if(!isNaN(numero)) {
            notas.push(numero);
        }

        //adiciona itens no array
       // notas.push(  parseInt(dados.get(key)));
    }

    console.log(notas);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML =   texto;
});



function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

            if(this.value == ""){
                document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho"
                this.classList.add('erro');
                this.parentNode.classList.add('erro');
                return false;
            } else {
                document.querySelector('.mensagem').innerHTML ="";
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
            }

    });


}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let cepValido = /^\d{5}-\d{3}$/;

        if(this.value.match(cepValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {       
            document.querySelector('.mensagem').innerHTML ="verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false; 
        }        

    });

}


function validaEmail(elemento) {
    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = ""
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {       
            document.querySelector('.mensagem').innerHTML ="verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false; 
        }        

    });

}    

function validaUf(elemento) {
    elemento.addEventListener("focusout", function (event) {
      event.preventDefault();
  
      const ufValida = /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/;
  
      if (this.value.match(ufValida)) {
        document.querySelector(".mensagem").innerHTML = "";
        this.classList.remove("erro");
        this.parentNode.classList.remove("erro");
      } else {
        document.querySelector(".mensagem").innerHTML =
          "verifique o preenchimento dos campos em destaque";
        this.classList.add("erro");
        this.parentNode.classList.add("erro");
        return false;
      }
    });
  }


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.obrigatorioNumero');
let camposEmail = document.querySelectorAll('input.email');
let camposUF = document.querySelectorAll("input.obrigatorioUF");

for ( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}
for ( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for ( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for ( let emFoco of camposUF) {
    validaUf(emFoco);
}
     