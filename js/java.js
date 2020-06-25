debugger
function darkMode(){
  let usuarioTodos = JSON.parse(localStorage.getItem("usuarios"));
  let usuario = usuarioTodos.findIndex(usuario => usuario.log == 1);
  let x = document.getElementById("toggleswitch").checked;
    if(x == true){
        document.body.style.backgroundColor = "#01000F";
        document.body.style.color = "white";
        usuarioTodos[usuario].tema = "preto";
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        usuarioTodos[usuario].tema = "branco";
    }
    localStorage.removeItem('usuarios');
    window.localStorage.setItem('usuarios',JSON.stringify([]));
    window.localStorage.setItem('usuarios',JSON.stringify(usuarioTodos));
}

function darkMode_onload(){
  let usuarioTodos = JSON.parse(localStorage.getItem("usuarios"));
  let usuario = usuarioTodos.findIndex(usuario => usuario.log == 1);
  let tema = usuarioTodos[usuario].tema;
  if(tema != ""){
    if(tema == "preto"){
        document.getElementById("toggleswitch").checked = true;
    }else{
      document.getElementById("toggleswitch").checked = false;
    }
  darkMode();
  }
}


    /*

function checkDarkMode(){
    modo_negro = localStorage.(codigo louco)
    if(modo_negro == true){
        document.getElementById("toggleswitch").checked = true;
        darkMode();
    }
}
    */


   function logar(){
    // recuperando a lista de usuarios
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    let usuariosGravados = JSON.parse(window.localStorage.getItem("usuarios"));
    if(usuariosGravados != null){
    let usuarioIndex = usuariosGravados.findIndex(usuario => usuario.email === email);
    if(usuarioIndex === -1){
     Swal.fire({
       
       icon: 'error',
       title: 'Email informado está incorreto',
       showConfirmButton: false,
       timer: 1500
     });
    }else{
      if(usuariosGravados[usuarioIndex].senha !== senha){
       Swal.fire({
     
         icon: 'error',
         title: 'Senha informada está incorreta',
         showConfirmButton: false,
         timer: 1500
       }); 
       document.getElementById("senha").value = '';
    }else{
      usuariosGravados[usuarioIndex].log = 1;
      localStorage.removeItem('usuarios');
      window.localStorage.setItem('usuarios',JSON.stringify(usuariosGravados));
       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 3000,
         timerProgressBar: true,
         onOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })
       
       Toast.fire({
         icon: 'success',
         title: `Bem vindo ${usuariosGravados[usuarioIndex].nome}`
       });
       setInterval(function(){
         window.location.href = "home.php";		
       }),1500;
       }
      }
    }else{
      Swal.fire({
      icon: 'error',
      title: 'Usuário não cadastrado!',
      showConfirmButton: false,
      timer: 1500
    });

    }
  }


  function cadUsuario(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let tipo = document.getElementById("tipo").value;
    let endereco = document.getElementById("endereco").value;
    let categoria = document.getElementById("categoria").value;
    let senha = document.getElementById("senha").value;
   
  
    let usuario = {id: Date.now(),nome, email, telefone, tipo, endereco, senha, status:"ativo", saldo:0, tema:"", categoria, log:0};
  
    let usuarioGravado = JSON.parse(window.localStorage.getItem("usuarios"));
    if(usuarioGravado == null){
      window.localStorage.setItem('usuarios', JSON.stringify([]));
      usuarioGravado = JSON.parse(window.localStorage.getItem("usuarios"));
      usuarioGravado.push(usuario);
      window.localStorage.setItem('usuarios', JSON.stringify(usuarioGravado));
      Swal.fire({
        icon: 'success',
        title: 'Usuário cadastrado com sucesso!!!',
        showConfirmButton: false,
      });
      setInterval(function(){
        window.location.href = "index.php";		
      }),1500;
    }else{ 
      let usuarioIndex = usuarioGravado.findIndex(usuario => usuario.email === email);
      if(usuarioIndex !== -1){ 
        Swal.fire({
      
          icon: 'warning',
          title: 'Email já está cadastrado no sistema!',
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        usuarioGravado.push(usuario);
        window.localStorage.setItem('usuarios',JSON.stringify(usuarioGravado)); 

        Swal.fire({
          icon: 'success',
          title: 'Usuário cadastrado com sucesso!!!',
          showConfirmButton: false,
        });
        setInterval(function(){
          window.location.href = "index.php";		
        }),1500;
  
      }  
      
    }
  }

  function saldos(id){
    let categoria = document.getElementById("tipo_transacao").value;
    if(document.getElementById("dinheiro").value == ""){
      Swal.fire({
        icon: 'error',
        title: 'Preencha todos os campos!',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
    let usuarioTodos = JSON.parse(localStorage.getItem("usuarios")),
    usuario = usuarioTodos.findIndex(usuario => usuario.log == 1),
    tipo = usuarioTodos[usuario].tipo,
    saldobd = usuarioTodos[usuario].saldo,
    transacao = document.getElementById("dinheiro").value;
    document.getElementById("tipo").innerHTML = 'Tipo de conta: ' + tipo;
    if(id == "mais"){
      saldobd = saldobd + parseFloat(transacao);
      document.getElementById("saldo").innerHTML = "R$ " + saldobd.toFixed(2);
    }else{
      saldobd = saldobd - parseFloat(transacao);
      document.getElementById("saldo").innerHTML = "R$ " + saldobd.toFixed(2);
    }
    usuarioTodos[usuario].saldo = saldobd;
    localStorage.removeItem('usuarios');
    window.localStorage.setItem('usuarios',JSON.stringify([]));
    window.localStorage.setItem('usuarios',JSON.stringify(usuarioTodos));
    document.getElementById("dinheiro").value = "";
    atualizaGrafico(saldobd);
    transacoes_valor(id,transacao,categoria);
    }
  }

  function transacoes_valor(sinal,valor,categoria){
    if(valor != 0){
      let transacoesGravadas = JSON.parse(window.localStorage.getItem("transacoes"));
      if(transacoesGravadas == null){
        window.localStorage.setItem('transacoes',JSON.stringify([]));
      }
      transacoesGravadas = JSON.parse(window.localStorage.getItem("transacoes"));
      let usuarioGravado = JSON.parse(window.localStorage.getItem("usuarios"));
      let usuarioIndex = usuarioGravado.findIndex(usuario => usuario.log == 1);
      let usuario = usuarioGravado[usuarioIndex].email;
      if(sinal == "mais"){
        let transacoes = {id: Date.now(), valor, usuario, categoria};
        transacoesGravadas = JSON.parse(window.localStorage.getItem("transacoes"));
        transacoesGravadas.push(transacoes);
        window.localStorage.setItem('transacoes',JSON.stringify(transacoesGravadas));
      }else{
        valor = valor * -1;
        let transacoes = {id: Date.now(), valor, usuario, categoria};
        transacoesGravadas = JSON.parse(window.localStorage.getItem("transacoes"));
        transacoesGravadas.push(transacoes);
        window.localStorage.setItem('transacoes',JSON.stringify(transacoesGravadas));
      }
    }
  }

  function atualizaGrafico(saldobd){
    saldototal = saldobd/10;
    if(saldobd>0){
      document.getElementById("imgposi").style = "opacity:1;";
      document.getElementById("imgposi").width = saldototal;
      document.getElementById("imgneg").width = 0;
      document.getElementById("imgneg").style = "opacity:0;";
      document.getElementById("saldo").style = 'color:green;';
    }else if(saldobd<0){
      saldototal = (saldobd*-1)/10;
      document.getElementById("imgneg").style = "opacity:1;";
      document.getElementById("imgposi").width = 0;
      document.getElementById("imgneg").width = saldototal;
      document.getElementById("imgposi").style = "opacity:0;";
      document.getElementById("saldo").style = 'color:red;';
    }else{
      document.getElementById("imgposi").width = 0;
      document.getElementById("imgneg").width = 0;  
      document.getElementById("imgposi").style = "opacity:0;";
      document.getElementById("imgneg").style = "opacity:0;";
      document.getElementById("saldo").style = 'color:default;';
    }
  }

  function listar_transacoes(){
    transacoesGravadas = JSON.parse(window.localStorage.getItem("transacoes"));
    let usuarioGravado = JSON.parse(window.localStorage.getItem("usuarios"));
    let usuarioIndex = usuarioGravado.findIndex(usuario => usuario.log == 1);
    for(i = (transacoesGravadas.length - 1); i > -1; i--){
      if(transacoesGravadas[i].usuario == usuarioGravado[usuarioIndex].email){
        let mes;
        if(((new Date(transacoesGravadas[i].id)).getMonth() + 1) < 10){
          mes = "0"+ ((new Date(transacoesGravadas[i].id)).getMonth() + 1);
        }else{
          mes = ((new Date(transacoesGravadas[i].id)).getMonth() + 1);
        }
        let dia;
        if( (new Date(transacoesGravadas[i].id)).getDate() < 10){
          dia = "0"+  (new Date(transacoesGravadas[i].id)).getDate();
        }else{
          dia =  (new Date(transacoesGravadas[i].id)).getDate();
        }
        let cor = "color:red;";
        if(transacoesGravadas[i].valor > 0){
          cor = "color:green;";
        }
        document.getElementById("lista").innerHTML += "<tr>"+
        "<td style="+ cor +">"+ dia + "/" + mes +"/" +  (new Date(transacoesGravadas[i].id)).getFullYear() +"</td>"+
        "<td style="+ cor +">R$ "+ transacoesGravadas[i].valor +"</td>"+
        "<td style="+ cor +">"+ transacoesGravadas[i].categoria +"</td>"+
        "</tr>";
      }
    }
  }

  function centralizar(){
    let menu_height = document.getElementById("menu").clientHeight,
    tela_height = screen.height,
    centralizar = document.getElementById("centralizar");
    centralizar.style = "margin-top:"+ (tela_height - menu_height - centralizar.clientHeight)*0.31 +";font-size:80px;";
  }

  function changeURL(){
    document.getElementById("img").src = document.getElementById("url").value;
    document.getElementById("url").value = "";
  }

  function perfil(){
    let usuarioGravado = JSON.parse(window.localStorage.getItem("usuarios"));
    let usuarioIndex = usuarioGravado.findIndex(usuario => usuario.log == 1);
    document.getElementById("perfil_nome").innerHTML = "Nome: " + usuarioGravado[usuarioIndex].nome;
    document.getElementById("perfil_email").innerHTML = "Email: " + usuarioGravado[usuarioIndex].email;
    document.getElementById("perfil_endereco").innerHTML = "Endereço: " + usuarioGravado[usuarioIndex].endereco;
    document.getElementById("perfil_telefone").innerHTML = "Telefone: " + usuarioGravado[usuarioIndex].telefone;
    document.getElementById("perfil_tipo").innerHTML = "Tipo: " + usuarioGravado[usuarioIndex].tipo;

  }