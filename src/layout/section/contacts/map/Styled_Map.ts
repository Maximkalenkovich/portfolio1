import styled from "styled-components"
import { Theme } from "../../../../styles/Theme"


const MapSection = styled.section`
`

const Map = styled.iframe`
    border: 1px solid black;
    width: 400px;
    height: 400px;


    @media ${Theme.media.mobile}{
        width: 200px;
    height: 200px;
    }
`

export const S = {
    MapSection,
    Map

}