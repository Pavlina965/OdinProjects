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

function assemble(button) {
    btnNum = parseInt(button.getAttribute('data-num'));
    btnOper = button.getAttribute('data-oper')
    const btnClass = button.className;
    //console.log('chosed numbers '+numChosed,'chosed operator '+operatorChosed,'clicked = '+isResult)
    if (numChosed === false && operatorChosed === false && btnClass === 'Number') {
            displayNum += btnNum
            num1 = parseInt(displayNum)
            display.textContent = num1
        }

    if (btnClass === 'Operator') {
        operatorChosed = true;
        operator = btnOper;
        console.log(operator)
        if (num1 != null) {
            numChosed = true;
            displayNum = ''
        }
    }
    if (numChosed && operatorChosed && btnClass === 'Number') {
        displayNum += btnNum
        num2 = parseInt(displayNum)
        display.textContent = num2

    }
}

function equals() {
    console.log(operator)
    if (operatorChosed) {
        switch (operator) {
            case '+':
                result = num1 + num2
                console.log(result)
                display.textContent =result
                num1 = result
                console.log(num2 + 'num2')
                console.log(displayNum+'displaynum')
                num2=''
                displayNum = ''
                operatorChosed=false
                break
            case '-':
                result = num1 - num2
                console.log(displayNum)
                isResult = true;
                num2 = '';
                num1 = result;
                operatorChosed = false
                display.textContent = displayNum
                break
            case '*':
                result = num1 * num2
                displayNum = result
                console.log(displayNum)
                isResult = true;
                num2 = '';
                num1 = result;
                operatorChosed = false
                display.textContent = displayNum
                break
            case '/':
                result = num1 / num2
                displayNum = result
                console.log(displayNum)
                isResult = true;
                num2 = '';
                num1 = result;
                operatorChosed = false
                display.textContent = displayNum
        }
    } else {
        console.log('NO!')
    }
}
function clear(){
    num1=''
    num2=''
    operator=''
    displayNum=''
    display.textContent='0'
    numChosed=false
    isResult=false
    operatorChosed=false
}
btnEqual.addEventListener('click', () => equals())
buttons.forEach(button => {
    button.addEventListener('click', () => {
        assemble(button)
    })
})
btnClear.addEventListener('click', ()=>clear())
