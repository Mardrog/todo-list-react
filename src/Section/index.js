import "./style.css";

const Section = ({ header, buttonsContainer, formContainer, tasksContainer, timer }) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__header">{header}</h2>
            {timer}
            {buttonsContainer}
        </div>
        {formContainer}
        {tasksContainer}
    </section>
);

export default Section;