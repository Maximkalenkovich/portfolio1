import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Styled_Footer";





export const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction="column" align="center">
                <S.SocialList>
                    <S.SocialItems>
                        <S.SocialLink href="#">
                            <Icon iconId="telegram" viewBox="0 0 50 50" width="50px" height="50px" />
                        </S.SocialLink>
                    </S.SocialItems>
                    <S.SocialItems>
                        <S.SocialLink href="#">
                            <Icon iconId="linkedinFoother" viewBox="0 0 50 50" width="50px" height="50px" />
                        </S.SocialLink>
                    </S.SocialItems>
                    <S.SocialItems>
                        <S.SocialLink href="#">
                            <Icon iconId="instagram" viewBox="0 0 50 50" width="50px" height="50px" />
                        </S.SocialLink>
                    </S.SocialItems>
                </S.SocialList>
                <S.Copyright>© 2023 Maksim Kalenkovich</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};


