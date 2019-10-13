import styled from 'styled-components';
import {
    img_home_bottom_bg,
    img_home_bottom_tag_1,
    img_home_bottom_tag_2,
    img_home_bottom_tag_3,
    img_home_bottom_tag_4,
    img_home_bottom_tag_rank
} from '../../../resource';

export const BottomFloor = styled.div`
    background: url('${img_home_bottom_bg}') center no-repeat 
    background-size: 100% 85%;
    background-position: bottom;
`;

export const BottomTabList = styled.div`
    display: flex;
    height:92%;
    flex-wrap: nowrap;
    justify-content:space-between;
    align-items:flex-end;
    padding:0 10px 0 10px;
`;

export const BottomTab = styled.img`
    width: 5.5%;
    max-width:42px;
`;

export const BottomTab1 = styled(BottomTab).attrs({
    src: `${img_home_bottom_tag_1}`
})``;

export const BottomTab2 = styled(BottomTab).attrs({
    src: `${img_home_bottom_tag_2}`
})``;

export const BottomTab3 = styled(BottomTab).attrs({
    src: `${img_home_bottom_tag_3}`
})``;

export const BottomTab4 = styled(BottomTab).attrs({
    src: `${img_home_bottom_tag_4}`
})``;

export const BottomTabMain = styled.img.attrs({
    src: `${img_home_bottom_tag_rank}`
})`
    width:20%;
    max-width:160px;
`;
