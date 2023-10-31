import styled from "styled-components"
import { Theme } from "../../styles/Theme"
import FooterImg from "../../images/footer.svg"



const Footer = styled.footer`


background-color: ${Theme.colors.primaryBg};
height: 40vh;

background-image: url(${FooterImg});
    background-repeat: no-repeat;

    @media ${Theme.media.tablet}{
        height: 100%;
background-image: none;

    }

 

`
const Name = styled.span`
    
`
const SocialList = styled.ul`
display: flex;
gap: 20px;
margin: 30px 0;

    
`
const SocialItems = styled.li`

    &:hover{
        transform: scale(2);
    }
`
const SocialLink = styled.a`
`
const Copyright = styled.p`
color: var(--font-medium-emphasis, #828282);
font-family: "Nunito", sans-serif;
font-size: 16px;
font-weight: 400;

   





    
`

export const S ={
    Footer,
    Name,
    SocialList,
    SocialItems,
    SocialLink,
    Copyright

}

