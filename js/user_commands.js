
function Usuario(user, password, age, character1, character2){
        this.user=user;
        this.password=password;
        this.age=age;
        this.character1=character1;
        this.character2=character2;
}
var userObjectPublic = new Usuario();

function registro(){
    /*Validar que sea solo texto*/
    const regex = /\d/g;
    /*Validar que sea solo numeros*/
    const regex2 = /\D/g;
    var u = prompt("No estas registrado, por favor registra tu nombre de usuario: " ); 

    while (u=="" || u.length < 4 || regex.exec(u)!==null ){
        var u = prompt("Por favor ingresa un nombre valido, este debe contener unicamente letras. Recuerda ingresar al menos 4 digitos" );
    }

    var p = prompt("Ingresa tu PIN de 4 digitos: " );
    
    while (p=="" || p.length !== 4  || regex2.exec(p)!==null ){
        var p = prompt("Tu PIN debe tener exactamente 4 digitos y las letras no son admitidas. Ingresa nuevamente:" );
    }

    var a = prompt("Confirma que eres mayor de 18 a\u00F1os ingresando tu edad a continuacion: " );
    while (a=="" || regex2.exec(a)!==null || a < 18){
            var a = prompt("Debes ser mayor de 18. Tu edad no debe contener caracteres, unicamente ingresa el numero correspondiente a tu edad: " );
    }

    var c1 = prompt("Elige uno de los siguientes personajes: 1- Goku, 2-Serena: " );
    while (c1=="" || c1 > 2 || c1 < 1 || regex2.exec(c1)!==null ){
        var c1 = prompt("Debes elegir una de las dos opciones siguientes: 1- Goku, 2-Sailor Moon " );
    }
    
    if (c1==1){
        var c2 = prompt("Elige el 2do personaje: 1-Oliver, 2-Homero, 3-Pedro " );
        while (c2=="" || c2 > 3 || c2 < 1 || regex2.exec(c2)!==null ){
            var c2 = prompt("Debes elegir una de las opciones siguientes: 1-Oliver, 2-Homero, 3-Pedro " );
        }
    }else{
        var c2 = prompt("Elige el 2do personaje: 1-Ranma, 2-Ash, 3-BugsBunny" );
        while (c2=="" || c2 > 3 || c2 < 1 || regex2.exec(c2)!==null ){
            var c2 = prompt("Debes elegir una de las opciones siguientes: 1-Ranma, 2-Ash, 3-BugsBunny " );
        }
    }
    
    var userObject = new Usuario(u, p, a, c1, c2);
    userObjectPublic = userObject;
    
    alert("Gracias por registrarte, tu usuario es: "+ userObject.user + "\n Tu PIN para loguear en la pagina es: " +userObject.password  );

}
function logIN(){
    var u = prompt("Ingresa tu usuario: " ); 
    var p = prompt("Ingresa tu PIN: " );
    if (u == userObjectPublic.user ){
        if (p == userObjectPublic.password){
            document.getElementById('StatusUser').innerHTML="<span style='background-color: green'>  Loged in </span>";
            var uo= "<span style='background-color: green'>"+ userObjectPublic.user +"</span>";
            document.getElementById('ActiveUser').innerHTML=uo;

            if(userObjectPublic.character1==1){
                document.getElementById("Goku").style.backgroundColor='yellow';
                var Char1 = new Array("Goku","Oliver","Homero","Pedro");
                document.getElementById(Char1[userObjectPublic.character2]).style.backgroundColor='yellow';
            }else{
                document.getElementById("Serena").style.backgroundColor='yellow';
                var Char2 = new Array("Serena","Ranma","Ash","BugsBunny");
                alert(Char2[userObjectPublic.character2]);
                document.getElementById(Char2[userObjectPublic.character2]).style.backgroundColor='yellow';
            }
        }else{
            var p = prompt("PIN Incorrecto." );
        }
    }else{
        prompt("Usuario incorrecto." );
    }
}
function logOUT(){
    document.getElementById('StatusUser').innerHTML="<span style='background-color: white'></span>";
    var uo= "\"<span style='background-color: white'></span>\"";
    document.getElementById('ActiveUser').innerHTML=uo;
    var Char1 = new Array("Goku","Oliver","Homero","Pedro","Serena","Ranma","Ash","BugsBunny");
    for(i in Char1){
        document.getElementById(Char1[i]).style.backgroundColor='black';
    } 
}