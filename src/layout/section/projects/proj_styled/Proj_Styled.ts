import styled from "styled-components"
import { Theme } from "../../../../styles/Theme"
import { font } from "../../../../styles/Common"




const Projects = styled.section`
`


//PROJ STYLED


const Proj = styled.div`
    background-color: ${Theme.colors.progectsBg};
max-width: 992px;
width :100% ;
margin-top:30px;
height: 524px;
display: flex;
justify-content: space-between;
box-shadow: 0px 0px 36px 9px rgba(34, 60, 80, 0.2);
flex-wrap: wrap;


&:nth-child(odd){
    flex-direction: row-reverse;
    
}


@media screen and (max-width: 987px){
width: 400px;
height: 600px;

}

@media ${Theme.media.mobile}{

    width:300px;
    height: 600px;
} 


`

export const Text = styled.p`

    ${font({fmax: 24, fmin: 15, family: "Nunito, sans-serif", color: "${Theme.colors.textcolor}"})};
    color: ${Theme.colors.textcolor};
line-height: 36px; /* 150% */
width: 400px;
margin: 24px 0;
flex-wrap: wrap;
@media ${Theme.media.mobile}{
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
}
@media screen and (max-width: 987px){
    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 10px;
}



`

const ContentProject = styled.div`
display: flex;
flex-direction: column; 
justify-content:center ;
margin-left: 50px;

@media screen and (max-width: 987px){
    text-align: center;
    margin: 0 auto;
    
}


`

const Title = styled.h3`

${font({fmax: 40, fmin: 20, family: "'Playfair Display', sans-seriff"})}
color: ${Theme.colors.fontSection};
font-weight: 700;
line-height: 150%; /* 60px */
`

const Link = styled.a`
width: 150px;
text-align: center;
color: ${Theme.colors.fontSection};
font-family: 'Roboto', sans-serif;
font-size: 18px;
font-weight: 500;
line-height: 150%; /* 27px */
border-radius: 24px;
border: 1px solid ${Theme.colors.borderColor};
@media screen and (max-width: 987px){
    align-items: center;
    margin: 0 auto;
    
}
`

const Image = styled.img`
width: 496px;
height: 526px;
object-fit: cover;
@media screen and (max-width: 987px){
    justify-content: flex-start;
width: 400px;
height: 300px;
object-fit: cover;

}

@media ${Theme.media.mobile}{

    width: 300px;
height: 300px;
object-fit: cover;
}


`

export const S = {

    Projects,
    Proj,
    Text,
    ContentProject,
    Title,
    Link,
    Image
}