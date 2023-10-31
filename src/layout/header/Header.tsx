import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./header_styles/Header_Styles";




export const Header = () =>{

    return(

        <S.Header>

               <Container>
                <FlexWrapper justify="end">
            <Menu />
            
            </FlexWrapper>
            </Container>

        </S.Header>
    );
};


