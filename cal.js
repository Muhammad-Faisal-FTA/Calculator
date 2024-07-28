// class claculator{
//     constructor(priviousOperandandTxtElement, currentOperandandTxtElement){
//         this.priviousOperandandTxtElement = priviousOperandandTxtElement;
//         this.currentOperandandTxtElement = currentOperandandTxtElement;
//         this.clear();
//     }
//     clear(){
//         this.currentOperand = '';
//         this.priviousOperand = '';
//         this.operation = undefined;
//     }
//     delete(){

//     }
//     appendNumber(number){
//         if (this.currentOperand == null) {
//             this.currentOperand = '';
//         }
//         if(number === '.' && this.currentOperand.includes('.'))return;
//         this.currentOperand = this.currentOperand.toString() + number.toString();



//     }
//     chooseOprator(operator){
//         if(this.currentOperand === '')return;
//         if(this.priviousOperand !== ''){
//             this.compute();
//         }
//         console.log("ASAas");
//         this.operator = operator;
//         this.priviousOperand = this.currentOperand;
//         this.currentOperand = '';

//     }
//     compute(){
//         let compute; 
//         console.log("hhjhjhj");
//         const prv = parseFloat(this.priviousOperand);
//         const curv = parseFloat(this.currentOperand);
//         console.log(typeof(currentOperand));
//         console.log(typeof(this.priviousOperand));
//         if(isNaN(prv) || isNaN(curv)) return;
//         switch(this.operation){
//             case '+':
//                 compute = prv + curv;
//                 break;
//             case '-':
//                 compute = prv - curv;
//                 break;
//             case '*':
//                 compute = prv * curv;
//                 break;
//             case '/':
//                 compute = prv / curv;
//                 break;
//             default:
//                 return;
//         }
//         this.currentOperand = compute;
//         this.operation = undefined;
//         this.priviousOperand = '';


//     }
//     updateDisplay(){
//         this.currentOperandandTxtElement.innerText  = this.currentOperand;
//         this.priviousOperandandTxtElement.innerText  = this.priviousOperand;
//         // this.previousOperandandTxtElement.innerText = this.priviousOperand;
//     }
// }

// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButton = document.querySelectorAll('[data-operation]');
// const equalButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');
// const priviousOperandandTxtElement = document.querySelector('[data-privious-operand]');
// const currentOperandandTxtElement = document.querySelector('[data-current-operand]');

// const claculator1 = new claculator(priviousOperandandTxtElement,currentOperandandTxtElement);

// numberButtons.forEach(button =>{
//     button.addEventListener('click', () =>{
//         claculator1.appendNumber(button.innerText);
//         claculator1.updateDisplay();
        
//     });
// });


// allClearButton.addEventListener('click',()=>{
//     claculator1.clear();
// });

// operationButton.forEach(button =>{
//     button.addEventListener('click', () => {
//         claculator1.chooseOprator(button.innerText);        
//         claculator1.updateDisplay();
//     });
    
        
// });
// equalButton.addEventListener('click', () => {
//     claculator1.compute();        
//     claculator1.updateDisplay();
//     console.log("gytgyytt");
// });


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (this.currentOperand == null) {
            this.currentOperand = '';
        }
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperator(operator) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = this.previousOperand;
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});
