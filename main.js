function roll(){
    dices=document.getElementsByClassName("dice")
    for(i=0;i<6;i++){
        dices[i].style.display="none";
    }
    n=Math.floor(Math.random()*6);
    dices[n].style.display="block";

}
