import { useState, useEffect } from "react";
import "./style.css";

const Timer = () => {

    const date = new Date();
    const [time, setTime] = useState(date.toLocaleString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const time = new Date();
            setTime(time.toLocaleString());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="timer">
            <p className="timer__paragraph">{time}</p>
        </div>
    )
};

export default Timer;