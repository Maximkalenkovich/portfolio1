import { SectionTitles } from "../../../components/sectiontitles/SectionTitles"
import { Container } from "../../../components/Container";
import { StyledButton } from "../../../components/button/styledButton/StyledButton";
import { S } from "./styled_contact/Contact_Styled";



export const Contacts = () =>{
return(
    <S.Contacts>
    <SectionTitles>Contact me</SectionTitles>
    <Container>
    <S.Form>
        <S.Label htmlFor="name">
          <S.Title>Name</S.Title>
        <S.Field/>
        </S.Label>

        <S.Label htmlFor="email">
           <S.Title> Email</S.Title>
        <S.Field/>
        </S.Label>

        <S.Label htmlFor="message">
            <S.Title>Message</S.Title>
        <S.Field as={"textarea"}/>
        </S.Label>
        <StyledButton type={"submit"}>Send</StyledButton>
    </S.Form>
    
    </Container>
    </S.Contacts>
);
};

