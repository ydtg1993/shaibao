import styled from 'styled-components';
import {Button, Dialog} from '../style';
import {MoneyDigital,MoneyInput} from '../../style';
import {SmallButton} from "../style";
import {img_home_exchange_title,img_home_exchange_focus} from '../../../../resource';

export const ExchangeDialog = styled(Dialog)`
    grid-template-rows: 37px 276px;
    margin:-156px auto 0;
`;

export const Title = styled.div`
    width: 65px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_exchange_title}') center no-repeat;
    background-size:100% 100%;
`;

export const ExchangeContent = styled.div`
    display:grid;
    grid-template-columns: 80px 240px;
    position: relative;
    z-index: 2001;
    overflow: hidden;
`;

export const Menu = styled.div`
    overflow-y: auto;
    background-color:#1f263a;
`;

export const Unit = styled.div`
    align-items: center;
    display: flex;
    background-color:#1f263a;
    height: 40px;
    font-size:14px;
    margin-bottom: 1px;
    position: relative;
    z-index: 2;
    &.focus{
    color:white;
    margin: 0;
    background: url('${img_home_exchange_focus}') center no-repeat 
    background-size:100% 100%;
    }
`;

export const UnitText = styled.span`
    width: 45px;
    line-height: 15px;
    margin: 0 auto;
    display: block;
`;

export const ExchangeContentSection = styled.div`
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1a3361,#202840);
    border-left: 1px solid #b0b93acc;
`;

export const ExchangeContentInfo = styled.div`
    width:239px;
    padding:10px 10px 0 10px;
    box-sizing: border-box;
`;

export const MyMoneyInput = styled.div`
    font-size: 14px;
    color: #f7fbc2;
    font-weight: 300;
`;

export const MoneySection = styled.div`
    margin-left:10px;
    position:relative;
    display: inline-block;
    vertical-align: middle;
`;

export const MoneyInput2 = styled(MoneyInput)`
    width: 130px;
    height: 24px;
`;

export const MoneyDigital2 = styled(MoneyDigital)`
    width: 100px;
    left: 35px;
    height: 24px;
    line-height: 24px;
    text-align: center;
`;

export const Description = styled.div`
    font-size: 12px;
    color: #a7a7a7;
    margin-top:4px;
`;

export const Input = styled.div`
    color: #faffaf;
    font-size: 14px;
    font-weight: 300;
    width:100%;
    input{
        padding:0;
        display: block;
        font-size: 12px;
        background-color:#17233a;
        border: 1px #faffaf solid;
        color: white;
        height:20px;
        border-radius: 2px;
        outline: none;
        text-align: center;
        margin:4px 0 0 0;
    }
`;

export const InputTitle = styled.span`
    margin:0;
    vertical-align: middle;
    display: inline-block;
    font-size: 14px;
    color: #f7fbc2;
    font-weight: 300;
`;

export const ExchangeMoneyInput = styled(Input)`
    margin-top: 15px;
    input{
        width: 150px;
    }
`;

export const CardInput = styled(Input)`
    margin-top: 15px;
        input{
        width: 100%;
    }
`;

export const ExchangeRecordButton = styled(SmallButton)`
    margin-left: 10px;
    width:48px;
`;

export const BindButton = styled(SmallButton)`
    margin-left: 10px;
    width: 38px;
`;

export const SubmitButton = styled(Button)`
    margin:25px auto 0;
`;