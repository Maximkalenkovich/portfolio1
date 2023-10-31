import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitles } from "../../../components/sectiontitles/SectionTitles"
import { Proj } from "./Proj"
import prog1 from "../../../images/prog-1.png"
import prog2 from "../../../images/prog-2.png"
import prog3 from "../../../images/prog-3.png"
import { Container } from "../../../components/Container"
import { S } from "./proj_styled/Proj_Styled"



const ProjData = [
    {
        src: prog1,
        title: "Project Name",
        text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
    },
    {
        src: prog2,
        title: "Project Name",
        text: "What was your role, your deliverables, if the project was personal, freelancing."
    },
    {
        src: prog3,
        title: "Project Name",
        text: "You can also add in this description the type of the project, if it was for web, mobile, electron."
    },


]


export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <SectionTitles>Projects</SectionTitles>
            <Container>
                <FlexWrapper direction="column" align="center" wrap="wrap">
                    {ProjData.map((P, index: number) => {
                        return (
                            <Proj src={P.src} title={P.title}
                                text={P.text} />
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};


