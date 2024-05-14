

function display(val){
    document.getElementById('textarea').value+=val; //concated
}

function calculate(){
    var value = document.getElementById('textarea').value;
    var answer = eval(value);//evaluate the string as math expression but is a security risk
    document.getElementById('textarea').value=answer; //replace the inputs with ans
}
function clr(){
    document.getElementById('textarea').value=''; //empty string
}

