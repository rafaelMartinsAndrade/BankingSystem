<?php 
include_once "topo.php";
?>
<!DOCTYPE html>
<br>
<div class="row">
    <div class="col-md-1 col-lg-1"></div>
    <div class="col-md-10 col-lg-10">
        <h2>Extrato Conta Digital:</h2>
    </div>
    <div class="col-md-1 col-lg-1"></div>
    <div class="col-md-1 col-lg-1"></div>
    <div class="col-md-10 col-lg-10">
        <table id="lista">
            <tr class="hover_none">
                <th>Data</th>
                <th>Valor</th>
            </tr>
        </table>
    </div>
    <div class="col-md-4 col-lg-4" id="graficoneg" style="padding-right:0px;" align="right"><img id="imgneg" src="images/red.jpg" class="fadding" width="0" height="100"></div>
    <div class="col-md-4 col-lg-4" id="graficoposi" style="padding-left:0px;"><img id="imgposi" src="images/green.jpg" class="fadding" width="0" height="100"></div>
</div>
    </div>
    <div class="col-md-1 col-lg-1"></div>
</div>

</body>
<script>
window.onload = listar_transacoes();
window.onload = darkMode_onload();
</script>
</html>