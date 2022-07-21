var n_img9 = 6;
var corrente9 = 1;

function succede(){
    corrente9++;
    if(corrente9 > n_img9){
        corrente = 1;
}
for(var i = n_img9; i > 0; i--){
    document.querySelector("#img_slider7 img:nth-child(" + i + ")").style.display = "none";
}
document.querySelector("#img_slider7 img:nth-child(" + corrente9 + ")").style.display = "block";
}
function precede(){
    corrente9--;
    if(corrente9 == 0){
        corrente9 = n_img9;
    }
  
    for(var i = n_img9; i > 0; i--){
        document.querySelector("#img_slider7 img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider7 img:nth-child(" + corrente9 + ")").style.display = "block";
}

setInterval(succede, 3500);

    