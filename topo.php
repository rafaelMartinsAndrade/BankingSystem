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
<body style="transition-duration:2s;">

<ul>
  <li><a class="active" href="index2.php">Home</a></li>
  <li><a href="">Minha Conta</a></li>
  <li><a href="">Saldo</a></li>
  <li><a href="">Tranferencia</a></li>
  <li><a href="">Pagamentos</a></li>
  <li><a href="">Deposito</a></li>
  <li><a href="">Cambio</a></li>
  <li><a href="">Emprestimo</a></li>
  <li><a href="">Seguros</a></li>
  <li style="float:right" class="libutton">
    <label class="switch">
      <input id="toggleswitch" type="checkbox" onClick="darkMode()">
      <span class="slider round"></span>
    </label>
  </li>
  <li style="float:right">
  <label style="display: block; color: white; text-align: center;	padding: 14px 16px 0px 16px; text-decoration: none;">
  Dark Mode
  </label></li>
</ul>