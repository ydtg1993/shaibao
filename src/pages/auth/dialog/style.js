import styled from 'styled-components';
import close from "../../../resource/dialog/guanbi.png";
import top from "../../../resource/dialog/top.png";
import confirm from '../../../resource/dengluye/queding.png';
import border from "../../../resource/dialog/border.png";
import register_title from '../../../resource/dengluye/register_title.png';
import login_title from '../../../resource/dengluye/login_title.png';
import reset_title from '../../../resource/dengluye/reset_title.png';

export const Dialog = styled.div`
    position: absolute;
    top:20%;
    left: 0;
    right: 0;
    margin:auto;
    width:320px;
    z-index:2000;
    visibility: hidden;
    opacity: 0;
    display:grid;
    &.show{
        visibility: visible;
        opacity: 1;
    }
    &.hidden{
        opacity: 0;
    }
    border: 2px solid;
    -webkit-border-image:url(${border}) 2;
    -o-border-image:url(${border}) 2;
    border-image: url(${border}) 2; 
`;

export const DialogTop = styled.div`
    background: url('${top}') center no-repeat 
    background-size:100% 100%;
`;

export const RegisterTitle = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${register_title}') center no-repeat;
    background-size:100% 100%;
`;

export const LoginTitle = styled.div`
    width: 60px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${login_title}') center no-repeat;
    background-size:100% 100%;
`;

export const ResetTitle = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${reset_title}') center no-repeat;
    background-size:100% 100%;
`;

export const DialogContent = styled.div`
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1b4084,#1f263a);
`;

export const Close = styled.img.attrs({
    src:`${close}`
})`
    width:65px;
    position:absolute;
    z-index:2000;
    top: 0;
    right: 0;
`;

export const LoginDialog = styled(Dialog)`
grid-template-rows: 37px auto;
`;

export const RegisterDialog = styled(Dialog)`
grid-template-rows: 37px auto;
`;

export const ResetDialog = styled(Dialog)`
grid-template-rows: 37px auto;
`;

export const Input = styled.div`
    position:relative;
    z-index:1000;
    text-align: center;
    color:#e6e6e6;
    font-size:16px;
    font-weight: 300;
    margin-top:5%;
    height:26px;
   
    label{
    vertical-align: middle;
    display: inline-block;
    width: 75px;
    }
    input{
    width: 63%;
    background-color:#17233a;
    border: 1px #cbd080 solid;
    color: white;
    height:22px;
    border-radius: 2px;
    text-align:center
    }
    .verify-input{
        width:34%;
        height: 22px;
    }
    .verify-button{
        height:26px;
        vertical-align: middle;
        background:#f1eec4;
        border: none;
        border-radius: 2px;
        margin-left:2%;
        width:27%;
    }
`;

export const Reset = styled.span`
    font-weight: 300;
    font-size: 12px;
    color:white;
    display:block;
    float:right;
    margin:1% 8% 0;
    z-index: 10000;
    position: relative;
    text-decoration:underline;
`;

export const SubmitButton = styled.img.attrs({
    src:`${confirm}`
})`
    margin-top:4%;
    width:35%;
    z-index: 10000;
    position: relative;
    left:50%;
    transform: translateX(-50%);
`;