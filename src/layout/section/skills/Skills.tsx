import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitles } from "../../../components/sectiontitles/SectionTitles"
import { Icon } from '../../../components/icon/Icon';
import { Container } from "../../../components/Container"
import { S } from "./skill_styled/Skill_Styled"


// up string
const IconUPData = [
    {
        IconId: "css3"
    },
    {
        IconId: "github"
    },
    {
        IconId: "html5"
    },
    {
        IconId: "js"
    },
    {
        IconId: "reactjs"
    },
    {
        IconId: "sass"
    },
]

//dn string
const IconDNData = [
    {
        IconId: "vscode"
    },
    {
        IconId: "git"
    },
    {
        IconId: "bootstrap"
    },
    {
        IconId: "redux"
    },
    {
        IconId: "wind"
    },
    {
        IconId: "greenshok"
    },
]

export const Skills = () => {
    return (
        <S.Skills>
            <SectionTitles>Skills</SectionTitles>
            <Container>
                <FlexWrapper direction="column" justify="space-around">
                    <S.IconUp>

                        {IconUPData.map((iU, index: number) => {
                            return (
                                <Icon iconId={iU.IconId} />
                            )
                        })}
                    </S.IconUp>
                    <S.IconDn>
                        {IconDNData.map((iD, index: number) => {
                            return (
                                <Icon iconId={iD.IconId} />
                            )
                        })}
                    </S.IconDn>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


