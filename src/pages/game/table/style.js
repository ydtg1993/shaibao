import styled from 'styled-components';
import bg from '../../../resource/youxijiemian/section2.png';
import period from '../../../resource/youxijiemian/period.png';
import pan from '../../../resource/youxijiemian/pan.png';

export const TableWrapper = styled.div`
    background: url('${bg}') center no-repeat 
    background-size:100% 101%;
    display:grid;
    grid-template-rows: 48% auto;
`;

export const Up = styled.div`
    display:grid;
    grid-template-columns: 32% 36% 32%;
`;

export const Left = styled.div`
    padding-left:5px;
    padding-right:5px;
   
`;

export const Middle = styled.div`
    
`;

export const Period = styled.div`
    padding:2px
    background: url('${period}') center no-repeat 
    background-size:100% 100%;
`;

export const Title = styled.p`
    text-align:center;
    color:white;
    margin:0;
    font-size: 13px;
    font-weight:200;
    letter-spacing:1px
`;

export const TimeLine = styled.p`
    text-align:center;
    color:white;
    letter-spacing:1px;
    font-weight:600;
    font-size: 18px;
    margin:0;
    margin-block-start: 0;
    margin-block-end: 0;
`;

export const Pan = styled.div`
    height:95px;
    position:relative;
    overflow: hidden;
`;

export const PanDick = styled.img.attrs({
    src:`${pan}`
})`
     position:absolute;
     left: 50%;
     top: -5px;
     width:100px;
     margin-left: -50px;
`;

export const Right = styled.div`
    padding-left:5px;
    padding-right:5px;
`;

export const Down = styled.div`
    display:grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    padding:5px;
`;

export const Plate = styled.div`
    height:42%;
    background:#284c80;
    border:2px #2a6792 solid;
    margin-top:7%;
    position:relative;
    &:first-child{margin-top:0;}
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
    z-index:10000;
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

export const SSText = styled(SText)`
    width:22px;
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
    left: 27%;
    transform: translateX(-50%);
`;

export const Dice3 = styled(Dice)`
    top: 32px;
    left: 36%;
    transform: translateX(-50%);
`;