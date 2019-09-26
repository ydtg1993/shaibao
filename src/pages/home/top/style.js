import styled from 'styled-components';
import tou_bg from '../../../resource/zhujiemian/tou bg.png';
import gold from '../../../resource/zhujiemian/jinbi.png'
import mn_bg from '../../../resource/zhujiemian/input-beijin.png';
import charge from '../../../resource/zhujiemian/chongzhi.png';

export const TopFloor = styled.div`
    background: url('${tou_bg}') no-repeat;  
    background-size: 100% 100%;
    display:grid;
    grid-template-columns: auto 160px 15%;
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
    margin-left:5px;
    height: 31px;
    width:31px;
    vertical-align: top;
`;

export const UserInfo = styled.div`
    width: 70%;
    height: 30px;
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
    width: 100%;
    outline-style: none;
    text-align: right;
    padding-right: 25px;
    line-height: 25px;
    height: 25px;
    border-radius: 1em;
    background-image:url('${mn_bg}');
    background-size:contain;
    color: #e8ef78;
    font-weight: 200;
`;

export const MoneyGold = styled.img.attrs({
    src: `${gold}`
})`
   width:40px 
   height: 25px;
   position: absolute;
   left: 0;
   z-index: 5;
`;

export const MoneyCharge = styled.img.attrs({
    src: `${charge}`
})`
   width:25px 
   height: 25px;
   position: absolute;
   right: 0;
   z-index: 5;
`;


