import { StyledSectionContainer, StyledHeader } from "./styled";

const Section = ({ header, buttonsContainer, formContainer, tasksContainer, timer }) => (
    <section>
        <StyledSectionContainer>
            <StyledHeader>{header}</StyledHeader>
            {timer}
            {buttonsContainer}
        </StyledSectionContainer>
        {formContainer}
        {tasksContainer}
    </section>
);

export default Section;