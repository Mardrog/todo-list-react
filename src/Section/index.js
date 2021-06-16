import "./style.css";

const Section = ({ header, extraContainer, extraFormContainer, extraTasksContainer, }) => (
    <section className="section">
        {extraContainer}
        {header}
        {extraFormContainer}
        {extraTasksContainer}
    </section>
);

export default Section;