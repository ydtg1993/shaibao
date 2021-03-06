import styled from 'styled-components';
import {img_home_bg,img_money_input_bg,img_money_charge,img_money_gold_tag} from '../../resource';

export const HomeWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0px;  
    bottom: 0px;  
    background: url('${img_home_bg}') no-repeat;  
    background-size: cover;
    overflow:hidden;
    display: grid;
    grid-template-rows: 7% 6% 11% 66% 10%;
    grid-template-columns:100%;
`;

export const MoneySection = styled.div`
    height:100%;
    width:160px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position:relative;
`;

export const MoneyDigital = styled.span`
    display: inline-block;
    color: #e8ef78;
    position: relative;
    z-index: 5;
    height: 25px;
    line-height: 25px;
    left: 5px;
    text-align: right;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const MoneyInput = styled.img.attrs({
    src:`${img_money_input_bg}`
})`
    left: 10px;
    height: 25px;
    position: absolute;
`;

export const MoneyGold = styled.img.attrs({
    src: `${img_money_gold_tag}`
})`
   width: 36px;
   height: 24px;
   position: absolute;
   left: 0;
   z-index: 5;
`;

export const MoneyCharge = styled.img.attrs({
    src: `${img_money_charge}`
})`
   width:25px 
   height: 25px;
   position: absolute;
   right: 0;
   z-index: 5;
`;