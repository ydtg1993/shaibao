import styled from 'styled-components';
import {img_home_announcement_hr,img_home_horn} from '../../../resource';

export const AnnouncementFloor = styled.div`
    
`;

export const Announcement = styled.div`
    display:inline-block;
    position:relative;
    padding-left: 42px;
    width:80%;
    height:22px;
    line-height: 22px;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left:50%;
    background: url('${img_home_announcement_hr}') no-repeat;  
    background-size: 100% 22px;    
    color:white;
    font-weight: 300;
    & div{overflow: hidden;}
`;

export const Horn = styled.img.attrs({
    src:`${img_home_horn}`
})`
    width: 33px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 2px;
`;

export const Text = styled.span`
    color:#f5f5f5;
    font-weight: 300;
    position:relative;
    white-space: nowrap; 
    display: inline-block;
`;
