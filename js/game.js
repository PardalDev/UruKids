
function Game(){
        var ball1=0;
        var ball2=0;
        var ball3=0;
        var ball4=0;
        var ball5=0;
        var ball6=0;
        var ball7=0;
}
var result = new Game();

function begin(){
    result=new Game();    
    alert("Elige y encuentra las esperas del dragon en orden");
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

function choose(cell){
    var indice= Math.floor(Math.random()*7) + 1;
    alert(indice +" entro "+ result.ball1+" "+ result.ball2+" "+ result.ball3+" "+ result.ball4+" "+ result.ball5+" "+ result.ball6+" "+ result.ball7);

    

    var choosed = cell+"_"+indice;
    document.getElementById(cell).style.display='none';
    document.getElementById(choosed).style.display='initial';
}
function Check(){
    if(result.ball1==1 && result.ball2==1 && result.ball3==1 && result.ball4==1 && result.ball5==1 && result.ball6==1 && result.ball7==1){
        alert("completo");
    }
}