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
    background-size:100% 100%;
`;

export const BottomTabList = styled.div`
    display: grid;
    width:100%;
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


export const BottomTabMain = styled.div`
    position:relative;
`;

export const BottomTabMainImg = styled.img.attrs({
    src: `${img_home_bottom_tag_rank}`
})`
    position:absolute;
    width:60%;
    top:10%;
    transform: translateY(-50%) translateX(-50%);
    left:50%;
`;
