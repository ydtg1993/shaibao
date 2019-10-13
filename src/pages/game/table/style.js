import styled from 'styled-components';
import {
    img_game_section2,
    img_game_period_bg,
    img_game_period_dice_base,
} from '../../../resource'

export const TableWrapper = styled.div`
    background: url('${img_game_section2}') center no-repeat 
    background-size:100% 101%;
    display:grid;
    grid-template-rows: 45% auto;
`;

export const Up = styled.div`
    display:grid;
    grid-template-columns: 32% 36% 32%;
`;

export const Left = styled.div`
    padding:0 5px 0 5px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Middle = styled.div`
    position:relative;
    overflow: hidden;
    height:100%;
`;

export const Period = styled.div`
    padding:2px
    background: url('${img_game_period_bg}') center no-repeat 
    background-size:100% 100%;
`;

export const Title = styled.p`
    text-align:center;
    color:white;
    margin:0;
    font-size: 13px;
    font-weight:300;
    letter-spacing:1px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const TimeLine = styled.p`
    text-align:center;
    color:white;
    letter-spacing:1px;
    font-weight:500;
    font-size: 18px;
    margin:0;
    margin-block-start: 0;
    margin-block-end: 0;
`;

export const Pan = styled.div`
    
`;

export const PanDick = styled.img.attrs({
    src:`${img_game_period_dice_base}`
})`
    position:absolute;
    width: 90px;
    margin: 0 auto;
    left: 0;
    right: 0;
`;

export const Right = styled(Left)`

`;

export const Down = styled.div`
    display:grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    padding:5px;
`;

export const Plate = styled.div`
    height:45%;
    background:#284c80;
    border:2px #2a6792 solid;
    position:relative;
`;

export const SPlate = styled.div`
    background:#284c80;
    border:2px #2a6792 solid;
    position:relative;
`;

export const Placeholder = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    position:absolute;
    z-index:1900;
`;

export const Text = styled.img`
    width:25px;
    display: block;
    margin:4px auto;
    position:relative;
    z-index:1;
`;

export const SText = styled(Text)`
    width:23px;
    position:relative;
    z-index:1;
`;

export const Tip = styled.div`
    font-size:12px;
    text-align: center;
    color: aliceblue;
    font-weight: 300;
    position:relative;
    z-index:1;
`;

export const Bets = styled.div`
    position: absolute;
`;

export const Dice = styled.img`
    width:18px;
    height:18px;
    position:relative;
`;

export const Dice1 = styled(Dice)`
    top:14px;
    left: 50%;
    transform: translateX(-50%);
`;

export const Dice2 = styled(Dice)`
    top: 36px;
    left: calc(50% - 30px);
    transform: translateX(-50%);
`;

export const Dice3 = styled(Dice)`
    top: 32px;
    left: calc(50% - 20px);
    transform: translateX(-50%);
`;