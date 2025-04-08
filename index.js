
const CountLabel = document.getElementById("CountLabel");
let count = 0;

MySubmit1.onclick = function(){
    count--;
    CountLabel.textContent = count;
}

MySubmit2.onclick = function(){
    count = 0;
    CountLabel.textContent = count;
}

MySubmit3.onclick = function(){
    count++;
    CountLabel.textContent = count;
}




    
