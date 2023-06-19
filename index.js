function display(value){
    document.getElementById('finalResult').value += value;
}

function calculate(){
    var display = document.getElementById('finalResult').value;
    var result = eval(display);
    document.getElementById('finalResult').value = result;
}