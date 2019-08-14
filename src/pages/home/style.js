import styled from 'styled-components';
import bg from '../../resource/zhujiemian/bg.jpg';
import tou_bg from '../../resource/zhujiemian/tou bg.png';
import di_bg from '../../resource/zhujiemian/di_bg.png';
import gonggao_bg from '../../resource/zhujiemian/gonggao.png';

export const HomeWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0px;  
    bottom: 0px;  
    background: url('${bg}') no-repeat;  
    background-size: 100%, 100%;
    z-index: 0;  
    overflow:hidden;
    display: grid;
    grid-template-rows: 7% 7% 11% 67% 8%;
`;

export const TopFloor = styled.div`
    background: url('${tou_bg}') no-repeat;  
    background-size: 100% 100%;
`;

export const AnnouncementFloor = styled.div`
   
`;

export const Announcement = styled.div`
    display:inline-block;
    position:relative;
    width:95%;
    height:22px;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left:50%;
    background: url('${gonggao_bg}') no-repeat;  
    background-size: 100%, 100%;
`;

export const NavigationFloor = styled.div`
   
`;

export const TabList = styled.div`
    display: grid;
    width：100%;
    height:100%;
    grid-template-columns:25% 25% 25% 25%;
`;

export const NavigationTab = styled.img`
    width:65%;
    position:relative;
    margin:0 auto;
    top: 50%;
    transform: translateY(-50%);
`;

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
    width:32%;
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
    top:5%;
    transform: translateY(-50%) translateX(-50%);
    left:50%;
`;
