import styled from "styled-components"
import { StyledButton } from "../../../../components/button/styledButton/StyledButton"
import { Theme } from "../../../../styles/Theme"
import { font } from "../../../../styles/Common"
import avatarSvg from "../../../../images/yellow-bg1.png"



const Main = styled.section`
min-height: 100vh;

background-image: url(${avatarSvg});
 background-repeat: no-repeat;
background-size:629px 720px ;
 background-position: right;
 background-position-y:-150px ;




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
/* @media screen and (max-width: 1052px){
    text-align: center;
} */
`
//For robbots search
const Title = styled.h1`

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
border-radius: 40%;

@media ${Theme.media.mobile} {
    margin-top:90px;
  width:500px;
  height: 400px;
  object-fit: cover;
};

`

// backgroung yellow color
const PhotoWrapper= styled.div`
 
`
export const S = {

    Main,
    Text,
    Greetings,
    Title,
    Name,
    Photo,
    PhotoWrapper
}