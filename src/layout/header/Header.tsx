import React from "react"
import styled from "styled-components" 
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";



export const Header = () =>{

    return(

        <StyledHeader>

               <Container>
                <FlexWrapper justify="end">
            <Menu />
            
            </FlexWrapper>
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header `
//position: absolute;
   // background: transparent;
 padding: 20px 0;
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;


`
