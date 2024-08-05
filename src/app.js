import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n){
    return Math.ceil(Math.random() * n);
}

function App(){
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () =>{
        const nextNum = random(6)
        setNum(nextNum);
        setSum(sum + nextNum);
        // gameHistory.push(nextNum);
        // 배열이나 객체 같은 참조형 state를 사용할때는 
        // 메소드나 할당 연산자로 값을 바꾸는 게 아니라
        // 반드시 새로운 값을 만들어서 변경해야 함
        setGameHistory([...gameHistory,nextNum]);
    };
    const handleClearClick = () =>{
        setNum(1);
        setSum(0);
        setGameHistory([]);
    };
    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <h2>나</h2>
                <Dice color="blue" num={num} />
                <h2>총점</h2>
                <p>{sum}</p>
                <p>{gameHistory.join(',')}</p>
            </div>
        </div>
    );
}

export default App;