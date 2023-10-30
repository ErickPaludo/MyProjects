var check_light = document.getElementById('chk');
var contador = 0;
const git = document.querySelector(".git");
var cnt = document.querySelector(".contador");
var nome = document.querySelector(".name");
var ling = document.querySelector(".linguagem");
var veja = document.querySelector(".veja");
git.style.cursor = "pointer";

git.addEventListener("click",function(){
    if(contador === 0){
        window.open("https://github.com/ErickPaludo", "_blank");
     }
    if(contador === 1){
       window.open("https://github.com/ErickPaludo/PLD.VANILLA", "_blank");
    }
    else if(contador === 2){
        window.open("https://github.com/ErickPaludo/BestFuel-Mobile", "_blank");
    }
    else if(contador === 3){
        window.open("https://github.com/ErickPaludo/Best_Fuel_Html", "_blank");
    }
    else{
        window.open("https://github.com/ErickPaludo/Game_PPD", "_blank");
    }
})
veja.addEventListener("click",function(){
    if(contador === 3){
        window.open("https://bestfuel.netlify.app", "_blank");
    }
    else if(contador === 4){
        window.open("https://pedrapapeltesourapld.netlify.app", "_blank");
    }

})
function cleft(){
 
    if(contador > 1){
        contador--;
    }else{
        contador=4;
    }
    ver();
}
function cright(){
    if(contador < 4){
        contador++;
    }
    else{
        contador = 1;
    }
    ver();
}

function ver(){
    if(contador === 1){
        nome.innerHTML = "Vanilla STQ";
        cnt.innerHTML = "1/4";
        ling.innerHTML = "Linguagem: C# Forms"; 
      
        document.getElementById("imagem").src = "img/Vanilla.png"
        veja.innerHTML="";
    }
    else if(contador === 2){
        nome.innerHTML = "Best Fuel Mobile"
        cnt.innerHTML = "2/4"
        ling.innerHTML = "Linguagem: C# Xamarim"; 
        document.getElementById("imagem").src = "img/Vanilla2.png";
        veja.innerHTML="";
    }
    else if(contador === 3){
        nome.innerHTML = "Best Fuel Oficial"
        cnt.innerHTML = "3/4"
        ling.innerHTML = "Linguagem: JavaScript"; 
        document.getElementById("imagem").src = "img/bsthtml.png";
        veja.innerHTML = "Entre no Projeto!";
    }
    else if(contador === 4){
        nome.innerHTML = "Pedra / Papel / Tesoura"
        cnt.innerHTML = "4/4"
        ling.innerHTML = "Linguagem: JavaScript"; 
        document.getElementById("imagem").src = "img/ppd.png";
        veja.innerHTML = "Entre no Projeto!";
    }
}     
