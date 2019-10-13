import styled from "styled-components";
import {Dialog} from "../../../home/dialog/style";
import {
    img_game_introduction_title
} from '../../../../resource';

export const IntroductionDialog = styled(Dialog)`
    grid-template-rows: 36px 398px;
    margin: -217px auto 0; 
`;

export const Title = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_game_introduction_title}') center no-repeat;
    background-size:100% 100%;
`;

export const DialogContent = styled.div`
    background-image: radial-gradient(ellipse 70% 80% at top center,#1b4084,#1f263a);
`;

export const DialogContentInfo = styled.div`
    padding:10px;
    height: 375px;
    overflow-y:auto;
`;

export const Text = styled.div`
    font-size:12px;
    color:white;
    margin:10px 0 0 0;
    &:first-child{margin-top:0;}
`;