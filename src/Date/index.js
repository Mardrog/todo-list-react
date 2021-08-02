import { useState, useEffect } from "react";
import { StyledDateContainer, StyledDate } from "./styled"

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
        <StyledDateContainer>
            <StyledDate>{time.toLocaleString()}</StyledDate>
        </StyledDateContainer>
    )
};

export default Timer;