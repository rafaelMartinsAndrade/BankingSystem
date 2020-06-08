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


<br>
<div class="row">
    <div class="col-md-4 col-lg-4"></div>
    <div class="col-md-4 col-lg-4" align="center">
        <br>
        <img src="images/computer-1331579_1280.png" style="border-radius:50%; heigth: 150px; width: 150px;">
        <br>
        <br>
        <input type="text" id="email" class="form-control">
        <br>
        <input type="password" id="senha" class="form-control">
        <br>
        <button class="btn btn-success" style="width:49%;" onClick="logar()">Logar</button>&#32;<button class="btn btn-danger" style="width:49%;">Sair</button>
        <br>
        <br>
        <div style="float:left;  width: 20%;"><hr class="preto" id="hr1"></div>
        <label id="label">Novo por aqui? Crie sua conta</label>
        <div style="float:right; width: 20%;"><hr class="preto" id="hr2"></div>
        <br>
        <br>
        <a href="cadastro.php"><button class="btn btn-secondary" style="width:100%;" id="btn">Cadastre-se agora</button></a>
    </div>
    <div class="col-md-4 col-lg-4"></div>
</div>
</body>
</html>