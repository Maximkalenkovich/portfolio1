import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitles } from "../../../components/sectiontitles/SectionTitles"
import { Proj } from "./Proj"
import prog1 from "../../../images/prog-1.png"
import styled from "styled-components"
import prog2 from "../../../images/prog-2.png"
import prog3 from "../../../images/prog-3.png"
import { Container } from "../../../components/Container"






export const Projects = () => {
    return(
        <StyledProjects>
        <SectionTitles>Projects</SectionTitles>
        <Container>
        <FlexWrapper direction="column" align="center">

            <Proj src={prog1} title="Project Name" text="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example." />
            <Proj src={prog2} title="Project Name" text="What was your role, your deliverables, if the project was personal, freelancing."/>
            <Proj  src={prog3} title="Project Name" text="You can also add in this description the type of the project, if it was for web, mobile, electron."/>
        
       
        </FlexWrapper>
        </Container>
        </StyledProjects>
    )
        

        
}

const StyledProjects = styled.section`
src {
    border: 1px solid red;
}
`
