import styled from 'styled-components';
import {Dialog} from '../style';
import title from "../../../../resource/zhujiemian/userinfo/title.png";
import mn_bg from "../../../../resource/zhujiemian/userinfo/money_bg.png";

export const UserInfoDialog = styled(Dialog)`
    grid-template-rows: 37px 220px 60px;
`;

export const Title = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${title}') center no-repeat;
    background-size:100% 100%;
`;

export const DialogInfoContent = styled.div`
    display:grid;
    grid-template-columns: 75px auto;
`;

export const AvatarSec = styled.div`
    background: #0d1b28;
    align-items: center;
    display: flex;
`;

export const ContentSec = styled.div`
    background-image: radial-gradient(ellipse farthest-corner at 120px 1000px,#39426e,#1f243c);
`;

export const DialogInfoBottom = styled.div`
    background-image: radial-gradient(ellipse farthest-corner at 150px 220px,#39426e,#191d30);
`;

export const Avatar = styled.img`
    display:inline-block;
    margin:0 auto;
    height: 50px;
    width:50px;
    vertical-align: top;
`;

export const Input = styled.div`
    width:180px;
    text-align: center;
    font-size: 15px;
    font-weight: 300;
    height: 22px;
    line-height: 22px;
    color:white;
`;

export const NameInput = styled(Input)`
    margin:25px auto 0;
    border: 2px solid;
    border: 1px #cbd080 solid;
    border-radius: 2px;
`;

export const MoneySection = styled(Input)`
    position: relative;
    margin: 15px auto 0;
`;

export const MoneyInput = styled.img.attrs({
    src:`${mn_bg}`
})`
    width: 165px;
    position: absolute;
    z-index: 1;
    left: 10px;
    height:26px;
`;

export const MoneyDigital = styled.span`
    color: #e8ef78;
    position:relative;
    z-index:5;
    height: 26px;
    line-height: 26px;
`;

export const AccountInput = styled(Input)`
    text-align: left;
    margin: 15px auto 0;
`;

export const CardInput = styled(AccountInput)``;

export const MobileInput = styled(AccountInput)``;

export const STitle = styled.span`
    font-size: 14px;
    color: #f0f5a2;
`;

export const SText = styled.span`
    font-size: 14px;
    color:white;
    display: inline-block;
    width: 90px;
    margin-left: 20px;
    color: white;
`;