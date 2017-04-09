
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
        document.getElementById(Goku1).style.backgroundColor='yellow';
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
    function Check();
}

function Check(){
    alert("hola");
    alert(sh.ball1 +" "+sh.ball2 +" "+sh.ball3 +" "+sh.ball4 +" "+sh.ball5 +" "+sh.ball6 +" "+sh.ball7 );
    j=0;
    for (i=0; i<8; i++){
        var balls="sh.ball"+i;
        if(balls==1){
            j++;
            alert(balls);    
        }
    }
    if(j==7){
        document.getElementById(Goku6).style.backgroundColor='yellow';
    }
}

