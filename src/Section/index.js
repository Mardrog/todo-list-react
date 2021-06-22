import "./style.css";

const Section = ({ header, buttonsContainer, formContainer, tasksContainer, }) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__header">{header} </h2>
            {buttonsContainer}
        </div>
        {formContainer}
        {tasksContainer}
    </section>
);

export default Section;