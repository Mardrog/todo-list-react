import { useState, useEffect } from "react";
import "./style.css";

const Timer = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="timer">
            <p className="timer__paragraph">{time.toLocaleString()}</p>
        </div>
    )
};

export default Timer;