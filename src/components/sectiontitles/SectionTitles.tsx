import styled from "styled-components";
import { Theme } from "../../styles/Theme";


export const SectionTitles = styled.h2`
    text-align: center;
    color:${Theme.colors.fontSection};
    font-family: 'Playfair Display', sans-serif;
font-size: 48px;
font-weight: 700;
line-height: 72px;
margin-bottom: 80px;


position: relative;

&::before{
    content: '';
    display: inline-block;
    width: 100px;
    height: 4px;
    position: absolute;
    left: 50%;
    bottom: -10px;
   transform: translateX(-50%);
   background-color: ${Theme.colors.buttonBg};

}

`