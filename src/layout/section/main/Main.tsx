import { FlexWrapper } from "../../../components/FlexWrapper";
import avatar from "../../../images/avatar.png"
import { Container } from "../../../components/Container";
import { StyledButton } from "../../../components/button/styledButton/StyledButton";
import { S } from "./main_styled/Main_Styled";


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify="space-around" wrap="wrap-reverse">
                    <S.Greetings>
                        <S.Title>Software Developer</S.Title>
                        <S.Name>Hello, my name is
                            Maxim Kalenkovich </S.Name>
                        <S.Text>Short text with details about you,
                            what you do or your professional career.
                            You can add more information on the about page.</S.Text>
                        <StyledButton>Projects</StyledButton>
                        <StyledButton>Linkedin</StyledButton>
                    </S.Greetings>
                    <S.PhotoWrapper>
                        <S.Photo src={avatar} alt="avatar" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>

    );

};

