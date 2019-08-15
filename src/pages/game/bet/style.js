import styled from 'styled-components';
import bg from '../../../resource/youxijiemian/section4.png';

export const BetWrapper = styled.div`
    background: url('${bg}') center no-repeat 
    background-size:100% 100%;
    display: grid;
    padding:3% 5% 3%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const Chip = styled.img`
    height:100%;
    display:block;
    margin:0 auto;
`;