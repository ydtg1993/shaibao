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
    height:35%;
    background: url('${period}') center no-repeat 
    background-size:100% 100%;
`;

export const Pan = styled.div`
    height:69%;
    background: url('${pan}') center no-repeat 
    background-size:100% auto;
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
    margin-top:9%
    &:first-child{margin-top:0;}
`;

export const SPlate = styled.div`
    background:#284c80;
    border:2px #2a6792 solid;
`;