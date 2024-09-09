score=0;
document.getElementById("submit").onclick=function(){
    if (document.getElementById("c1").checked){
        score++;
    }
    if (document.getElementById("c2").checked){
        score++;
    }
    if (document.getElementById("c3").checked){
        score++;
    }
    if (document.getElementById("c4").checked){
        score++;
    }
    if (document.getElementById("c5").checked){
        score++;
    }
    if (document.getElementById("c6").checked){
        score++;
    }
    if (document.getElementById("c7").checked){
        score++;
    }
    if (document.getElementById("c8").checked){
        score++;
    }
    if (document.getElementById("c9").checked){
        score++;
    }
    if (document.getElementById("c10").checked){
        score++;
    }
    window.alert(`You scored ${score}/10 !`);
    score=0;
}