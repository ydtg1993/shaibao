import styled from 'styled-components';

export const Bg = styled.img`
    width:100%;
    position: absolute;
    z-index:1000;
`;

export const Close = styled.img`
    width:25%;
    position:absolute;
    z-index:1000;
    top: 2px;
    right: 1px;
`;

export const Dialog = styled.div`
    position: absolute;
    top:25%;
    left: 0;
    right: 0;
    margin:auto;
    width:85%;
    z-index:1000;
    visibility: hidden;
    opacity: 0;
    display:grid;
    grid-template-rows: 26% auto;
    &.show{
        visibility: visible;
        opacity: 1;
    }
    &.hidden{
        opacity: 0;
    }
`;

export const LoginDialog = styled(Dialog)`

`;

export const RegisterDialog = styled(Dialog)`
grid-template-rows: 15% auto;
`;

export const ResetDialog = styled(Dialog)`
grid-template-rows: 18% auto;
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

export const SubmitButton = styled.img`
    margin-top:4%;
    width:35%;
    z-index: 10000;
    position: relative;
    left:50%;
    transform: translateX(-50%);
`;