const Operations = ({ text, onClickHundle }) => {
    return (<div className="op btn" onClick={onClickHundle}>
        {text}
    </div>);
}

export default Operations;