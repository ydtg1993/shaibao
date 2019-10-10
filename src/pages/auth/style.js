import styled from 'styled-components';
import * as IMG from '../../resource/';

export const LoginWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0px;  
    bottom: 0px;  
    background: url('${IMG.img_auth_bg}') no-repeat;  
    background-size: 100%, 100%;
    z-index: 0;  
    overflow:hidden;
`;

export const LoginButton = styled.button`
    width:200px;
    height:65px;
    display:block;
    border-radius: 25px;
    border:none;
    margin:85% auto 0;
    background: url('${IMG.img_auth_login}') no-repeat;  
    background-size: 100%, auto;
    outline:none;
`;

export const RegisterButton = styled.button`
    width:200px;
    height:65px;
    display:block;
    border-radius: 25px;
    border:none;
    margin:30px auto;
    background: url('${IMG.img_auth_register}') no-repeat;  
    background-size: 100%, auto;
    outline:none;
`;

