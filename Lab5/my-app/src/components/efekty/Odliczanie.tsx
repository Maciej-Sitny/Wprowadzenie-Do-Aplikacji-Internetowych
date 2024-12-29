import React, { useState, useEffect } from 'react';

function Odliczanie() {
    const [count, setCount] = useState(15.0);
    const [isRunning, setIsRunning] = useState(false);
    const [btnTitle, setBtnTitle] = useState("START");

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning && count > 0) {
            timer = setInterval(() => {
                setCount(prevCount => Math.max(prevCount - 0.1, 0));
            }, 100);
        }
        else if (count === 0) {
            setBtnTitle("Odliczanie zakończone");
        }
        return () => clearInterval(timer);
    }, [isRunning, count]);

    const handleButtonClick = () => {
        if (count > 0) {
            setIsRunning(!isRunning);
            setBtnTitle(isRunning ? "START" : "STOP");
        }
    };

    return (
        <div>
            <p>{count.toFixed(1)} sek</p>
            <button onClick={handleButtonClick} disabled={count === 0}>
                {btnTitle}
            </button>
        </div>
    );
}

export default Odliczanie;