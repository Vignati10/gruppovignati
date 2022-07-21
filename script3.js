var n_img5 = 5;
var corrente3 = 1;

function succ4(){
    corrente3++;
    if(corrente3 > n_img5){
        corrente3 = 1;
    }
  
    for(var i = n_img5; i > 0; i--){
        document.querySelector("#img_slider3 img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider3 img:nth-child(" + corrente3 + ")").style.display = "block";
}

function prec4(){
    corrente3--;
    if(corrente3 == 0){
        corrente3 = n_img5;
    }
  
    for(var i = n_img5; i > 0; i--){
        document.querySelector("#img_slider3 img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider3 img:nth-child(" + corrente3 + ")").style.display = "block";
}

setInterval(succ4, 3500);
