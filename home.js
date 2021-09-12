var mybtn=document.getElementById("btnCont");
mybtn.addEventListener("click",goTonext);

function goTonext(){
    window.location.href="#contact";
}

var idtime=new Date();
document.getElementById("mytime").innerHTML=idtime.getFullYear();