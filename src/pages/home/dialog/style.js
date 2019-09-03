import styled,{ createGlobalStyle } from 'styled-components';
import MyFont from '../../../resource/heiguiti.otf';
import email_light_line from '../../../resource/zhujiemian/email/bg1.png';
import email_dark_line from '../../../resource/zhujiemian/email/bg2.png';
import envelope_opened from '../../../resource/zhujiemian/email/opened.png';
import envelope_closed from '../../../resource/zhujiemian/email/mail.png';
import envelope_readed from '../../../resource/zhujiemian/email/readed.png';
import envelope_read from '../../../resource/zhujiemian/email/click.png';
import bottom_decoration from '../../../resource/zhujiemian/email/bottom.png';
import rank_light_line from '../../../resource/zhujiemian/rank/light-line.png';
import rank_dark_line from '../../../resource/zhujiemian/rank/dark-line.png';
import rank_money_tag from '../../../resource/zhujiemian/rank/yuan.png';
import rank_tag_1 from '../../../resource/zhujiemian/rank/rank1.png';
import rank_tag_2 from '../../../resource/zhujiemian/rank/rank2.png';
import rank_tag_3 from '../../../resource/zhujiemian/rank/rank3.png';
import rank_tag from '../../../resource/zhujiemian/rank/star.png';

export const GlobalStyle = createGlobalStyle`
body {
  @font-face {
     font-family: 'MyFont';
     src: url('${MyFont}');
  }
}
`;

export const Bg = styled.img`
    width:100%;
    position: absolute;
    z-index:1000;
`;

export const BottomDecoration = styled.img.attrs({
    src: `${bottom_decoration}`
})`
    position:absolute;
    width: 308px;
    margin:auto;
    bottom:0;
    left: 0;
    right: 0;
    z-index:2002;
`;

export const Close = styled.img`
    width:25%;
    position:absolute;
    z-index:2000;
    top: 2px;
    right: 1px;
`;

export const Dialog = styled.div`
    position: absolute;
    top:20%;
    left: 0;
    right: 0;
    margin:auto;
    width:310px;
    z-index:2000;
    visibility: hidden;
    opacity: 0;
    display:grid;
    &.show{
        visibility: visible;
        opacity: 1;
    }
    &.hidden{
        opacity: 0;
    }
`;

export const EmailDialog = styled(Dialog)`
    grid-template-rows: 40px 318px;
`;

export const EmailDialogInfo = styled(Dialog)`
    grid-template-rows: 40px 258px 60px;
`;

export const EmailDialogInfoContent = styled.div`
    overflow-y: scroll;
    position:relative;
    z-index:2001;
    padding:2px;
`;

export const EmailList = styled.div`
    position:relative;
    z-index: 2001;
    padding: 0 4px 0px 4px;
    overflow:scroll;
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
    grid-template-columns: 30px auto 30%;
    font-weight: 300;
    & .type{font-size: 14px;color: #faf201;letter-spacing: -1px;}
    & .title{color:#fff;font-size: 14px;}
    & .time{color:#fff;font-size: 10px;margin-left:6px;font-weight: 100;margin-top:2px;}
`;

export const Envelope = styled.img`
    width:20px;
    vertical-align:middle;
    display: block;
    margin-left:10px;
`;

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

export const EmailRead = styled.img.attrs({
    src:`${envelope_read}`
})`
    width: 80%;
    float: right;
    margin-right: 10px;
`;

export const RankDialog = styled(Dialog)`
    grid-template-rows: 40px 35px 248px 35px;
`;

export const RankList = styled.div`
    position:relative;
    z-index: 2001;
    margin: 2px 4px 2px 4px;
    overflow:scroll;
`;

export const Rank = styled.div`
    height:35px;
    line-height:35px;
    width:100%;
    margin-top:2px;
    background: url('${rank_dark_line}') center no-repeat 
    background-size:100% 100%;
    &:first-child{margin-top:0}
    display:grid;
    grid-template-columns: 25% 1fr 1fr;
    & div{text-align: center;}
    & span{color:#fff;font-size:14px;font-weight:300}
    & .rankTag{color:#ffeab5;font-size:16px;font-family: MyFont;}
    & .moneyTitle{color:#ffeab5;font-size:12px;font-family: MyFont;}
`;

export const RankTag = styled.img`
    width:30px;
    vertical-align: sub;
`;

export const RankTagN = styled.div`
    background: url('${rank_tag}') center no-repeat 
    background-size:100%;
    width:25px;
    margin: 0 auto;
    color:#ffeab5;font-size:12px;font-family: MyFont;
`;

export const RankTabg1 = styled(RankTag).attrs({
    src:`${rank_tag_1}`
})``;
export const RankTabg2 = styled(RankTag).attrs({
    src:`${rank_tag_2}`
})``;
export const RankTabg3 = styled(RankTag).attrs({
    src:`${rank_tag_3}`
})``;

export const RankMoneyTag = styled.img.attrs({
    src:`${rank_money_tag}`
})`
    width:15px;
    vertical-align: middle;
`;

export const RankTitle = styled(Rank)`
    position:relative;
    z-index:2000;
    width:auto;
    margin-left:4px;
    margin-right:4px;
    & div{color:#ebfbba;font-weight:300}
`;

export const MyRank = styled(Rank)`
    background: url('${rank_light_line}') center no-repeat 
    background-size:100% 100%;
    position:relative;
    z-index:2000;
    width:auto;
    margin-left:4px;
    margin-right:4px;
`;

export const MongolianWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0px;  
    bottom: 0px; 
    z-index:999;
    opacity: 0;
    visibility: hidden;
    background-color:rgba(0, 0, 0, 0.6); 
    -webkit-transition: opacity .1s ease-in-out;
    -moz-transition: opacity .1s ease-in-out;
    -ms-transition: opacity .1s ease-in-out;
    -o-transition: opacity .1s ease-in-out;
    transition: opacity .1s ease-in-out;
        
    &.show {
        opacity: 1;
        visibility: visible;
    }
    
    &.hidden {
         opacity: 0;
    }
`;

export const SubmitButton = styled.img`
    margin-top:8px;
    width:35%;
    z-index: 10000;
    position: relative;
    left:50%;
    transform: translateX(-50%);
`;