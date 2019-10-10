import styled from 'styled-components';
import * as IMG from '../../../resource/';

export const Dialog = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top:50%;
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
    -webkit-border-image:url(${IMG.img_dialog_border}) 2;
    -o-border-image:url(${IMG.img_dialog_border}) 2;
    border-image: url(${IMG.img_dialog_border}) 2; 
`;

export const DialogTop = styled.div`
    background: url('${IMG.img_dialog_top}') center no-repeat 
    background-size:100% 100%;
`;

export const RegisterTitle = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${IMG.img_auth_register_title}') center no-repeat;
    background-size:100% 100%;
`;

export const LoginTitle = styled.div`
    width: 60px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${IMG.img_auth_login_title}') center no-repeat;
    background-size:100% 100%;
`;

export const ResetTitle = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${IMG.img_auth_reset_title}') center no-repeat;
    background-size:100% 100%;
`;

export const DialogContent = styled.div`
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1b4084,#1f263a);
`;

export const Close = styled.img.attrs({
    src:`${IMG.img_dialog_close}`
})`
    width:65px;
    position:absolute;
    z-index:2000;
    top: 0;
    right: 0;
`;

export const LoginDialog = styled(Dialog)`
    grid-template-rows: 37px 156px;
    margin:-96px auto 0;
`;

export const RegisterDialog = styled(Dialog)`
    grid-template-rows: 37px 282px;
    margin:-159px auto 0;
`;

export const ResetDialog = styled(Dialog)`
    grid-template-rows: 37px 240px;
    margin:-138px auto 0;
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
    text-align:center;
    outline: none;
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
    src:`${IMG.img_auth_commit_button}`
})`
    margin-top:4%;
    width:35%;
    z-index: 10000;
    position: relative;
    left:50%;
    transform: translateX(-50%);
`;