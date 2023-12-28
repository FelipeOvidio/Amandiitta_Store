[] - validacao por jwt
[] - fazer validacao  joi
[] - rota para o usuario autenticar  rota  login
[] -
[] -
[] -
[] -
[] -

<!-- ROTAS -->

<!-- criar usuario  NÃO REQUER TOKEN -->
/create   
        nome = string
        email = string
        senha   = string

<!-- logar usuario  NÃO REQUER TOKEN -->
/login
        email
        senha

<!-- lista todos os perfils  REQUER TOKEN -->
/profile
        
        


<!-- Libs -->
joi  =  validar entradas de dados
    documentação
        https://joi.dev/api/?v=17.9.1