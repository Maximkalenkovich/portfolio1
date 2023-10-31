import styled from "styled-components"
import { Theme } from './../../../styles/Theme';
import { font } from "../../../styles/Common";
import { S } from "../projects/proj_styled/Proj_Styled";

type ProjPropsType = {
    src: string
    title: string
    text: string
};

export const Proj: React.FC<ProjPropsType> = (props: ProjPropsType) => {
    return (
        <S.Proj>
            <S.Image src={props.src} alt="" />
            <S.ContentProject>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Link href="#">View Projekt</S.Link>
            </S.ContentProject>
        </S.Proj>
    );
};

