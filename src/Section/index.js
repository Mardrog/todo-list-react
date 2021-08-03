import { StyledSectionContainer, StyledHeader } from "./styled";

const Section = ({ header, buttonsContainer, formContainer, tasksContainer, timer }) => (
    <section className="section">
        <StyledSectionContainer className="section__container">
            <StyledHeader className="section__header">{header}</StyledHeader>
            {timer}
            {buttonsContainer}
        </StyledSectionContainer>
        {formContainer}
        {tasksContainer}
    </section>
);

export default Section;