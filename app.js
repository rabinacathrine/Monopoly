

var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];


const player1_Button=document.getElementById('player-1');
const player2_Button=document.getElementById('player-2');
console.log(board.length);
console.log(player1_Button);
console.log(player2_Button);
 player1_Button.addEventListener('click',rollDice_1);
 player1_Button.addEventListener('click',rollDice_2);
 

 var player1=["prograd",0,1000];
 var player2=["faceprep",0,1000];

 function rollDice_1(){
     let position=Math.floor(Math.random()*6)+1;
          //changeposition_1(player[1],position);
  console.log("player one rolls",position);
     changeposition_1(player1[1],position);
 }
var count=0;
 function changeposition_1(old,currentpos){
     count++;
     var newpPosition=old+currentpos;
     player1[1]=newpPosition;
     console.log(player1[1]);
     updateMoney_1(player1[1]);
 }

 function updateMoney_1(p1){
     var updateMoney=0;
     if(p1<board.length)
     updateMoney=player1[2]-board[p1-1];
     else{
         p1=p1%15;
        updateMoney=player1[2]-board[p1-1];
     }
     console.log(updateMoney);
 }
   
 
 //  PLAYER 2
    function rollDice_2(){
        let position=Math.floor(Math.random()*6)+1;
             //changeposition_1(player[1],position);
     console.log("player two rolls",position);
        changeposition_1(player2[1],position);
    }
   
    function changeposition_2(old,currentpos){
        var newpPosition=old+currentpos;
        player2[1]=newpPosition;
        console.log(player2[1]);
        updateMoney_1(player2[1]);
    }
   
    function updateMoney_2(p2){
        var updateMoney=0;
        if(p2<board.length)
        updateMoney=player2[2]-board[p2-1];
        else{
            p2=p2%15;
           updateMoney=player2[2]-board[p2-1];
        }
        console.log(updateMoney);
    }