var n_img0 = 5;
var corrente0 = 1;

function succ(){
    corrente0++;
    if(corrente0 > n_img0){
        corrente0 = 1;
}
for(var i = n_img0; i > 0; i--){
    document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
}
document.querySelector("#img_slider img:nth-child(" + corrente0 + ")").style.display = "block";
}
function prec(){
    corrente0--;
    if(corrente0 == 0){
        corrente0 = n_img0;
    }
  
    for(var i = n_img0; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente0 + ")").style.display = "block";
}

setInterval(succ, 3500);

    
