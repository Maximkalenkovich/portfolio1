

import { Theme } from "./Theme";


type FontPropsType = {
    family?: string;
    width?: number;
    color?: string;
    lineheight?: number;
    fmin?: number;
    fmax?: number;

    
}

export const font = ({family, width, color, lineheight, fmax,fmin}: FontPropsType) => `
font-family: ${family || "Poppins"};
width: ${width || 400};
color: ${color || Theme.colors.fontSection};
line-height: ${lineheight || 1.2};

font-size: calc( (100vw - 360px)/(1440 - 360) * (${fmax} - ${fmin}) + ${fmin}px);


`