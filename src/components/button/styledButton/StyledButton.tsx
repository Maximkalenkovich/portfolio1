import styled from "styled-components";
import { Theme } from "../../../styles/Theme";



export const StyledButton = styled.button`
border-radius: 8px;
border: 2px solid ${Theme.colors.borderColor};

color: ${Theme.colors.fontSection};
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 27px */
padding: 8px 24px;
margin-right: 20px;
display: inline-block;

&:hover{
    background-color:${Theme.colors.buttonBg}; 
    border:none;
    cursor: pointer;
}

`