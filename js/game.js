var juegoEnCurso =new Array(0,0,0,0,0,0,0);

function begin(){
    if(estaCompleto()==true){
        alert(juegoEnCurso);
    }else{
        var i =0;
        while (i < juegoEnCurso.length){
            var valor=Math.floor(Math.random()*7)+1;
            if(validarSiExiste(valor)==false){
                juegoEnCurso[i]=valor;
                i++;
            }
        }
        alert(juegoEnCurso);
    }
}
function reset(){
    juegoEnCurso=(0,0,0,0,0,0,0);
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
           var completo=false;
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
        var ballPressed="Ball"+seleccion;
        document.getElementById(ballPressed).style.display='none';
        
        var ballToDysplay = "Ball"+seleccion+"_"+juegoEnCurso[seleccion-1];
        document.getElementById(ballToDysplay).style.display='initial';
    }else{
        alert("Presione START para comenzar!");
    }
    check();
}

/*******************************************************************/

/*


    contadorDeClicks=0;
    alert("Elige y encuentra las esferas del dragon en orden");
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


function beginInterno(){   
    result =new Array(0,0,0,0,0,0,0);
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
function choose(x){
    if(visitado[x-1] == 0){
        alert("Entre en visitado");
        var indice= Math.floor(Math.random()*7) + 1;
        var nuevoRegistro=false;
        document.getElementById('loading').style.display='initial';
        do {
            if (result[indice-1]==1){
                indice= Math.floor(Math.random()*7) + 1;
            }else{
                nuevoRegistro=true;
                result[indice-1]=1;
                visitado[x-1]=indice;
                document.getElementById('loading').style.display='none';
                alert(nuevoRegistro);
            }
        }while(nuevoRegistro==false)
        var ballPressed="Ball"+x;
        var ballToDysplay = "Ball"+x+"_"+indice;
        //alert("Bola a borrar: "+ballPressed+" Bola a Mostrar"+ballToDysplay +" Indice de BolaActiva"+indice); 

        document.getElementById(ballPressed).style.display='none';
        document.getElementById(ballToDysplay).style.display='initial';
        
    }else{
        var ballPressed="Ball"+x;
        var ballToDysplay = "Ball"+x+"_"+visitado[x-1];
        alert(ballToDysplay + " Se debio mostrar esa bola");
        //alert("Bola a borrar: "+ballPressed+" Bola a Mostrar"+ballToDysplay +" Indice de BolaActiva"+indice); 

        document.getElementById(ballPressed).style.display='none';
        document.getElementById(ballToDysplay).style.display='initial';
    }
    Check();
}

function Check(){
    contadorDeClicks=contadorDeClicks+1;
    var estadoVector = "";
    for (i in juegoEnCurso){
        estadoVector=estadoVector+result[i];
    }
    switch (contadorDeClicks) {
    case 1:
        if(estadoVector != "1000000"){
            reset();
        }
        break;
    case 2:
        if(estadoVector != "1100000"){
            reset();
        }
        break;
    case 3:
        if(estadoVector != "1110000"){
            reset();
        }
        break;
    case 4:
        if(estadoVector != "1111000"){
            reset();
        }
        break;
    case 5:
        if(estadoVector != "1111100"){
            reset();
        }
        break;
    case 6:
        if(estadoVector != "1111110"){
            reset();
        }
        break;
    case 7:
        if(estadoVector != "1111111"){
            reset();
        }
    default:
        if(contadorDeClicks==7 && estadoVector == "1111111"){
            alert("GANASTE!!!!!!!");
            reset(); 
        }else{
            alert("ERROR :/");
        }
        break;
    }
} 

function cualFue(verctor){
    var a = 0;
    for(i in verctor){
        if(verctor[i] ==1){
            a=parseInt(i)+1;
        }
    }
    return a;
}*/