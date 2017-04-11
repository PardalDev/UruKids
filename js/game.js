var juegoEnCurso =new Array(0,0,0,0,0,0,0);
var contadorDeClicks=0;

function begin(){
    if(estaCompleto()==true){
        alert("Juego en curso. Terminalo para poder volver a comenzar!");
    }else{
        var i =0;
        while (i < juegoEnCurso.length){
            var valor=Math.floor(Math.random()*7)+1;
            if(validarSiExiste(valor)==false){
                juegoEnCurso[i]=valor;
                i++;
            }
        }
        alert("El Juego ha comenzado!!, Encuentra las esferas del Dragon en orden");
    }
}
function reset(){
    contadorDeClicks=0;
    document.getElementById('Ball1').style.display='initial';
    document.getElementById('Ball2').style.display='initial';
    document.getElementById('Ball3').style.display='initial';
    document.getElementById('Ball4').style.display='initial';
    document.getElementById('Ball5').style.display='initial';
    document.getElementById('Ball6').style.display='initial';
    document.getElementById('Ball7').style.display='initial';

    for (i=1;i<8;i++){
        var initial = "Ball1_"+i;
        var initial2 = "Ball2_"+i;
        var initial3 = "Ball3_"+i;
        var initial4 = "Ball4_"+i;
        var initial5 = "Ball5_"+i;
        var initial6 = "Ball6_"+i;
        var initial7 = "Ball7_"+i;
        document.getElementById(initial).style.display='none';
        document.getElementById(initial2).style.display='none';
        document.getElementById(initial3).style.display='none';
        document.getElementById(initial4).style.display='none';
        document.getElementById(initial5).style.display='none';
        document.getElementById(initial6).style.display='none';
        document.getElementById(initial7).style.display='none';
    }
}
function estaCompleto(){
    var completo=true;
    for(j in juegoEnCurso){
        if(juegoEnCurso[j]==0){
           completo=false;
        }
    }
    return completo;
}
function  validarSiExiste(x){
    for(j in juegoEnCurso){
        if(juegoEnCurso[j]==x){
            return true;
        }
    }
    return false;
} 
function choose(seleccion){
    if(estaCompleto()==true){
        contadorDeClicks=contadorDeClicks+1;
        var ballPressed="Ball"+seleccion;
        document.getElementById(ballPressed).style.display='none';
        
        var ballToDysplay = "Ball"+seleccion+"_"+juegoEnCurso[seleccion-1];
        document.getElementById(ballToDysplay).style.display='initial';
        var pos = seleccion-1;
        check(pos);
    }else{
        alert("Presione START para comenzar!");
    }
}
function vectorToString(vector){
    var linea="";
    for (i in vector){
        linea=linea+vector[i];
    }
    alert (linea);
    return linea;
}
function check(posicion){
    if(juegoEnCurso[posicion] == contadorDeClicks){
        if(contadorDeClicks==7){
            alert("GANASTE");
            reset();
            juegoEnCurso =new Array(0,0,0,0,0,0,0);
            document.getElementById('container').style.display='none';
            document.getElementById('VideoDiv').style.display='initial';
            var Video = document.getElementById('drag');
            Video.setAttribute("src", 'https://www.youtube.com/embed/kTnV6p5X2ac?rel=0&autoplay=1');
        }
    }else{
        alert("FALLASTE!!");
        reset();
    }
}
