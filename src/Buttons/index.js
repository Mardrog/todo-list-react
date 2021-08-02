import { StyledButtonContainer, StyledButtons } from "./styled.js"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <StyledButtonContainer >
            <StyledButtons left onClick=
                {toggleHideDone}
            >
                {hideDone === true ? "Pokaż ukończone" : "Ukryj ukończone"}
            </StyledButtons>
            <StyledButtons
                disabled={tasks.every(({ done }) => done)}
                onClick={() => setAllDone()}
            >
                Ukończ wszystkie
            </StyledButtons>
        </StyledButtonContainer>
    )
);

export default Buttons;