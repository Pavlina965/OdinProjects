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

function assemble(button) {
    btnNum = button.getAttribute('data-num');
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
                display.textContent = result
                num1 = result
                num2 = ''
                displayNum = ''
                operatorChosed = false
                numChosed = false
                break
            case '-':
                result = num1 - num2
                console.log(result)
                display.textContent = result
                num1 = result
                num2 = ''
                displayNum = ''
                operatorChosed = false
                numChosed = false
                break
            case '*':
                result = num1 * num2
                console.log(result)
                display.textContent = result
                num1 = result
                num2 = ''
                displayNum = ''
                operatorChosed = false
                numChosed = false
                break
            case '/':
                result = num1 / num2
                console.log(result)
                display.textContent = result
                num1 = result
                num2 = ''
                displayNum = ''
                operatorChosed = false
                numChosed = false
        }
    } else {
        console.log('NO!')
    }
}

function clear() {
    num1 = ''
    num2 = ''
    operator = ''
    displayNum = ''
    display.textContent = '0'
    numChosed = false
    isResult = false
    operatorChosed = false
}

function del() {
    let deletedNum
    displayNum = ''
    if (numChosed) {
        deletedNum = num2.toString();
        deletedNum = deletedNum.toString()
        deletedNum = deletedNum.slice(0, -1)
        num2 = parseInt(deletedNum)
        if (isNaN(num2)){
            display.textContent = 0
        }
        else {
        display.textContent = num2}
    } else{

        deletedNum = num1
        deletedNum = deletedNum.toString()
        deletedNum = deletedNum.slice(0, -1)
        num1 = parseInt(deletedNum)

        if (isNaN(num1)){
            display.textContent = 0
        }
        else {
            display.textContent = num1
        }}
    //console.log(displayNum)
}

btnDelete.addEventListener('click', () => del())
btnClear.addEventListener('click', () => clear())
btnEqual.addEventListener('click', () => equals())
buttons.forEach(button => {
    button.addEventListener('click', () => {
        assemble(button)
    })
})
