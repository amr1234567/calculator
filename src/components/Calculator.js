import Screen from "./screen/Screen";
import Buttons from "./buttons/Buttons";
import { useState } from "react";
const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operation, setOperation] = useState('');
    const [sum, setSum] = useState('')

    let hundleClick = (i) => {
        if (isNaN(i)) {
            if (i === 'Ac') {
                setFirstNumber('');
                setOperation('')
                setSecondNumber('')
                setSum('')
            } else if (i === 'Del') {
                if (secondNumber) {
                    setSecondNumber(secondNumber.substring(0, secondNumber.length - 1))
                } else if (!secondNumber && operation) {
                    setOperation('')
                } else if (!secondNumber && !operation && firstNumber) {
                    setFirstNumber(pre => pre.substring(0, pre.length - 1))
                }
            } else if (i === '*' || i === '+' || i === '-' || i === '/') {
                if (firstNumber && !secondNumber) {
                    setOperation(i)
                } else if (firstNumber && secondNumber) {
                    if (operation === "*") {
                        setFirstNumber((parseFloat(firstNumber) * parseFloat(secondNumber)).toString())
                        setSum('')
                    } else if (operation === "/") {
                        setFirstNumber((parseFloat(firstNumber) / parseFloat(secondNumber)).toString())
                        setSum('')
                    } else if (operation === "+") {
                        setFirstNumber((parseFloat(firstNumber) + parseFloat(secondNumber)).toString())
                        setSum('')
                    } else {
                        setFirstNumber((parseFloat(firstNumber) - parseFloat(secondNumber)).toString())
                        setSum('')
                    }
                    setSecondNumber('')
                    setOperation(i)
                }
            } else if (i === "=") {
                if (operation === "*") {
                    setSum((parseFloat(firstNumber) * parseFloat(secondNumber)).toString())
                } else if (operation === "/") {
                    setSum((parseFloat(firstNumber) / parseFloat(secondNumber)).toString())
                } else if (operation === "+") {
                    setSum((parseFloat(firstNumber) + parseFloat(secondNumber)).toString())
                } else {
                    setSum((parseFloat(firstNumber) - parseFloat(secondNumber)).toString())
                }
            }
        } else {
            if (!operation) {
                setFirstNumber(pre => pre + i)
                setSum('')
            } else if (operation && !sum) {
                setSecondNumber(pre => pre + i)
                setSum('')
            }else if (sum) {
                setFirstNumber(i);
                setOperation('')
                setSecondNumber('')
                setSum('')
            }
        }

    }
    return (<div className="calculator">
        <Screen firstNumber={firstNumber} secondNumber={secondNumber} operation={operation} sum={sum}></Screen>
        <Buttons hundleClick={hundleClick}></Buttons>
    </div>);
}

export default Calculator;