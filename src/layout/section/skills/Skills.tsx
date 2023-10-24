import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitles } from "../../../components/sectiontitles/SectionTitles"
import { Icon } from "../../../components/icon/Icon"
import { Container } from "../../../components/Container"


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitles>Skills</SectionTitles>
            <Container>
            <FlexWrapper direction="column" justify="space-around">
<IconUp>
                <Icon iconId="css3" />
                <Icon iconId="github" />
                <Icon iconId="html5" />
                <Icon iconId="js" />
                <Icon iconId="reactjs" />
                <Icon iconId="sass" />
                </IconUp>

                <IconDn>
                <Icon iconId="vscode" />
                <Icon iconId="git"/>
                <Icon iconId="bootstrap"/>
                <Icon iconId="greenshok"/>
                <Icon iconId="redux"/>
                <Icon iconId="wind"/>
                </IconDn>
             
            </FlexWrapper>
            </Container>
        </StyledSkills>



    )
}

const StyledSkills = styled.section`

`

const IconUp = styled.div`
display: flex;
justify-content: space-between;

`

const IconDn = styled.div`
display: flex;
justify-content: space-between;
margin-top: 74px;
`
