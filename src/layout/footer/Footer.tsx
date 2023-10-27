import styled from "styled-components";
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper";
import FooterImg from "../../images/footer.svg"
import { Theme } from "../../styles/Theme";



export const Footer = () =>{
    return(

        <StyledFooter>
           
            <FlexWrapper direction="column" align="center">
            <SocialList>
                <SocialItems>
                    <SocialLink href="#">
                        <Icon iconId="telegram" viewBox="0 0 50 50" width="50px" height="50px"/>
                    </SocialLink>
                </SocialItems>
                <SocialItems>
                    <SocialLink href="#">
                        <Icon iconId="linkedinFoother" viewBox="0 0 50 50" width="50px" height="50px"/>
                    </SocialLink>
                </SocialItems>
                <SocialItems>
                    <SocialLink href="#">
                        <Icon iconId="instagram"  viewBox="0 0 50 50" width="50px" height="50px"/>
                    </SocialLink>
                </SocialItems>
                </SocialList>
                <Copyright>© 2023 Maksim Kalenkovich, All Rights Reserved.</Copyright>
                </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`

min-height: 40vh;
background-color: ${Theme.colors.primaryBg};
    background-image: url(${FooterImg});
    background-repeat: no-repeat;
    

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
