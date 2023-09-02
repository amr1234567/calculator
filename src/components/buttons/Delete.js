const Delete = ({ text, onClickHundle }) => {
    return (<div className="double-button del btn" onClick={onClickHundle}>
        {text}
    </div>);
}

export default Delete;