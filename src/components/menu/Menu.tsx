import React from "react";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";



export const Menu = () =>{

    return(
        <StyledMenu>
            <ul>
                <li><a href="#" tabIndex={1}>Skills</a></li>
                <li><a href="#" tabIndex={2}>Projects</a></li>
                <li><a href="#" tabIndex={3}>Contact</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav `

display: flex;
li{
    display: inline-block;
    margin-left: 48px;
    height: 50%;
    
    
}

a {
    color: ${Theme.colors.fontSection};

/* body / 18px */
font-family: 'Raleway', 'sans-serif';
font-size: 18px;
font-weight: 500;
line-height: 28px; /* 155.556% */
}


`


