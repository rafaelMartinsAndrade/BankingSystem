<?php 
include_once "topo.php";
?>
<!DOCTYPE html>
<br>
<div class="row">
    <div class="col-md-4 col-lg-4"></div>
    <div class="col-md-4 col-lg-4">
        <center>
            <img src="https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true" style="width: 200px; height: 200px; border-radius: 50%;" id="img">
            <br><br>
            <input class="form-control link" type="text" id="url" placeholder="Link da Imagem Desejada"><br>
            <button class="btn btn-secondary" onclick="changeURL()">Alterar imagem</button><br>
        </center>
        <label id="perfil_nome"></label><br>
            <label id="perfil_email"></label><br>
            <label id="perfil_endereco"></label><br>
            <label id="perfil_telefone"></label><br>
            <label id="perfil_tipo"></label>
    </div>
    </div>
    <div class="col-md-1 col-lg-1"></div>
</div>

</body>
<script>
window.onload = darkMode_onload();
window.onload = perfil();
</script>
</html>