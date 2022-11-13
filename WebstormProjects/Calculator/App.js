'use strict'





// const display = document.querySelector('.calculator-screen')
// const keys = document.querySelector('.calculator-keys')
//
//
// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null,
// }
// console.log(calculator)
//
// const updateDisplay = () => {
//   display.value = calculator.displayValue
// }
//
// keys.addEventListener('click', (e) => {
//     const clickedKey = e.target;
//
//     if (!clickedKey.matches('button')) return;
//
//     if (clickedKey.classList.contains('operator')){
//         handleOperator(clickedKey.value)
//         updateDisplay();
//         return;
//     }
//
//     if (clickedKey.classList.contains('decimal-function')){
//         inputDecimal(clickedKey.value);
//         updateDisplay();
//         return
//     }
//
//
//     if (clickedKey.classList.contains('all-clear')){
//         console.log('clear', clickedKey.value);
//         return;
//     }
//     inputDigit(clickedKey.value)
//     updateDisplay()
// })
//
// const inputDigit = (digit) => {
//   const {displayValue,waitingForSecondOperand} = calculator;
//
//   if (waitingForSecondOperand === true) {
//       calculator.displayValue = digit
//       calculator.waitingForSecondOperand = false
//   } else{
//       calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
//
//   }
// //  overwrite 'displayValue' if the current value is '0', else append to it
//     console.log(calculator)
// }
//
// const inputDecimal = (dot) => {
//   if (!calculator.displayValue.includes(dot)){
//       console.log(calculator.displayValue)
//       calculator.displayValue += dot
//   }
//
// }
//
// const handleOperator = (nextOperator) => {
//   const {firstOperand, displayValue, operator} = calculator;
//
//   const inputValue = parseFloat(displayValue);
//
//   if (operator && calculator.waitingForSecondOperand){
//       calculator.operator = nextOperator;
//       console.log(calculator)
//       return;
//   }
//   if (firstOperand === null && !isNaN(inputValue)){
//     calculator.firstOperand = inputValue;
//   } else if(operator){
//     const result = calculate(firstOperand, inputValue, operator)
//       calculator.displayValue = String(result)
//       calculator.firstOperand = result;
//   }
//
//   calculator.waitingForSecondOperand = true;
//   calculator.operator = nextOperator
//
//     console.log(calculator)
// }
//
//
// const calculate = (firstOperand, secondOperand, operator) => {
//     if (operator === '+') {
//         return firstOperand + secondOperand;
//     } else if (operator === '-') {
//         return firstOperand - secondOperand;
//     } else if(operator === '*'){
//         return  firstOperand * secondOperand;
//     } else if (operator === '/'){
//         return firstOperand / secondOperand
//     }
//
// return  secondOperand
// }


const user = {
    name: 'Felix Ewulu',
    userName: 'felix_dev',
    password: 'heyboi',
    login: function (userName, password){
        if (userName === this.userName && password === this.password){
            console.log('Login Successfully')
        } else{
            console.log('Authentication failed')
        }
    }
}

// user.login('felix_dev', 'heyboi');

    class User {
    #password;
        constructor(name, userName, password){
        this.name = name;
        this.userName = userName;
        this.#password = password;
    }
    login(userName, password){
            if(userName === this.userName && password === this.#password){
                console.log('Login successful')
            } else{
                console.log('login failed')
            }
    }
    setPassword(newPassword){
            this.#password = newPassword
    }

    }

//     const felix = new User('Felix Ewulu', 'felix_dev','heyboi');
//     felix.login('felix_dev', 'heyboi')
// felix.setPassword('omoba')
// console.log(felix.userName)
// felix.login('felix_dev', 'heyboi')


class myUser {
        name;
        email;
        #password;
        constructor() {}

    #validateEmail(email){
    //        check if valid,
        return true;
    }

    #validatePassword(password){
    //        check if pin satisfies required condition
        return true;
    }

    signUp(name, email, password){
            let isValidated = false;
            isValidated = this.#validateEmail(email);
            isValidated += this.#validatePassword(password);

            if (isValidated){
                this.name = name;
                this.email = email;
                this.#password = password;
            //    add user to your db.
                console.log('reg successful')
            } else{
                console.log('wrong details')
            }
    }

    login(email, password){
            if (email === this.email && password === this.#password){
                console.log('Login successful')
            } else{
                console.log('failed to login')
            }
    }

    #isRegisteredUser(email){
    //        check if user is registered or not.
        return true;
    }

    resetPassword(email, newPassword){
            if(this.#isRegisteredUser(email)){
                this.#password = newPassword;
                console.log('Operation successful')
            } else{
                console.log('No account found')
            }
    }

}

class Author extends myUser{
    #numOfPost;

    constructor(email, password) {
        super(email, password);
        this.#numOfPost = 0
    }

    createPost(content){
        this.#numOfPost++;
    }
    getNumOfPost(){
        return this.#numOfPost;
    }
}
