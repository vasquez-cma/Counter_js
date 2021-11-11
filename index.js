let counter = document.getElementById("counter");

let count = 0;


function sumar(){

    count += 1;

    counter.textContent = count;

    if(count > 0){
        counter.style.color = "green";
    }
}

function restar(){
    count -=1

    counter.textContent = count;

    if(count < 0){
        counter.style.color = "red";
    }
}

function reiniciar(){

    count = 0;
    
    counter.textContent = count;

    if(count == 0){
        counter.style.color = "black";
    }
} 



