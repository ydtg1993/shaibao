import styled from 'styled-components';
import {Dialog} from '../style';
import {
    img_home_signin_title,
    img_home_signin_compelete
} from '../../../../resource';

export const SignInDialog = styled(Dialog)`
    grid-template-rows: 37px 210px;
    margin:-123px auto 0;
`;

export const Title = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_signin_title}') center no-repeat;
    background-size:100% 100%;
`;

export const DialogContent = styled.div`
    background-image: radial-gradient(ellipse 70% 80% at top center,#1b4084,#1f263a);
`;

export const Content = styled.div`
    margin-top: 20px;
    display:grid;
    height:174px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
`;

export const AwardBox = styled.div`
    padding:0 1.5px 6px 1.5px;
    &.last{
    grid-column-start: 3;
    grid-column-end: 5;
    }
`;

export const Award = styled.div`
    position:relative;
    height:100%;
`;

export const Day = styled.div`
    text-align: center;
    margin: 0;
    padding:0;
    font-weight:bold;
    color: #f1f1f1;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    text-shadow: black 0.1em 0.1em 0.2em;
`;

export const Box = styled.img`
    text-shadow: 0 2px 2px rgb(0, 0, 0);
    position:absolute;
    height:100%;
    width:100%;
    top: 0;
    left:0;
`;

export const Complete = styled.div`
    height:100%;
    width:100%;
    top: 0;
    left:0;
    position: absolute;
    z-index: 1;
    background: url(${img_home_signin_compelete}) #15151582 no-repeat;
    background-size: 35px 35px;
    background-position: right 0 bottom 0;
`;

export const Light = styled.div`
    position: absolute;
    top: -45px;
    left: -15px;
`;