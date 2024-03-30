var NumCliques = 0;
var BtnClick = document.getElementById("BtnContagem");

BtnClick.addEventListener("click", function(){
    NumCliques+=1;
    document.getElementById("NumCliques").innerHTML= "Número de cliques: " +  NumCliques;  
})
