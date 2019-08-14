import styled from 'styled-components';

import gonggao_bg from '../../../resource/zhujiemian/gonggao.png';


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
