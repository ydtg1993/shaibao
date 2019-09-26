import styled from 'styled-components';
import bg from '../../../resource/youxijiemian/section4.png';

import chip1 from '../../../resource/youxijiemian/bet1.png';
import chip2 from '../../../resource/youxijiemian/bet2.png';
import chip3 from '../../../resource/youxijiemian/bet3.png';
import chip4 from '../../../resource/youxijiemian/bet4.png';
import chip5 from '../../../resource/youxijiemian/bet5.png';
import chip6 from '../../../resource/youxijiemian/bet6.png';

export const BetWrapper = styled.div`
    background: url('${bg}') center no-repeat 
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
    background: url('${chip1}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip2 = styled(Chip)`
    background: url('${chip2}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip3 = styled(Chip)`
    background: url('${chip3}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip4 = styled(Chip)`
    background: url('${chip4}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip5 = styled(Chip)`
    background: url('${chip5}') center no-repeat 
    background-size:100% 100%;
`;

export const Chip6 = styled(Chip)`
    background: url('${chip6}') center no-repeat 
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
    background: url('${chip1}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip2 = styled(BetChip)`
    background: url('${chip2}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip3 = styled(BetChip)`
    background: url('${chip3}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip4 = styled(BetChip)`
    background: url('${chip4}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip5 = styled(BetChip)`
    background: url('${chip5}') center no-repeat 
    background-size:100% 100%;
`;

export const BetChip6 = styled(BetChip)`
    background: url('${chip6}') center no-repeat 
    background-size:100% 100%;
`;