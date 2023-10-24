import styled from "styled-components";
import { SectionTitles } from "../../../components/sectiontitles/SectionTitles"
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/button/styledButton/StyledButton";



export const Contacts = () =>{
return(
    <StyledContacts>
    <SectionTitles>Contact me</SectionTitles>
    <Container>
    <StyledForm>
        <Label htmlFor="name">
          <Title>Name</Title>
        <Field/>
        </Label>

        <Label htmlFor="email">
           <Title> Email</Title>
        <Field/>
        </Label>

        <Label htmlFor="message">
            <Title>Message</Title>
        <Field as={"textarea"}/>
        </Label>
        <StyledButton type={"submit"}>Send</StyledButton>
    </StyledForm>
    </Container>
    </StyledContacts>
);
};

const StyledContacts = styled.section`


    textarea {
        resize: none;
        width: 400px;
height: 160px;
    }

    
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items:center ;

${StyledButton}{

    margin-top: 24px;
  margin-left: 27%;
}

    
`
const Field = styled.input`
    border-radius: 8px;
border: 1px solid #E8ECF4;
background: ${Theme.colors.progectsBg};
width: 400px;
height: 40px;
`
const Label = styled.label`
display: flex;
flex-direction: column;

    
`


const Title = styled.span`
    color: ${Theme.colors.fontSection};
font-family: 'Nunito',sans-serif;
font-size: 16px;
font-weight: 600;
`