import styled from "styled-components";
import {Dialog, DialogContent, SmallButton} from "../style";
import {
    img_home_charge_title,
    img_home_charge_record_title,
    img_home_charge_money_sticker,
    img_home_charge_tag_up,
    img_home_charge_tag_alipay,
    img_home_charge_tag_wechat,
    img_home_charge_tag_scan,
    img_home_charge_tag_service,
    img_home_bet_record_blur,
    img_home_bet_record_focus
} from '../../../../resource';

export const ChargeDialog = styled(Dialog)`
    grid-template-rows: 37px 37px 398px;
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1b4084,#1f263a);
    margin: -236px auto 0; 
`;

export const ChargeRecordDialog = styled(Dialog)`
    grid-template-rows: 37px 295px;
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1b4084,#1f263a);
    margin:-166px auto 0;
`;

export const DialogContent2 = styled(DialogContent)`
    display:grid;
    grid-template-rows: 35px 260px;
`;

export const Title = styled.div`
    width: 100px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_charge_title}') center no-repeat;
    background-size:100% 100%;
`;

export const ChargeRecordTitle = styled.div`
    width: 100px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_charge_record_title}') center no-repeat;
    background-size:100% 100%;
`;

export const MoneySticker = styled.img.attrs({
    src: `${img_home_charge_money_sticker}`
})`
    width:70px;
    height:36px;
    position:absolute;
    left:5px;
    top:0;
`;

export const ChargeNav = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    z-index: 2001;
`;

export const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
    height:37px;
    line-height:37px;
    background: url('${img_home_bet_record_blur}') center no-repeat;
    &.focus{background: url('${img_home_bet_record_focus}') center no-repeat;background-size: contain;}
`;

export const TabIcon = styled.img`
    margin-right:8px;
`;

export const TabIconScan = styled(TabIcon).attrs({
    src: `${img_home_charge_tag_scan}`
})`width:20px;`;

export const TabIconUp = styled(TabIcon).attrs({
    src: `${img_home_charge_tag_up}`
})`width:26px;`;

export const ChargeContent = styled.div`
    display:grid;
    grid-template-rows: 338px 60px;
`;

export const ChargeContentInfo = styled.div`
    padding:7px 7px 0 7px;
    height:100%;
    box-sizing: border-box;
    display:grid;
    grid-template-rows: 300px 33px;
`;

export const ChargeListContentInfo = styled.div`
    padding:15px;
    height:100%;
    box-sizing: border-box;
    overflow-y:auto;
`;

export const BankCard = styled.div`
    height:70px;
    border-radius:12px;
    background-image: linear-gradient(to right,#abc9ff,#5c8bf5);
    color:white;
    display:grid;
    grid-template-columns:70px auto;
    padding:12px;
    margin-top:12px;
    &:first-child{margin-top:0;}
`;

export const BankTitle = styled.div`
    font-size: 22px;
    font-weight: 400;
    float:left;
    margin-top:15px;
`;

export const BankInfo = styled.div`
    float:left;
`;

export const BankInfoTitle = styled.div`
    font-size: 12px;
    float:left;
    font-weight: 400;
`;

export const BankInfoType = styled.div`
    font-size: 12px;
    float:right;
    font-weight: 400;
`;

export const BankInfoRange = styled.div`
    font-size: 16px;
    margin-top:30px;
    font-weight: 400;
`;

export const Floor = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:8px;
    &:first-child{margin-top:0;}
`;

export const LeftFloor = styled(Floor)`
    justify-content:flex-start;
`;

export const LastFloor = styled(Floor)`
    margin:0;
`;

export const InputTitle = styled.span`
    font-size: 14px;
    color: #f7fbc2;
    font-weight: 600;
`;

export const Input = styled.input`
    padding:0 0 0 3px;
    width: 58%;
    display: block;
    font-size: 12px;
    background-color:#131a29;
    border: 1px #5e5f5c solid;
    color: white;
    height:20px;
    border-radius: 2px;
    outline: none;
`;

export const ClearButton = styled(SmallButton)`
    width: 40px;
    line-height: 20px;
    height:22px;
    span{
        font-size:12px;
    }
`;

export const MoneyButton = styled(SmallButton)`
    width:55px;
    height:26px;
    line-height: 24px;
    img{
        border-radius:5px;
    }
    span{
        font-size:14px;
    }
`;

export const ChargeRecordButton = styled(SmallButton)`
    width:80px;
    height:26px;
    line-height: 24px;
    img{
        border-radius:5px;
    }
    span{
        font-size:12px;
    }
`;

export const SubmitButton = styled(SmallButton)`
    width: 90px;
    height: 32px;
    line-height: 30px;
    margin: 13px auto 0;
    display:block;
    img{
        border-radius:7px;
    }
    span{
        font-size:15px;
    }
`;

export const Text= styled.span`
    font-size:12px;
    color:white;
`;

export const A = styled(Text)`
    text-decoration:underline;
    &.big{font-size:16px;}
`;

export const Service = styled.img.attrs({
    src:`${img_home_charge_tag_service}`
})`
    vertical-align: text-bottom;
    width:20px;
    height:20px;
`;

export const ScanSec = styled.div`
    width:160px;
    height:100px;
    margin-left:12px;
    background-color:white;
    display:flex;
    justify-content: center;
    align-items: center
`;

export const QrCode = styled.img`
    width:85px;
    height:85px;
`;

export const ScanTagList = styled.div`
    width:60px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height:85px;
`;

export const ScanTag = styled.img`
    width:25px;
    height:25px;
`;

export const ScanTagUp = styled(ScanTag).attrs({
    src:`${img_home_charge_tag_up}`
})`width:30px;height:22px;`;

export const ScanTagWechat = styled(ScanTag).attrs({
    src:`${img_home_charge_tag_wechat}`
})``;

export const ScanTagAlipay = styled(ScanTag).attrs({
    src:`${img_home_charge_tag_alipay}`
})``;

export const Tips = styled.div`
    font-size: 10px;
    color: #f7fbc2;
`;

export const EspecialTips = styled.span`
    font-size: 10px;
    color: #ff7f7f;
`;

export const ChargeBottom = styled.div`
    background-image: radial-gradient(ellipse farthest-corner at 150px 220px,#39426e,#191d30);
`;

export const ExpandQrcodeBg = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 10001;
    background-color:rgba(0, 0, 0, 0.8);
    &.show{
        visibility: visible;
        opacity: 1;
    }
    &.hidden{
        opacity: 0;
    }
`;

export const ExpandBoard = styled.div`
    width: 320px;
    height: 355px;
    position: absolute;
    z-index: 10001;
    left: 0;
    right: 0;
    top: 50%;
    margin: -192.5px auto 0;
`;

export const ExpandQrcode = styled.img`
    width: 320px;
    height: 320px;
`;

export const Cross = styled.div`
    float: right;
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-bottom:3px;
    background: linear-gradient(45deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,#fff 45%,#fff 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%), linear-gradient(135deg,#f56b0000 0%,#f56b0000 43%,#fff 45%,#fff 55%,#f56b0000 57%,#f56b0000 100%);
`;