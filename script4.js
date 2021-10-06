function upperCase(){
    var elemento = document.getElementsByTagName("p");
    document.getElementById("fourth").innerHTML = elemento[0].innerHTML.toUpperCase();
    document.getElementById("fifth").innerHTML = elemento[1].innerHTML.toUpperCase();
    
    /*var elemento1 = document.getElementById("second"); 
    var elemento2 = document.getElementById("third"); 
    var elemento3 = document.getElementById("fourth");*/
   
   // elemento.innerHTML = fifth.value.toUpperCase();
    /*elemento1.innerHTML = fifth.value.toUpperCase();
    elemento2.innerHTML = fifth.value.toUpperCase();
    elemento3.innerHTML = fifth.value.toUpperCase();*/
}