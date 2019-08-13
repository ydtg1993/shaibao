import styled from 'styled-components';
import bg from '../../resource/zhujiemian/bg.jpg';
import tou_bg from '../../resource/zhujiemian/tou bg.png';

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
    grid-template-rows: 8% 8% 11% 65% 8%;
`;

export const TopFloor = styled.div`
    background: url('${tou_bg}') no-repeat;  
    background-size: 100% 100%;
`;

export const AnnouncementFloor = styled.div`
   
`;

export const Announcement = styled.img`
    display:inline-block;
    position:relative;
    width:100%;
    top: 50%;
    transform: translateY(-50%);
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
    width:70%;
    position:relative;
    margin:0 auto;
    top: 50%;
    transform: translateY(-50%);
`;


export const RoomFloor = styled.div`
   
`;

export const BottomFloor = styled.div`
    
`;
