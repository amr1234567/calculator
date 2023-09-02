const Button = ({ text, onClickHundle }) => {
    return (<div className="button btn" onClick={onClickHundle}>
        {text}
    </div>);
}

export default Button;