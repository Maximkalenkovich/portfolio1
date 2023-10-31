import { SectionTitles } from "../../../../components/sectiontitles/SectionTitles"
import { Container } from "../../../../components/Container"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { S } from "./Styled_Map"

export const Map = () => {
    return (
        <S.MapSection>
            <SectionTitles>Map</SectionTitles>
            <Container>
                <FlexWrapper justify="center">
                    <S.Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.750846051602!2d27.544517376715167!3d53.900632272455226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfeed1ee2a89%3A0xfbfb4ec7a1a62153!2z0YPQuy4g0J3QtdC80LjQs9CwLCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1698070657470!5m2!1sru!2sby" width="600" height="450" loading="lazy" ></S.Map>
                </FlexWrapper>
            </Container>
        </S.MapSection>

    );
};



