import Formuola from "./Formuola";
import Sum from "./Sum";
const Screen = ({ firstNumber, secondNumber, operation, sum }) => {
    return (<div className="screen">
        <Formuola firstNumber={firstNumber} secondNumber ={secondNumber} operation={operation}></Formuola>
        <Sum sum={sum}></Sum>
    </div>);
}

export default Screen;