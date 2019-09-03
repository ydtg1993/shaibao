import styled from 'styled-components';
import bg from '../../../resource/youxijiemian/section3.png';
import mn_bg from "../../../resource/zhujiemian/input-beijin.png";
import gold from "../../../resource/zhujiemian/jinbi.png";
import charge from "../../../resource/zhujiemian/chongzhi.png";

export const MoneyWrapper = styled.div`
    background: url('${bg}') center no-repeat 
    background-size:100% 101%;
`;

export const MoneySection = styled.div`
    width:150px;
    margin:3px auto;
    position:relative;
`;

export const MoneyInput = styled.div`
    width: 120px;
    outline-style: none;
    text-align: right;
    padding-right: 1.8em;
    line-height: 1.6em;
    height: 1.6em;
    border-radius: 1em;
    background-image:url('${mn_bg}');
    background-size:cover;
    color: #e8ef78;
    font-weight: 200;
`;

export const MoneyGold = styled.img.attrs({
    src: `${gold}`
})`
   height: 1.6em;
   position: absolute;
`;

export const MoneyCharge = styled.img.attrs({
    src: `${charge}`
})`
   height: 1.6em;
   position: absolute;
   right: 0;
   top: 0;
`;