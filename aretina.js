var n_img = 12;
var corrente = 1;

function successiva(){
    corrente++;
    if(corrente > n_img){
        corrente = 1;
}
for(var i = n_img; i > 0; i--){
    document.querySelector("#img_sliderV img:nth-child(" + i + ")").style.display = "none";
}
document.querySelector("#img_sliderV img:nth-child(" + corrente + ")").style.display = "block";
}
function precedente(){
    corrente--;
    if(corrente == 0){
        corrente = n_img;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_sliderV img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_sliderV img:nth-child(" + corrente + ")").style.display = "block";
}

setInterval(successiva, 3500);

    