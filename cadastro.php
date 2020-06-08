<?php

?>


<html>
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <script src="js/java.js"></script>
  <link rel="stylesheet" href="css/style.css">
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

</head>
<body>
  <div class="row">
    <div class="col-md-4 col-xs-4"></div>
    <div class="col-md-4 col-xs-4">
      <h2>Cadastro de Usuários</h2>
      
        <div class="form-group" hidden>
           <label for="" >ID</label>
           <input type="text" class="form-control" id="id" >
        </div>
        <div class="form-group">
           <label for="">Nome</label>
           <input type="text" class="form-control" id="nome">
        </div>
        <div class="form-group">
           <label for="">Endereço</label>
           <input type="text" class="form-control" id="endereco">
        </div>
        <div class="form-group">
           <label for="">Telefone</label>
           <input type="text" class="form-control" id="telefone">
        </div>
        <div class="form-group">
           <label for="">E-mail</label>
           <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="">Senha</label>
          <input type="password" class="form-control" id="senha">
        </div>
        <div>
          <button class="btn btn-success" type="button" onClick="cadUsuario()" style="width: 49%;">Salvar</button>
          &#32;<a class="btn btn-danger" href="index.php" style="width: 49%;">Voltar</a>
         
        </div>
      
    </div>
    <div class="col-md-4 col-xs-4">
    
    </div>
    
  </div>
</body>
</html>