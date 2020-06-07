let buffer = "0";

const screen = document.querySelector(".screen");

let runningTotal = 0;


// adding event for listening button clicks


document.querySelector(".calc-buttons").addEventListener("click", function(event){
    console.log(event.target.innerText);
    buttonClick(event.target.innerText);
});

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value){
    if(buffer === "0"){
        buffer = value;

    }
    else{
        buffer+= value;
    }
 
}

function handleSymbol(value){
    switch(value){
        case "C":
            buffer = "0";
            runningTotal = 0;
            previousOperator = null;
            break;
        
        case "←":
            if(buffer.length ===1){
                buffer = "0";

            } 
            else {
                buffer = buffer.substring(0, buffer.length-1);
                break;
            }
        
        case "=":
            if(previousOperator===null)
            {
                return;
            }
            flushOperation(parseInt(buffer)) ;
            previousOperator = null;
            buffer = "" + runingTotal;
            runningTotal = 0;
            break;

        default:
            handleMath(value);
            break;
    
    }
}
    function handleMath(value){
        const intBuffer = parseInt(buffer);
        if (runningTotal === 0){
            runningTotal = intBuffer;

        }
        else 
        {
            flushOperation(intBuffer);

        }
        previousOperator = value;
        buffer="0";
    }

function flushOperation(intBuffer){
    if(previousOperator === "+"){
        runningTotal+= intBuffer;

    }
    else if (previousOperator === "-")
    {
        runningTotal-= intBuffer;

    }
    else if( previousOperator === "×"){
        runningTotal*= intBuffer;
    }
    else{
        runningTotal /= intBuffer;
    } 
    
}


function rerender(){
    screen.innerText =buffer ;
}