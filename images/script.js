function logar() {
   var usuario = document.getElementById('usuario').value;
   var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == 'admin') {
        alert('Login efetuado com sucesso!');
        location.href = 'home.html';
    } else {
        alert('Login ou senha incorretos!');
    }

}