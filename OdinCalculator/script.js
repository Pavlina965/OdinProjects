const btnAdd = document.getElementById('plus')
const btnMinus = document.getElementById('minus')
const btnMultiply = document.getElementById('star')
const btnDivide = document.getElementById('divide')
const btnDelete = document.getElementById('delete')
const btnClear = document.getElementById('clear')
const btnEqual = document.getElementById('equals')
const buttons = document.querySelectorAll('.Number,.Operator')
const display = document.getElementById('magic');
let btnNum;
let btnOper;
let num1;
let num2;
let result;
let operator;
let numChosed = false;
let operatorChosed = false;
let isResult = false;
let displayNum = ""
let displayOper = ""

function assignNumber(button) {
    btnNum = parseInt(button.getAttribute('data-num'));
    btnOper = button.getAttribute('data-oper')
    const btnClass = button.className;
    if (numChosed === false && operatorChosed === false && btnClass === 'Number') {
        if (!isResult) {
            displayNum += btnNum
            num1 = parseInt(displayNum)
            //console.log(num1)
            display.textContent = num1
            console.log(isResult + "1")
        }

        //
    }
    if (/*operatorChosed === false &&*/ btnClass === 'Operator') {
        //console.log(btnOper)
        operatorChosed = true;
        operator = btnOper;
        //console.log(btnOper)
        if (num1 != null) {
            numChosed = true;
            displayNum = ''
        }
    }
    if (numChosed && btnClass === 'Number' && !isResult) {
        displayNum += btnNum
        num2 = parseInt(displayNum)
        //console.log(displayNum)
        display.textContent = num2

    }
}

function equals() {
    if (numChosed && operatorChosed && !isResult) {
        switch (operator) {
            case '+':
                result = num1 + num2
                displayNum = result
                console.log(displayNum)
                isResult = true;
                num2='';
                num1=result;
                operatorChosed = false
                display.textContent=displayNum
                break
            case '-':
                result = num1 - num2
                displayNum = result
                console.log(displayNum)
                isResult = true;
                num2='';
                num1=result;
                operatorChosed = false
                display.textContent=displayNum
                break
            case '*':
                result = num1 * num2
                displayNum = result
                console.log(displayNum)
                isResult = true;
                num2='';
                num1=result;
                operatorChosed = false
                display.textContent=displayNum
                break
            case '/':
                result = num1 / num2
                displayNum = result
                console.log(displayNum)
                isResult = true;
                num2='';
                num1=result;
                operatorChosed = false
                display.textContent=displayNum
        }
    } else {
        console.log('NO!')
    }
//if(numChosed && operatorChosed)
//    switch (btnOper) {
//        case '+':
//            displayNum = num1 + num2
//            display.textContent = displayNum
//            break
//        case '-':
//            displayNum = num1 - num2
//            display.textContent = displayNum
//            break
//        case '*':
//            displayNum = num1 * num2
//            display.textContent = displayNum
//            break
//        case '/':
//            displayNum = num1 / num2
//            display.textContent = displayNum
//    }
}

btnEqual.addEventListener('click', () => equals())
buttons.forEach(button => {
    button.addEventListener('click', () => {
        assignNumber(button)
    })
})
/*numbers.forEach(button => {
    button.addEventListener('click', () => {
        const btnClass = button.className;


        if (btnClass === 'Number') {

            btnNum = parseInt(button.getAttribute('data-num'));
            if (operatorChosed === false) {
                numChosed = true;
                num1 += btnNum;
                return display.textContent = num1
            }
            if (operatorChosed === true) {
                num2 += btnNum
            }
        }

        if (btnClass === 'Operator') {
            operatorChosed = true;
            btnOper = button.getAttribute('data-num')
        }
        console.log(numChosed)
        console.log(displayNum)
        display.textContent = displayNum


        //console.log(typeof btnNum)


    })
})*/
