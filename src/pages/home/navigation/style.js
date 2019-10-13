import styled from 'styled-components';
import {img_home_navigation_1} from '../../../resource';
import {img_home_navigation_2} from '../../../resource';
import {img_home_navigation_3} from '../../../resource';
import {img_home_navigation_4} from '../../../resource';

export const NavigationFloor = styled.div`
   
`;

export const TabList = styled.div`
    display: flex;
    height:100%;
    align-items: center;
`;

export const NavigationTab = styled.img`
    width:55px;
    height:53px;
    position:relative;
    margin:0 auto;
`;

export const NavigationTab1 = styled(NavigationTab).attrs({
    src:`${img_home_navigation_1}`
})``;

export const NavigationTab2 = styled(NavigationTab).attrs({
    src:`${img_home_navigation_2}`
})``;

export const NavigationTab3 = styled(NavigationTab).attrs({
    src:`${img_home_navigation_3}`
})``;

export const NavigationTab4 = styled(NavigationTab).attrs({
    src:`${img_home_navigation_4}`
})``;
