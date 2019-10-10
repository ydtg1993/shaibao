import styled,{ createGlobalStyle } from 'styled-components';
import {Dialog,Button} from "../style";
import MyFont from '../../../../resource/font/heiguiti.otf';
import {
    img_home_email_list_title,
    img_home_email_info_title,
    img_home_email_bg1,
    img_home_email_bg2,
    img_home_email_click,
    img_home_email_coin,
    img_home_email_tag_mail,
    img_home_email_tag_opened,
    img_home_email_tag_readed,
    img_home_email_tag_unaccalimed,
} from '../../../../resource';

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
    margin:-183px auto 0;
`;

export const ListTitle = styled.div`
    width: 56px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_email_list_title}') center no-repeat;
    background-size:100% 100%;
`;

export const EmailDialogInfo = styled(Dialog)`
    grid-template-rows: 37px 269px 60px;
    margin:-183px auto 0;
`;

export const InfoTitle = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_email_info_title}') center no-repeat;
    background-size:100% 100%;
`;

export const EmailDialogInfoContent = styled.div`
    overflow-y: auto;
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
    overflow-y:auto;
`;

export const Email = styled.div`
    height:45px;
    margin-top:2px;
    &.read{
        background: url('${img_home_email_bg1}') center no-repeat 
    }
    &:first-child{margin-top:0}
    background: url('${img_home_email_bg2}') center no-repeat 
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
    src:`${img_home_email_coin}`
})``;

export const EnvelopeOpened = styled(Envelope).attrs({
    src:`${img_home_email_tag_opened}`
})``;

export const EnvelopeClosed = styled(Envelope).attrs({
    src:`${img_home_email_tag_mail}`
})``;

export const EmailReaded = styled.img.attrs({
    src:`${img_home_email_tag_readed}`
})`
    width: 30px;
    float: right;
    margin-right: 10px;
`;

export const EnvelopeCoinReaded = styled.img.attrs({
    src:`${img_home_email_tag_unaccalimed}`
})`
    width: 35px;
    float: right;
    margin-right: 10px;
`;

export const EmailRead = styled.img.attrs({
    src:`${img_home_email_click}`
})`
    width: 80%;
    float: right;
    margin-right: 10px;
`;

export const SubmitButton = styled(Button)`
    margin:13px auto 0;
`;