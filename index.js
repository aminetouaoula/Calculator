
//selecting: 
const numbersButtons = document.querySelectorAll('[data-Num]')
const opritionsButtons = document.querySelectorAll('[data-opriation]')
const deleteButton = document.querySelector('[data-delete]')
const ClearAllButton = document.querySelector('[data-clearAll]')
const equalButton = document.querySelector('[data-equal]')
const previousDisplay = document.querySelector('[data-previous]')
const currentDisplay = document.querySelector('[data-current]')
// class for calculator
class Calculator {
    constructor(currentDisplay, previousDisplay) {
        this.currentVal = currentDisplay
        this.previousVal = previousDisplay
        this.currentNum = ''
        this.opiration = ''
    }
    clear() {
        this.currentNum = ''
        this.opiration = ''
        this.previousVal.innerText = ''

    }


    delete() {
        this.currentNum = this.currentNum.toString().slice(0, -1)
    }
    compute() {
        let previous = parseFloat(this.previousVal.innerText)
        if (this.previousVal.innerText == '') return
        let current = parseFloat(this.currentVal.innerText)
        switch (this.opiration) {

            case "+":
                current = previous + current
                break
            case "*":
                current = previous * current
                break
            case "-":
                current = previous - current

                break
            case "/":
                current = previous / current
                break

            default: return
        }

        this.currentNum = current
        this.previousVal.innerText = ''
    }
    AppendTheNum(number) {
        if (number === '.' && this.currentVal.innerText.includes('.')) return
        this.currentNum = this.currentNum.toString() + number.toString()
    }
    refreshTheDisplay() {
        this.currentVal.innerText = this.convertNumbertoString(this.currentNum)

    }
    opritionDisplay(opiration) {

        if (this.previousVal.innerText.includes(opiration)) return
        this.previousVal.innerText = `${this.previousVal.innerText} ${opiration}`
    }
    convertNumbertoString(number) {
        return number.toLocaleString("en")
    }

    chooseTheOpration(opriation) {
        if (this.currentVal.innerText === '') return
        if (this.previousVal.innerText === '' && this.currentVal.innerText === '') return
        if (this.opriation !== '' && this.previousVal.innerText !== '' && this.currentVal.innerText !== '') {
            this.compute()
        }
        this.previousVal.innerText = this.currentNum
        this.opritionDisplay(opriation)
        this.opiration = opriation

        if (this.currentVal.innerText == '') return
        this.currentVal.innerText = ''
        this.currentNum = ''
    }
}


let calculator = new Calculator(currentDisplay, previousDisplay)
numbersButtons.forEach((Button) => {
    Button.addEventListener("click", () => {
        calculator.AppendTheNum(Button.innerText)
        calculator.refreshTheDisplay()
    })
})
ClearAllButton.onclick = () => {
    calculator.clear()
    calculator.refreshTheDisplay()

}

opritionsButtons.forEach((opriation) => {
    opriation.addEventListener("click", () => {
        calculator.chooseTheOpration(opriation.innerText)
        calculator.refreshTheDisplay()
    })
})



equalButton.addEventListener("click", (event) => {

    calculator.compute()
    calculator.refreshTheDisplay()
})
ClearAllButton.addEventListener("click", () => {
    calculator.clear()
})
deleteButton.addEventListener("click", () => {
    calculator.delete()
    calculator.refreshTheDisplay()
})