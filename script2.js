var n_img1 = 11;
var corrente2 = 1;

function succ2(){
    corrente2++;
    if(corrente2 > n_img1){
        corrente2 = 1;
}
for(var i = n_img1; i > 0; i--){
    document.querySelector("#img_slider2 img:nth-child(" + i + ")").style.display = "none";
}
document.querySelector("#img_slider2 img:nth-child(" + corrente2 + ")").style.display = "block";
}
function prec1(){
    corrente2--;
    if(corrente2 == 0){
        corrente2 = n_img1;
    }
  
    for(var i = n_img1; i > 0; i--){
        document.querySelector("#img_slider2 img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider2 img:nth-child(" + corrente2 + ")").style.display = "block";
}

setInterval(succ2, 3500);
