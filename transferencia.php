<?php 
include_once "topo.php";
?>
<!DOCTYPE html>
<br>
<div class="row">
    <div class="col-1 col-sm-1 col-md-1 col-lg-1"></div>
    <div class="col-10 col-sm-10 col-md-10 col-lg-10">
        <h2>Extrato Conta Digital:</h2>
    </div>
    <div class="col-md-1 col-lg-1"></div>
    <div class="col-1 col-sm-1 col-md-1 col-lg-1"></div>
    <div class="col-10 col-sm-10 col-md-10 col-lg-10">
        <table id="lista">
            <tr class="hover_none">
                <th>Data</th>
                <th>Valor</th>
                <th>Categoria</th>
            </tr>
        </table>
    </div>
</div>
</body>
<script>
window.onload = listar_transacoes();
window.onload = darkMode_onload();
</script>
</html>