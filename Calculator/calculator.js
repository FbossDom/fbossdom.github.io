let result;
var lastInputSign = false;
let textInput = "";

function start(){
    result = document.getElementById("result");
    equation = document.getElementById("equation");
}

function input(input){
    if(["1","2","3","4","5","6","7","8","9"].includes(input)){
        textInput += input;
        lastInputSign = false;
    }
    
    if(input == "+" || input == "-" || input == "*" || input == "/"){
        if(lastInputSign){
            var string = textInput.replace(/.$/, input)
            textInput = string;
            lastInputSign = true;
        }else{
            textInput += input;
            lastInputSign = true;
        }
    }

    if(input == "."){
        var signCounter = 0;
        for (let i = 0; i < textInput.length; i++) {
            if(["+", "-", "*", "/"].includes(textInput[i]))signCounter++
        }
        var lastSignPos = 0;
        var signCounter2 = 0;
        for (let i = 0; i < textInput.length; i++) {
            if(["+", "-", "*", "/"].includes(textInput[i]))signCounter2++
            if(signCounter2 == signCounter && signCounter2 != 0){
                lastSignPos = i;
                break
            }
        }
        var dotCounter = 0;
        for (let i = lastSignPos; i < textInput.length; i++) {
            if(textInput[i] == ".")dotCounter++
        }
        if(dotCounter == 0){
            if(["1","2","3","4","5","6","7","8","9","0"].includes(textInput[textInput.length - 1])){
                textInput += ".";
                lastInputSign = false;
            }
        }
    }
    if(input == "0"){
       if(["1","2","3","4","5","6","7","8","9",".","0"].includes(textInput[textInput.length - 1])){
            textInput += input;
            lastInputSign = false;
        }else if(textInput.length == 0 || ["+", "-", "*", "/"].includes(textInput[textInput.length - 1])){
            textInput += "0.";
            lastInputSign = false;
        }
    }
    equation.innerHTML = textInput;
}
function getResult(){
    result.innerHTML = eval(equation.innerHTML).toString();
}

function clear(){
    textInput = "";
    lastInputSign = false;
    result.innerHTML = "";
    equation.innerHTML = "";
}
function deleteLast(){
    //var modedText = textInput.substring(0, textInput.length - 1);
    var shorter = equation.innerHTML.slice(0,-1)
    equation.innerHTML = shorter
    textInput = equation.innerHTML
}

/////keys

document.addEventListener('keydown', keyPress)

function keyPress(key){
    console.log(key.key);
    input(key.key);
    if(key.key == "Enter")getResult();
    if(key.key == "Escape")clear();
    if(key.key == "Backspace")deleteLast();
}

