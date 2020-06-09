<?php 
include_once "topo.php";
?>
<!DOCTYPE html>
<br>
<div class="row">
    <div class="col-md-1 col-lg-1"></div>
    <div class="col-md-10 col-lg-10">
        <div class="row">
            <div class="col-md-4 col-lg-4">
            <h2>Valor de transação:</h2>
            </div>
            <div class="col-md-8 col-lg-8"></div>
            <div class="col-md-4 col-lg-4">
                <input type="text" id="dinheiro" class="form-control" value="0">
                <br>
                <button class="btn btn-success" id="mais" style="width:49%;" onClick="saldos(this.id)">Entrada</button>&#32;<button class="btn btn-danger" id="menos" style="width:49%;" onClick="saldos(this.id)">Saída</button>
                <label id="saldo">R$ 0</label>
            </div>
            <div class="col-md-4 col-lg-4" id="grafico" align="right"></div>
            <div class="col-md-4 col-lg-4" id="grafic"></div>
        </div>

    </div>
    <div class="col-md-1 col-lg-1"></div>
</div>

</body>
<script>
window.onload = saldos("mais");
</script>
</html>

