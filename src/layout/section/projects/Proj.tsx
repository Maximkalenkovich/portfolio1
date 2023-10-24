import styled from "styled-components"
import { Theme } from './../../../styles/Theme';
import {Text} from '../../../components/styledText/Text'




type ProjPropsType = {
    src: string
    title: string
    text: string
   
}

export const Proj = (props: ProjPropsType) =>{
    return (
        
        <StyledProj>
            <Image src={props.src} alt=""/>
            <ContentProject>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href="#">View Projekt</Link>
            </ContentProject>
        </StyledProj>

    );
};


const StyledProj = styled.div`
    background-color: ${Theme.colors.progectsBg};
width: 992px;
margin-top:30px;
/* border-radius: 2% 2% 2% 2%; */
display: flex;
/* justify-content: space-between; */
box-shadow: 0px 0px 36px 9px rgba(34, 60, 80, 0.2);

&:nth-child(odd){
    flex-direction: row-reverse;
}


`

const ContentProject = styled.div`
display: flex;
flex-direction: column; 
justify-content:center ;
margin-left: 50px;



${Text}{
    margin: 24px 0;
}

`

const Title = styled.h3`
color: ${Theme.colors.fontSection};
font-family: 'Playfair Display', sans-serif;
font-size: 40px;;
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



`

const Image = styled.img``