var container = document.querySelector(".container");
var bleft = document.querySelector(".bleft");
var bright = document.querySelector(".bright");
var border = document.querySelector(".border-sup");
var btn_home = document.querySelector("#home");
var n_home = document.querySelector(".n_home");

function mode_L(){
if(check_light.checked){

document.body.style.background = "rgb(255, 255, 255)";
container.style.background="rgb(234, 237, 241)";
container.style.borderColor="rgb(216, 222, 228)"
container.style.color="black";
git.style.color="rgb(31, 35, 40)"
bright.style.background="rgb(234, 237, 241)";
bleft.style.background="rgb(234, 237, 241)";
bright.style.color="black";
bleft.style.color="black";
border.style.background ="rgb(234, 237, 241)"
border.style.borderColor = "rgb(216, 222, 228)"
n_home.style.color = "rgb(31, 35, 40)"
btn_home.style.color = "rgb(31, 35, 40)"
}
else{

document.body.style.background = "rgb(13, 17, 23)";
container.style.background="rgb(9, 12, 17)";
container.style.borderColor="rgba(255, 255, 255, 0.192)"
container.style.color="white";
git.style.color="white"
bright.style.background="rgb(9, 12, 17)";
bleft.style.background="rgb(9, 12, 17)";
bright.style.color="white";
bleft.style.color="white";
border.style.background ="rgb(36, 41, 47)"
border.style.borderColor = "rgba(255, 255, 255, 0.192)"
n_home.style.color = "white";
btn_home.style.color = "white";
}

}