function checking(){
    var password = document.getElementById("password").value;

    if(password == 'raoul'){
        document.location.href="pages/accueil.html"; /*Localisation par rapport au fichier html et non au fichier js*/ 
    }

    else if (password == 'rick'){
        document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

    /*
    else if (password != 'raoul'){
        document.getElementById('messageError').style.display='flex'
    }*/
}   

function show(){
    var input = document.getElementById('password');
    var eye = document.getElementById('eye');
    
    if(input.type == 'password'){
        input.type='text';
        eye.classList.add('active');
    }
    else{
        input.type='password';
        eye.classList.remove('active');
    }
}