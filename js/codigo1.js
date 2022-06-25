const btn = document.querySelector("#boton");
const video = document.querySelector("#video");
const container = document.querySelector("#container-video");
const header = document.querySelector("#header");
const img_play = document.querySelector("#imagen-play");
const img_return = document.querySelector("#imagen-return");
let inicio = 1;
function intercambio(){
    if( inicio == 1 ){
        inicio = 2;
    }else{
        inicio = 1;
    }
}
function ejecucion (){
    if(inicio == 1){
        
        video.style.display = "inline-block";
        container.style.display = "block";
        btn.style.position ="fixed";
        btn.style.top="71px";
        img_play.style.display = "none";
        img_return.style.display = "inline-block";
    }else{
        video.style.display = "none";
        container.style.display = "none";
        btn.style.position ="";
        btn.style.top="";
        header.style.display="";
        img_play.style.display="inline-block";
        img_return.style.display = "none";
        
    }
}
btn.addEventListener('click', function(){
    ejecucion();
    intercambio();
})
