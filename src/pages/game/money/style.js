import styled from 'styled-components';
import {MoneyDigital, MoneyInput} from "../../home/style";
import {img_game_section3} from '../../../resource';

export const MoneyWrapper = styled.div`
    background: url('${img_game_section3}') center no-repeat 
    background-size:100% 101%;
`;

export const MoneySection = styled.div`
    width:160px;
    margin:3px auto;
    position:relative;
`;

export const MoneyInput2 = styled(MoneyInput)`
    width: 150px;
    left:5px;
`;

export const MoneyDigital2 = styled(MoneyDigital)`
    width: 100px;
    left: 35px;
    text-align: right;
`;