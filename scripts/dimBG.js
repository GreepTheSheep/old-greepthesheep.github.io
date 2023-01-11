var fg = document.getElementById("fgSection"),
    mousemoveSince = new Date();

fg.style.opacity = "1";

fg.addEventListener('mousemove', ()=>{
    mousemoveSince = new Date();
})

setInterval(()=>{
    if(new Date() - mousemoveSince > 10000){
        if (Number(fg.style.opacity) > 0){ 
            fg.style.opacity = String(Number(fg.style.opacity)-0.025);
        }
    } else {
        if (Number(fg.style.opacity) < 1){
            fg.style.opacity = String(Number(fg.style.opacity)+0.05);
        }
    }
}, 0);