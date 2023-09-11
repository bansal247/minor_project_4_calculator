let display = document.getElementById('text-area');
let displayInputs = "";

const startDigit = '0'
display.innerHTML = startDigit

function getInput(input) {
    if (display.innerHTML===startDigit){
        display.innerHTML = "";
    }

    if (input == '.' && displayInputs.includes('.')){
        if ( !(displayInputs.includes('+') || displayInputs.includes('-') 
        || displayInputs.includes('/') || displayInputs.includes('x') ))
            {
                return
            }
        
    }

    if (displayInputs.length < 6){
        displayInputs+=input;
        display.innerHTML = displayInputs
        console.log(displayInputs)
    }
    
}

function deleteDigit() {
    displayInputs = displayInputs.substring(0,displayInputs.length - 1);
    display.innerHTML = displayInputs;

    if (displayInputs.length==0){
        display.innerHTML = startDigit
    }
}

function reset(){
    display.innerHTML = startDigit;
    displayInputs = "";
}

function calculate(){
    let result = 0;
    let arr = displayInputs.split(/([+\-x\/])/);
    // console.log(arr,display.innerHTML)

    let len = arr.length;
    let temp_result = NaN;
    while (len > 2){
        if (arr[0]==='' || arr[1]==='' || arr[2]===''){
            result = 'Error'
            displayInputs = ""
            display.innerHTML = "Error"
            return
        }
        const first_digit = parseFloat(arr[0])
        const second_digit = parseFloat(arr[2])
        const operator = arr[1]
        
        

        if (operator=='+'){
            temp_result = first_digit+second_digit;
        }
        else if (operator=='-'){
            temp_result = first_digit-second_digit;
        }
        else if (operator=='/'){
            temp_result = first_digit/second_digit;
        }
        else if (operator=='x'){
            temp_result = first_digit*second_digit;
        }

        arr = arr.slice(3,);
        arr.unshift(temp_result)
        len = arr.length;
        console.log(temp_result,arr)
        
    }

    if (temp_result!=NaN){
        result = String(temp_result.toPrecision(6));
    }
    displayInputs = ""
    display.innerHTML = result.slice(0,6);
}