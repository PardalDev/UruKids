
function ShengLong(){
        var ball1=0;
        var ball1=0;
        var ball1=0;
        var ball1=0;
        var ball1=0;
        var ball1=0;
        var ball1=0;
}
var sh = new ShengLong();

function setMark(ballNumber){
    switch(ballNumber) {
    case 1:
        sh.ball1=1;
        break;
    case 2:
         sh.ball2=1;
        break;
    case 3:
         sh.ball3=1;
        break;
    case 4:
         sh.ball4=1;
        break;
    case 5:
         sh.ball5=1;
        break;
    case 6:
         sh.ball6=1;
        break;
    case 7:
         sh.ball7=1;
        break;
    default:
        alert("ERROR");
    }
}
function Check(){
    /*alert(sh.ball1 +" "+sh.ball2 +" "+sh.ball3 +" "+sh.ball4 +" "+sh.ball5 +" "+sh.ball6 +" "+sh.ball7 );*/
    j=0;
    if(sh.ball1==1 && sh.ball2==1 && sh.ball3==1 && sh.ball4==1 && sh.ball5==1 && sh.ball6==1 && sh.ball7==1){
        /*document.getElementById('Dragon').style.display='initial';
        document.getElementById('DragonDesc').style.display='none';
        document.getElementById('Personaje1').style.display='none';
        document.getElementById('Personaje2').style.display='none';
        document.getElementById('Personaje3').style.display='none';
        document.getElementById('Personaje4').style.display='none';
        document.getElementById('Personaje5').style.display='none';
        document.getElementById('Personaje6').style.display='none';
        document.getElementById('Personaje7').style.display='none';
        document.getElementById('Personaje8').style.display='none';
        document.getElementById('Fire').style.display='initial';
        document.getElementById('VideoTitle').style.display='none';*/
        document.getElementById('Bienvenida').style.display='none';
        document.getElementById('Oculto').style.display='initial';
        /*document.getElementById('Video2').style.display='none';
        document.getElementById('Video3').style.display='none';
        document.getElementById('Video4').style.display='none';
        document.getElementById('Bienvenida').style.backgroundColor='black';
        document.getElementById('characterSelection').style.display='none';
        document.getElementById('container').style.backgroundColor='black';
        document.getElementsByClassName('DragonBody').style.backgroundColor='black';
        document.getElementById('slide').style.display='none';
        document.getElementById('menu').style.display='none';
        document.getElementById('footerDragon').style.display='none';*/
    }
}

