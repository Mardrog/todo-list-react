import "./style.css";

const Timer = (props) => {

    const date = new Date();

    return (
        <div className="timer">
            <p className="timer__paragraph">{date.toLocaleString("pl-PL", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} {date.toLocaleTimeString()}</p>
        </div>
    )

};


export default Timer;