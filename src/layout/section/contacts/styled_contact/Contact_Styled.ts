import styled from "styled-components"
import { Theme } from "../../../../styles/Theme"
import { StyledButton } from "../../../../components/button/styledButton/StyledButton"


const Contacts = styled.section`
    textarea {
        resize: none;
        width: 400px;
height: 160px;

@media ${Theme.media.mobile}{

width: 300px;
height: 160px;
resize: none;          
};
};   
`

const Form = styled.form`
display: flex;
flex-direction: column;
align-items:center ;

${StyledButton}{
    /* display: flex;
  justify-content: flex-end; */
 margin-top: 24px;

}

    
`
const Field = styled.input`
    border-radius: 8px;
border: 1px solid #E8ECF4;
background: ${Theme.colors.progectsBg};
width: 400px;
height: 40px;

@media ${Theme.media.mobile}{

    width: 300px;
height: 40px;               
}

`
const Label = styled.label`
display: flex;
flex-direction: column;

    
`


const Title = styled.span`
    color: ${Theme.colors.fontSection};
font-family: 'Nunito',sans-serif;
font-size: 16px;
font-weight: 600;
`

export const S = {

    Title,
    Contacts,
    Form,
    Field,
    Label
}