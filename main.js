$(document).ready(function() {
    // Aplicar máscaras aos campos usando o jQuery Mask Plugin
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
  
    // Adicione mais lógica JavaScript conforme necessário, como validações, envio do formulário, etc.
    $('#cadastroForm').submit(function(event) {
      event.preventDefault();
      // Lógica de envio do formulário ou validação aqui
      console.log('Formulário enviado!');
    });
  });
  