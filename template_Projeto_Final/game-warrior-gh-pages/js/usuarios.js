window.onload = function(){
    if(localStorage.getItem("rpglog") !== 'true'){
        window.location.href="index.html";
    }
}

document.getElementById('nomeaventureiro').innerHTML +=' '+localStorage.getItem("rpgusername")+'  ';