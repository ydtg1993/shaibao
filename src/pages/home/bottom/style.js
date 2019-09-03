import styled from 'styled-components';
import di_bg from '../../../resource/zhujiemian/di_bg.png';

export const BottomFloor = styled.div`
    background: url('${di_bg}') center no-repeat 
    background-size:100% 100%;
`;

export const BottomTabList = styled.div`
    display: grid;
    width：100%;
    height:100%;
    grid-template-columns:17% 17% 32% 17% 17%;
`;

export const BottomTab = styled.img`
    width: 20px;
    height:30px;
    position:relative;
    margin:0 auto;
    top: 60%;
    transform: translateY(-50%);
`;

export const BottomTabMain = styled.div`
    position:relative;
`;

export const BottomTabMainImg = styled.img`
    position:absolute;
    width:60%;
    top:10%;
    transform: translateY(-50%) translateX(-50%);
    left:50%;
`;
