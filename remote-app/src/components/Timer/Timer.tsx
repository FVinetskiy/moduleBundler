import React, { useState, useEffect } from "react";

import './Timer.scss';

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const resetTimer = () => {
        setSeconds(0);
    };

    return (
        <div className="timer">
            <h2>Время на сайте: <span>{seconds}</span> секунд</h2>
            <button onClick={resetTimer}>
                Сброc таймера
            </button>
        </div>
    );
};

export default Timer;