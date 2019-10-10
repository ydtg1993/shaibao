import styled from 'styled-components';
import {MoneyDigital, MoneyInput} from "../style";
import {img_home_top_nav_bg,img_home_avatar_hr} from '../../../resource';

export const TopFloor = styled.div`
    background: url('${img_home_top_nav_bg}') no-repeat;  
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

export const Line = styled.img.attrs({
    src:`${img_home_avatar_hr}`
})`
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

export const MoneyInput2 = styled(MoneyInput)`
    width: 140px;
`;

export const MoneyDigital2 = styled(MoneyDigital)`
    width: 98px;
    left: 5px;
    text-align: right;
`;


