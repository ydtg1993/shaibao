import styled from 'styled-components';
import bg from '../../resource/dengluye/bg.jpg';
import login from '../../resource/dengluye/zhanghaodenglu.png';
import register from '../../resource/dengluye/zhuce.png';
export const LoginWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0px;  
    bottom: 0px;  
    background: url('${bg}') no-repeat;  
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
    background: url('${login}') no-repeat;  
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
    background: url('${register}') no-repeat;  
    background-size: 100%, auto;
    outline:none;
`;

