import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import  avatar  from "../../../images/avatar.png"
import avatarSvg from "../../../images/yellow-bg.svg"
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/button/styledButton/StyledButton";
import { font } from "../../../styles/Common";


export const Main = ()=>{
    return(
        <StyledMain>
            <Container>
            <FlexWrapper justify="space-around"  wrap="wrap">
                 <Greetings>
                    <StyledTitle>Software Developer</StyledTitle>
                    <Name>Hello, my name is 
                        Maxim Kalenkovich </Name>
                    <Text>Short text with details about you, 
                        what you do or your professional career. 
                        You can add more information on the about page.</Text>
                    <StyledButton>Projects</StyledButton>
                    <StyledButton>Linkedin</StyledButton>
                </Greetings>
                <PhotoWrapper>
               <Photo src = {avatar} alt="avatar"/> 
               </PhotoWrapper>
               
            </FlexWrapper>
            
             </Container> 
            
        </StyledMain>

    );

};

const StyledMain = styled.section`
/* min-height: 100vh; */

display: flex;


${StyledButton}{
    margin-top: 32px;

    @media ${Theme.media.mobile}{
        align-items: center;
        margin-left: 4%;
        margin-top: 15px;
    }
}


`

export const Text = styled.p`

${font({fmax: 24, fmin: 15, family: "Nunito, sans-serif", color: "${Theme.colors.textcolor}"})};
    color: ${Theme.colors.textcolor};

   
/* font-family: 'Nunito', sans-serif;
font-size: 24px; */
line-height: 36px; /* 150% */
width: 400px;
margin: 32px 0;
flex-wrap: wrap;
@media screen and (max-width: 1052px){
    margin-left: 10%;
}


@media ${Theme.media.mobile}{
    flex-wrap: wrap;
    width:350px;
    text-align: center;
    margin-left: 15%;
    
}


`
//for margin constraction
const Greetings = styled.div`
margin-top: 50px ;
flex-wrap: wrap;

@media ${Theme.media.mobile}{
    text-align: center;
    margin-top: 80px;
}
@media screen and (max-width: 1052px){
    text-align: center;
}
`
//For robbots search
const StyledTitle = styled.h1`

${font({fmax: 20, fmin: 15, family: "Nunito, sans-serif"  })}
color: ${Theme.colors.buttonBg};
text-transform: uppercase;

    
`
//Name
const Name = styled.h2`
color:${Theme.colors.fontSection};

${font({fmax: 64, fmin: 30, width:508, family: "'Roboto', sans-serif"})}



width: 508px;

`
//Avatar Photo
const Photo = styled.img`
object-fit: cover;
width: 520px;
height: 420px;

@media ${Theme.media.mobile} {
  width:300px;
  height: 350px;
  object-fit: cover;

}

`

// backgroung yellow color
export const PhotoWrapper= styled.div`
background-image: url(${avatarSvg});
background-size: contain;
background-repeat: no-repeat;
@media screen and (max-width: 1052px) {
    background-image:none; 
    background-color: ${Theme.colors.buttonBg};
    background-size: contain;
    border-radius: 10px;
    box-shadow:  -11px 13px 8px 0px rgba(34, 60, 80, 0.2);
    margin-top: 20px;
    align-items: center;
}
 
`