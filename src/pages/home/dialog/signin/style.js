import styled from 'styled-components';
import {Dialog} from '../style';
import title from "../../../../resource/zhujiemian/signin/title.png";
import box_bg from '../../../../resource/zhujiemian/signin/box_bg.png';
import complete from '../../../../resource/zhujiemian/signin/complete.png';
import hikaru from '../../../../resource/zhujiemian/signin/hikaru.png';
import congratulate_title from '../../../../resource/zhujiemian/signin/congratulate.png';
import coin from '../../../../resource/zhujiemian/signin/coin_tag.png';

export const SignInDialog = styled(Dialog)`
    grid-template-rows: 37px 210px;
`;

export const Title = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${title}') center no-repeat;
    background-size:100% 100%;
`;

export const DialogContent = styled.div`
    background-image: radial-gradient(ellipse 70% 80% at top center,#1b4084,#1f263a);
`;

export const Content = styled.div`
    margin-top: 20px;
    display:grid;
    height:170px;
    grid-template-rows: 50% 50%;
    grid-template-columns: 1fr 1fr 1fr 1fr
`;

export const Award = styled.div`
    width:72px;
    height:80px;
    margin:0 auto;
    padding-top:3px;
    background: url('${box_bg}') center no-repeat;
    background-size:100%;
    text-shadow: 0 2px 2px rgb(0, 0, 0);
    position:relative;
`;

export const Day = styled.p`
    text-align: center;
    margin: 0;
    padding:0;
    font-weight:bold;
    color: #f1f1f1;
    font-size: 14px;
`;

export const Box = styled.img`
    width: 36px;
    height: 28px;
    margin: 8px auto 0;
    display:block;
`;

export const Complete = styled.img.attrs({
    src:`${complete}`
})`
    top: 0;
    width:72px;
    height:80px;
    position: absolute;
`;

export const Congratulations = styled.div`
    background: url('${hikaru}') center no-repeat;
    background-size: 100% 100%;
    width: 350px;
    height: 250px;
    position: absolute;
    z-index: 2000;
    margin: 0 auto;
    top: 20%;
    left: 0;
    right: 0;
`;

export const CongratulationsTitle = styled.img.attrs({
    src:`${congratulate_title}`
})`
    width: 260px;
    height: 82px;
    margin: 30px auto 0;
    display: block;
`;

export const CongratulationsDiscript = styled.div`
    width: 260px;
    height: 30px;
    margin: 10px auto 0;
    text-align: center;
`;

export const CoinTag = styled.img.attrs({
    src:`${coin}`
})`
    width: 32px;
    height: 26px;
    vertical-align: bottom;
`;

export const CongratulationsText = styled.span`
    color: #f7ff7b;
    font-size: 26px;
    display: inline-block;
    line-height: 26px;
    text-shadow: 0 2px 2px rgb(0,0,0);
`;