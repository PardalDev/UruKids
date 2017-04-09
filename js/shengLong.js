
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
    j=0;
    if(sh.ball1==1 && sh.ball2==1 && sh.ball3==1 && sh.ball4==1 && sh.ball5==1 && sh.ball6==1 && sh.ball7==1){
        document.getElementById('Bienvenida').style.display='none';
        document.getElementById('Oculto').style.display='initial';

    }
}

