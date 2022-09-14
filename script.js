
function validaCampoFormulario(){

const valorCpf = document.getElementById('cpf').value
const valorDate = document.getElementById('date').value
const valorNome = document.getElementById('nome').value


    if (valorCpf == '' || valorDate == '' || valorNome == '') {
        alert ('Preencha todos os campos.')
        return false;

    }
    localStorage.setItem('nome', valorNome) 
    localStorage.setItem('date', valorDate) 
    localStorage.setItem('cpf', valorCpf) 

    


 }


function mascara_cpf() {

    const mascara_cpf = document.querySelector('cpf')
    
    cpf.addEventListener('keypress' ,() => {
        let cpfLength = cpf.value.length
    
        if (cpfLength === 3 || cpfLength === 7){
            cpf.value += '.'
        } else if (cpfLength === 11){
            cpf.value += '-'
        }
    
    })
    
    }
    
    function limpa_formulário_cep() {
        
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        
        
}


function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        
       
    } 
    else {
        
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    
    var cep = valor.replace(/\D/g, '');

    
    if (cep != "") {

        
        var validacep = /^[0-9]{8}$/;

       
        if(validacep.test(cep)) {

            
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
           

           
            var script = document.createElement('script');

            
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

          
            document.body.appendChild(script);

        } 
        else {
           
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        
        limpa_formulário_cep();
    }
};

function endereco (){
    
}

const button = document.querySelector('button');

button.addEventListener('click', )

