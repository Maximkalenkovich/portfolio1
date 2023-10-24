import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import  avatar  from "../../../images/avatar.png"
import avatarSvg from "../../../images/yellow-bg.svg"
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/button/styledButton/StyledButton";
import { Text } from "../../../components/styledText/Text";


export const Main = ()=>{
    return(
        <StyledMain>
            <Container>
            <FlexWrapper justify="space-between" align="center">
                 <Greetings>
                    <StyledTitle>Software Developer</StyledTitle>
                    <Name>Hello, my name</Name>
                         <Name>is Maxim Kalenkovich</Name>
                    <Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Text>
                    <StyledButton>Projects</StyledButton>
                    <StyledButton>Linkedin</StyledButton>
                </Greetings>
                <PhotoBack src = {avatarSvg} alt=""/>
               <Photo src = {avatar} alt="avatar"/> 
               
            </FlexWrapper>
            
            </Container>
            
        </StyledMain>

    );

};

const StyledMain = styled.section`
/* min-height: 100vh; */
display: flex;

${Text}{
    margin: 32px 0;
}


`
//for margin constraction
const Greetings = styled.div`
margin-top:55px ;
`
//For robbots search
const StyledTitle = styled.h1`
color: ${Theme.colors.buttonBg};
font-family: 'Nunito', 'sans-serif';
font-size: 20px;
font-weight: 700;
text-transform: uppercase;
white-space: nowrap;
    
`
//Name
const Name = styled.h2`
color:${Theme.colors.fontSection};
font-family: 'Roboto', sans-serif;
font-size: 64px;
font-weight: 700;
line-height: 77px;
white-space: nowrap;
`
//Avatar Photo
const Photo = styled.img`
object-fit: cover;
width: 520px;
height: 429px;
z-index: 1;
transform: translateX(-350px) translateY(-50px);

`

// backgroung yellow color
export const PhotoBack = styled.img`
width:529px;
height:480px;
z-index:0;
transform: translateX(80px) translateY(-100px);
opacity: 0.9;
    
`