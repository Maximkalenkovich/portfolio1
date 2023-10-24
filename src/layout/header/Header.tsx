import React from "react"
import styled from "styled-components" 
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";



export const Header = () =>{

    return(

        <StyledHeader>
            <Container>
                <FlexWrapper justify="flex-end">
               
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;
`
