import styled from 'styled-components';
import {
    img_game_section4,
    img_game_bet1,
    img_game_bet2,
    img_game_bet3,
    img_game_bet4,
    img_game_bet5,
    img_game_bet6,
} from '../../../resource';

export const BetWrapper = styled.div`
    background: url('${img_game_section4}') center no-repeat 
    background-size:100% 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const Chip = styled.div`
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    display:block;
    margin:12px auto;
    font-size: 12px;
    color: #313169;
    font-weight: 500;
    &.choice{    
    box-shadow: 0 0 10px #efff00;
    border-radius: 100%;}
`;

export const Chip1 = styled(Chip)`
    background: url('${img_game_bet1}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip2 = styled(Chip)`
    background: url('${img_game_bet2}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip3 = styled(Chip)`
    background: url('${img_game_bet3}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip4 = styled(Chip)`
    background: url('${img_game_bet4}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip5 = styled(Chip)`
    background: url('${img_game_bet5}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip6 = styled(Chip)`
    background: url('${img_game_bet6}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip = styled.div`
    width:16px;
    height:16px;
    line-height:16px;
    font-size:8px;
    text-align: center;
    color: #313169;
    letter-spacing:-1px;
`;

export const BetChip1 = styled(BetChip)`
    background: url('${img_game_bet1}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip2 = styled(BetChip)`
    background: url('${img_game_bet2}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip3 = styled(BetChip)`
    background: url('${img_game_bet3}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip4 = styled(BetChip)`
    background: url('${img_game_bet4}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip5 = styled(BetChip)`
    background: url('${img_game_bet5}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip6 = styled(BetChip)`
    background: url('${img_game_bet6}') center no-repeat 
    background-size:100% 100%;
`;