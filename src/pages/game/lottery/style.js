import styled from 'styled-components';
import {
    img_game_cup_cover,
    img_game_cup_base
} from '../../../resource';

export const ShaiBao = styled.div`
    width:100%;
    height:100%;
    position: absolute;
    z-index:9999; 
`;

export const Cover = styled.img.attrs({
    src:`${img_game_cup_cover}`
})`
    margin-top: 226px;
    width:160px;
    left: 50%;
    margin-left: -80px;
    position: relative; 
    z-index:20000; 
    opacity: 0;
    visibility: hidden;
   
    &.show {
        opacity: 1;
        visibility: visible;
    }
`;

export const Chassis = styled.div`
    background: url('${img_game_cup_base}') center no-repeat 
    background-size:100% auto;
    height:130px;
    left: 50%;
    margin-top:-125px;
    margin-left: -80px;
    width:160px;
    position: relative;  
    z-index:19990;  
    opacity: 0;
    visibility: hidden;
    
    &.show {
        opacity: 1;
        visibility: visible;
    }
`;

export const Dice = styled.img`
    width:35px;
    height:35px;
    position:relative;
`;

export const Dice1 = styled(Dice)`
    top:15px;
    left: 50%;
    transform: translateX(-50%);
`;

export const Dice2 = styled(Dice)`
    top: 52px;
    left: 2px;
`;

export const Dice3 = styled(Dice)`
    top: 49px;
    left: 26px;
`;

