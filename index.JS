const line2=document.getElementsByClassName("firstLine")[0];
const numLine=document.getElementsByClassName("secondLine")[0];

const calculation = document.querySelector("#result");
const action = document.querySelectorAll("#action");
const numbers =document.querySelectorAll("#numb");
const dot = document.querySelector("#dot");
const display = document.querySelector(".display");
const DEG = document.querySelector("#DEG");
const Cleen_btn = document.querySelector("#delete");
const Delete = document.querySelector("#cleer");

let currentAction = "";
let currentNumber = "";
let firstNumber;
let dotExist = false;

Delete.addEventListener("click", (e)=>{Delet_symbol(e)});
Cleen_btn.addEventListener("click", (e)=>{Cleer_function(e)});
action.forEach(i=> i.addEventListener("click", (e)=>{IRQ_Action(e)}));
dot.addEventListener("click", (e)=>{Dot_IRQ()});
numbers.forEach(i=> i.addEventListener("click", (e)=>{getNumber(e), line2.innerHTML="";}));
calculation.addEventListener("click", (e)=>{MachFunction(e)});




function Delet_symbol(){
    numLine.innerHTML =  numLine.innerHTML.toString().slice(0, -1);
};


function Cleer_function(){
currentAction = "";
    currentNumber = "";
    firstNumber = "";
    numLine.innerHTML="";
    dotExist=false;
    line2.innerHTML="";
}


function IRQ_Action(e){
 if (currentAction=="") 
    {
        if (e.target.innerText=="-") 
        {
            if (currentNumber=="") 
            {
                currentNumber="-";
                numLine.innerHTML="-";
                dotExist=false;
                line2.innerHTML="";

                return;
            }    

                    else{ 
                   numLine.innerHTML=numLine.innerHTML+e.target.innerHTML;
                    currentAction=e.target.innerText;
                    firstNumber=currentNumber;
                    currentNumber="0";
                    dotExist=false; 
                    line2.innerHTML="";
                    return;
                }
        }
        if (currentNumber=="") {
            err();
            return;
        }
        else{      
            numLine.innerHTML=numLine.innerHTML+e.target.innerHTML;
            currentAction=e.target.innerText;
            firstNumber=currentNumber;
            currentNumber="0"; 
            dotExist=false;
            line2.innerHTML="";
        }
 
    }
    else{
        err();
    }
}

function Dot_IRQ(){
    if (currentNumber=="") {
        currentNumber+="0.";
        numLine.innerHTML+="0.";
        dotExist=true;
        line2.innerHTML="";
    }
    else if (!dotExist&&Number.isInteger(Number(currentNumber))) {
        currentNumber+=".";
        numLine.innerHTML+=".";
        dotExist=true;
        line2.innerHTML="";
    } else {
        err();
    }
}

function getNumber(arg){
    if (arg == "get") {
        return(currentNumber);
    }

    currentNumber=currentNumber+arg.target.innerHTML;
    numLine.innerHTML=numLine.innerHTML+arg.target.innerHTML;
};

function MachFunction(){
    if (firstNumber !== "" && currentNumber !== "0") {

        firstNumber = parseFloat(firstNumber);
        currentNumber = parseFloat(currentNumber);
        line2.innerHTML=numLine.innerHTML+"=";
        var strFirstNumber = firstNumber + '';
        strCurrentNumber = currentNumber + '';
        dpFirstNumber = (firstNumber % 1) ? (strFirstNumber.length - strFirstNumber.indexOf('.') - 1) : 0;
        dpCurrentNumber = (currentNumber % 1) ? (strCurrentNumber.length - strCurrentNumber.indexOf('.') - 1) : 0;
        multiplier = Math.pow(10, dpFirstNumber > dpCurrentNumber ? dpFirstNumber : dpCurrentNumber); 
        tempFirstNumber = Math.round(firstNumber * multiplier);
        tempCurrentNumber = Math.round(currentNumber * multiplier); 

    switch (currentAction) {
        case "+": numLine.innerHTML=(tempFirstNumber+tempCurrentNumber)/multiplier; break;
        case "-": numLine.innerHTML=(tempFirstNumber-tempCurrentNumber)/multiplier; break;
        case "/":numLine.innerHTML=(tempFirstNumber/tempCurrentNumber);  break;
        case "*":numLine.innerHTML=(tempFirstNumber*tempCurrentNumber)/(multiplier*multiplier); break;
        case "%":numLine.innerHTML=(tempFirstNumber*tempCurrentNumber)/100; break;
        case "^":numLine.innerHTML=(Math.pow(firstNumber, currentNumber)); break;
    }
    
    currentNumber=numLine.innerHTML;
    currentAction = "";
} else{err();}
 
};

function err(){
 alert("Error");
 Cleen_function();
}

function Outpu(value){
    numLine.innerHTML=value;
}