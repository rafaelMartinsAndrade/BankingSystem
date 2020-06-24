<?php 
include_once "topo.php";
?>
<!DOCTYPE html>
<br>
<div class="row">
    <div class="col-md-1 col-lg-1"></div>
    <div class="col-md-10 col-lg-10">
        <div class="row">
            <div class="col-md-12 col-lg-12">
                <h2 id="tipo"></h2>
            </div>
            <div class="col-md-4 col-lg-4">
            <h2>Extrato Conta Digital:</h2>
            </div>
            <div class="col-md-8 col-lg-8"></div>
            <div class="col-md-4 col-lg-4">
                <input type="number" id="dinheiro" class="form-control" value="0"><br>
                <select class="form-control" id="tipo_transacao">
                    <option value=""></option>
                    <option value="alimentacao">Alimentação</option>
                    <option value="carro">Carro</option>
                    <option value="familia">Família</option>
                    <option value="lazer">Lazer</option>
                    <option value="residencia">Residência</option>
                    <option value="saude">Saúde</option>
                </select><br>
                <button class="btn btn-success" id="mais" style="width:49%;" onClick="saldos(this.id)">Entrada</button>&#32;<button class="btn btn-danger" id="menos" style="width:49%;" onClick="saldos(this.id)">Saída</button>
                <label id="saldo">R$ 0</label>
            </div>
            <div class="col-md-4 col-lg-4" id="graficoneg" style="padding-right:0px;" align="right"><img id="imgneg" src="images/red.jpg" class="fadding" width="0" height="100"></div>
            <div class="col-md-4 col-lg-4" id="graficoposi" style="padding-left:0px;"><img id="imgposi" src="images/green.jpg" class="fadding" width="0" height="100"></div>
        </div>
    </div>
    <div class="col-md-1 col-lg-1"></div>
</div>

</body>
<script>
window.onload = saldos("mais");
window.onload = darkMode_onload();
window.onload = extrato();
</script>
</html>