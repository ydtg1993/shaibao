import styled from 'styled-components';
import tou_bg from '../../../resource/zhujiemian/tou bg.png';
import mn_bg from '../../../resource/zhujiemian/jinbikuang.png'

export const TopFloor = styled.div`
    background: url('${tou_bg}') no-repeat;  
    background-size: 100% 100%;
    display:grid;
    grid-template-columns: 1fr 1fr 14%;
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
    height: 83%;
    width:auto;
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
`;

export const MoneySection = styled.div`
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const MoneyBg = styled.div`
    width: 100%;
    height: 80%;
    background: url('${mn_bg}') center no-repeat 
    background-size:100%;
`;
