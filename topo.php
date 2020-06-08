<?php

?>

<html>
<head>

<link rel="stylesheet" href="css/style.css">
<script src="js/java.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

</head>
<body style="transition-duration:3s;">

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
  <label style="display: block; color: white; text-align: center;	padding: 14px 16px; text-decoration: none;">
  Dark Mode
  </label></li>
</ul>