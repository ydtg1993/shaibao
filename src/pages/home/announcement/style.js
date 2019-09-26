import styled from 'styled-components';

import gonggao_bg from '../../../resource/zhujiemian/gonggao.png';


export const AnnouncementFloor = styled.div`
   
`;

export const Announcement = styled.div`
    display:inline-block;
    position:relative;
    width: 80%;
    padding-left: 50px;
    height:22px;
    line-height: 22px;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left:50%;
    background: url('${gonggao_bg}') no-repeat;  
    background-size: 100% 22px;    
    color:white;
    font-weight: 300;
    & div{overflow: hidden;}
`;

export const Text = styled.span`
    display: inline-block;
    color:#f5f5f5;
    font-weight: 300;
    position:relative;
`;
