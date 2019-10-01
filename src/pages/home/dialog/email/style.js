import styled,{ createGlobalStyle } from 'styled-components';
import {Dialog,Button} from "../style";
import MyFont from '../../../../resource/heiguiti.otf';
import email_light_line from '../../../../resource/zhujiemian/email/bg1.png';
import email_dark_line from '../../../../resource/zhujiemian/email/bg2.png';
import envelope_opened from '../../../../resource/zhujiemian/email/opened.png';
import envelope_closed from '../../../../resource/zhujiemian/email/mail.png';
import envelope_readed from '../../../../resource/zhujiemian/email/readed.png';
import envelope_read from '../../../../resource/zhujiemian/email/click.png';
import envelope_coin from '../../../../resource/zhujiemian/email/coin.png';
import envelope_coin_readed from '../../../../resource/zhujiemian/email/unaccalimed.png';
import list_title from '../../../../resource/zhujiemian/email/list_title.png';
import info_title from '../../../../resource/zhujiemian/email/info_title.png';

export const GlobalStyle = createGlobalStyle`
body {
  @font-face {
     font-family: 'MyFont';
     src: url('${MyFont}');
  }
}
`;

export const EmailDialog = styled(Dialog)`
    grid-template-rows: 37px 330px;
`;

export const ListTitle = styled.div`
    width: 56px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${list_title}') center no-repeat;
    background-size:100% 100%;
`;

export const EmailDialogInfo = styled(Dialog)`
    grid-template-rows: 37px 269px 60px;
`;

export const InfoTitle = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${info_title}') center no-repeat;
    background-size:100% 100%;
`;

export const EmailDialogInfoContent = styled.div`
    overflow-y: scroll;
    position:relative;
    z-index:2001;
    padding:2px;
    color:white;
    background-image: radial-gradient(80% 60%, #1d499a,#1f263a);
`;

export const EmailDialogInfoBottom = styled.div`
    background-image: radial-gradient(ellipse farthest-corner at 150px 220px,#39426e,#191d30);
`;

export const EmailContent = styled.div`
    padding:5px;
`;

export const EmailRemark = styled.div`
    padding-right:15px;
    text-align: right;
    & span{color:#fff80d}
`;

export const EmailList = styled.div`
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1b4084,#1f263a);
    position:relative;
    z-index: 2001;
    padding: 0 4px 0px 4px;
    overflow-y:scroll;
`;

export const Email = styled.div`
    height:45px;
    margin-top:2px;
    &.read{
        background: url('${email_light_line}') center no-repeat 
    }
    &:first-child{margin-top:0}
    background: url('${email_dark_line}') center no-repeat 
    background-size:100% 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 30px auto 90px;
    font-weight: 300;
    & div{white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;}
    & .type{font-size: 12px;color: #faf201;letter-spacing: -1px;}
    & .title{color:#fff;font-size: 14px;}
    & .time{color:#fff;font-size: 10px;margin-left:6px;font-weight: 100;margin-top:2px;}
`;

export const Envelope = styled.img`
    width:20px;
    vertical-align:middle;
    display: inline-block;
    margin-left:10px;
`;

export const EnvelopeCoin = styled(Envelope).attrs({
    src:`${envelope_coin}`
})``;

export const EnvelopeOpened = styled(Envelope).attrs({
    src:`${envelope_opened}`
})``;

export const EnvelopeClosed = styled(Envelope).attrs({
    src:`${envelope_closed}`
})``;

export const EmailReaded = styled.img.attrs({
    src:`${envelope_readed}`
})`
    width: 30px;
    float: right;
    margin-right: 10px;
`;

export const EnvelopeCoinReaded = styled.img.attrs({
    src:`${envelope_coin_readed}`
})`
    width: 35px;
    float: right;
    margin-right: 10px;
`;

export const EmailRead = styled.img.attrs({
    src:`${envelope_read}`
})`
    width: 80%;
    float: right;
    margin-right: 10px;
`;

export const SubmitButton = styled(Button)`
    margin:13px auto 0;
`;