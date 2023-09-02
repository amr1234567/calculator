import Button from './Button'
import Ac from './Ac';
import Delete from './Delete';
import Operations from './Operations';
import Equal from './Equal';
const Buttons = ({ hundleClick }) => {
    return (<div className="buttons">
        <Ac text="AC" onClickHundle={() => hundleClick('Ac')}></Ac>
        <Delete text="Del" onClickHundle={() => hundleClick('Del')}></Delete>
        <Operations text="+" onClickHundle={() => hundleClick('+')}></Operations>
        <Button text="7" onClickHundle={() => hundleClick('7')}></Button>
        <Button text="8" onClickHundle={() => hundleClick('8')}></Button>
        <Button text="9" onClickHundle={() => hundleClick('9')}></Button>
        <Operations text="-" onClickHundle={() => hundleClick('-')}></Operations>
        <Button text="4" onClickHundle={() => hundleClick('4')}></Button>
        <Button text="5" onClickHundle={() => hundleClick('5')}></Button>
        <Button text="6" onClickHundle={() => hundleClick('6')}></Button>
        <Operations text="*" onClickHundle={() => hundleClick('*')}></Operations>
        <Button text="1" onClickHundle={() => hundleClick('1')}></Button>
        <Button text="2" onClickHundle={() => hundleClick('2')}></Button>
        <Button text="3" onClickHundle={() => hundleClick('3')}></Button>
        <Operations text="/" onClickHundle={() => hundleClick('/')}></Operations>
        <Button text="0" onClickHundle={() => hundleClick('0')}></Button>
        <Button text="." onClickHundle={() => hundleClick('.')}></Button>
        <Equal text="=" onClickHundle={() => hundleClick('=')}></Equal>
    </div>);
}

export default Buttons;