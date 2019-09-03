import styled from 'styled-components';
import bg from '../../../resource/youxijiemian/section4.png';

export const BetWrapper = styled.div`
    background: url('${bg}') center no-repeat 
    background-size:100% 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const Chip = styled.img`
    height:32px;;
    display:block;
    margin:12px auto;
    &.choice{    
    box-shadow: 0 0 10px #efff00;
    border-radius: 100%;}
`;