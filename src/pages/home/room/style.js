import styled from 'styled-components';
import {img_home_room_1,img_home_room_2,img_home_room_3} from '../../../resource';

export const RoomFloor = styled.div`

`;

export const RoomList = styled.div`
    width:55%;
    margin:0 auto;
    height:100%;
    overflow:scroll;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar { width: 0 !important }
`;

export const Room = styled.img`
    display:block;
    width:100%;
    margin-top:5px;
`;

export const Room1 = styled(Room).attrs({
    src:`${img_home_room_1}`
})``;

export const Room2 = styled(Room).attrs({
    src:`${img_home_room_2}`
})``;

export const Room3 = styled(Room).attrs({
    src:`${img_home_room_3}`
})``;

