debugger
function darkMode(){
    let x = document.getElementById("toggleswitch").checked;
    if(x == true){
        document.body.style.backgroundColor = "#01000F";
        document.body.style.color = "white";
        /*
        localStorage.modo_negro == x;
        */
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
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
    const usuario = {email};
   
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
      let usuarioLogado = JSON.parse(window.localStorage.getItem("usuarioLogado"));
      if(usuarioLogado == null){
        window.localStorage.setItem('usuarioLogado',JSON.stringify([])); // criar
        usuarioLogado = JSON.parse(window.localStorage.getItem("usuarioLogado"));// atualizar a minha variavel
        usuarioLogado.push(usuario); // adiciona o novo usuario
        window.localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado)); // gravar na memoria o objeto atualizado
      }else{
        usuarioLogado = [""]; // tira o usuario antigo
        usuarioLogado.push(usuario); // adiciona o novo usuario
        window.localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado)); // gravar na memoria o objeto atualizado
      }
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
         window.location.href = "index2.php";		
       }),3000;
         
       }
       
       
      }
    }


  function cadUsuario(){
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
   
  
    const usuario = {id: Date.now(),nome, endereco, telefone, email,senha, status:"ativo", saldo:0};
  
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
          timer: 1500
        });
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
          title: 'Usuário alterado com sucesso!!!',
          showConfirmButton: false,
          timer: 1500
        });
  
      }  
      
    }
  }


  function saldos(x){
    if(document.getElementById("dinheiro").value == ""){
      Swal.fire({
      
        icon: 'error',
        title: 'Campo não preenchido',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
    let usuarioTodos = JSON.parse(localStorage.getItem("usuarios"));
    let usuarioLog = JSON.parse(localStorage.getItem("usuarioLogado"));
    let mail = usuarioLog[1].email;
    let usuario = usuarioTodos.findIndex(usuario => usuario.email == mail);
    let y = usuarioTodos[usuario].saldo;
    if(x == "mais"){
      y = y + parseFloat(document.getElementById("dinheiro").value);
      document.getElementById("saldo").innerHTML = "R$ " + y.toFixed(2);
    }else{
      y = y - parseFloat(document.getElementById("dinheiro").value);
      document.getElementById("saldo").innerHTML = "R$ " + y.toFixed(2);
    }
    usuarioTodos[usuario].saldo = y;
    localStorage.removeItem('usuarios');
    window.localStorage.setItem('usuarios',JSON.stringify([]));
    window.localStorage.setItem('usuarios',JSON.stringify(usuarioTodos));
    document.getElementById("dinheiro").value = "";
    atualizaGrafico(y);
  }
}


  function atualizaGrafico(x){
    z = x/10;
    if(x>0){
      document.getElementById("grafico").innerHTML = '';
      document.getElementById("grafic").innerHTML = '<img src="images/green.jpg" width=" '+ z +' " height="100">';
    }else if(x<0){
      z = (z*-1);
      document.getElementById("grafic").innerHTML = ''; 
      document.getElementById("grafico").innerHTML = '<img src="images/red.jpg" width=" '+ z +' " height="100">';
    }else{
      document.getElementById("grafico").innerHTML = '';
      document.getElementById("grafic").innerHTML = '';      
    }
  }
