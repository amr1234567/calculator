const Formuola = ({ firstNumber, secondNumber, operation }) => {
    return (<div className="formula-screen">
        <div className="formula">{firstNumber} {operation} {secondNumber}</div>
    </div>);
}

export default Formuola;