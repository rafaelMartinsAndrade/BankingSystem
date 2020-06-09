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
      window.localStorage.setItem('usuarios',JSON.stringify([]));
      usuarioGravado = JSON.parse(window.localStorage.getItem("usuarios"));
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
        window.localStorage.setItem('usuarios', JSON.stringify(usuarioGravado));
        Swal.fire({
          icon: 'success',
          title: 'Usuário cadastrado com sucesso!!!',
          showConfirmButton: false,
        });
        setInterval(function(){
          window.location.href = "index.php";		
        }),1500;
      }
      
    }else{ 
      let usuarioIndex = usuarioGravado.findIndex(usuario => usuario.email === email);
      if(usuarioIndex !== -1){ 
        Swal.fire({
      
          icon: 'warning',
          title: 'Email já está cadastrado no sistema!',
          showConfirmButton: false,
          timer: 1500
        });
      }
      else{
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
    if(document.getElementById("dinheiro").value == ""){
      Swal.fire({
        icon: 'error',
        title: 'Campo não preenchido',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
    let usuarioTodos = JSON.parse(localStorage.getItem("usuarios"));
    let usuario = usuarioTodos.findIndex(usuario => usuario.log == 1);
    let tipo = usuarioTodos[usuario].tipo;
    let saldobd = usuarioTodos[usuario].saldo;
    document.getElementById("tipo").innerHTML = 'Tipo de conta: ' + tipo;
    if(id == "mais"){
      saldobd = saldobd + parseFloat(document.getElementById("dinheiro").value);
      document.getElementById("saldo").innerHTML = "R$ " + saldobd.toFixed(2);
    }else{
      saldobd = saldobd - parseFloat(document.getElementById("dinheiro").value);
      document.getElementById("saldo").innerHTML = "R$ " + saldobd.toFixed(2);
    }
    usuarioTodos[usuario].saldo = saldobd;
    localStorage.removeItem('usuarios');
    window.localStorage.setItem('usuarios',JSON.stringify([]));
    window.localStorage.setItem('usuarios',JSON.stringify(usuarioTodos));
    document.getElementById("dinheiro").value = "";
    atualizaGrafico(saldobd);
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
      saldototal = (saldobd*-1);
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