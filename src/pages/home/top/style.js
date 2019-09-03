import styled from 'styled-components';
import tou_bg from '../../../resource/zhujiemian/tou bg.png';
import gold from '../../../resource/zhujiemian/jinbi.png'
import mn_bg from '../../../resource/zhujiemian/input-beijin.png';
import charge from '../../../resource/zhujiemian/chongzhi.png';

export const TopFloor = styled.div`
    background: url('${tou_bg}') no-repeat;  
    background-size: 100% 100%;
    display:grid;
    grid-template-columns: 1fr 1fr 15%;
    grid-auto-rows: 100%;
`;

export const UserSection = styled.div`
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Avatar = styled.img`
    display:inline-block;
    height: 30px;
    width:30px;
`;

export const UserInfo = styled.div`
    width: 70%;
    height: 83%;
    margin-left:2%;
    display:inline-block;
`;

export const Username = styled.div`
    color: #e8ef78;
    font-size: 12px;
    padding-left: 6px;
    font-weight: 300;
    height: 12px;
    line-height: 12px;
`;

export const Line = styled.img`
    width:100%;
    display: list-item;
`;

export const UserId = styled.div`
    color: #f9fea7;
    font-size: 12px;
    padding-left: 6px;
    font-weight: 300;
    height: 12px;
    line-height: 12px;
`;

export const MoneySection = styled.div`
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position:relative;
`;

export const MoneyInput = styled.div`
    width: 85%;
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
   left: 0;
`;

export const MoneyCharge = styled.img.attrs({
    src: `${charge}`
})`
   height: 1.6em;
   position: absolute;
   right: 0;
`;


