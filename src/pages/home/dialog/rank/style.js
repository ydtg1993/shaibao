import styled from 'styled-components';
import {Dialog,DialogContent} from "../style";
import rank_light_line from '../../../../resource/zhujiemian/rank/light-line.png';
import rank_dark_line from '../../../../resource/zhujiemian/rank/dark-line.png';
import rank_money_tag from '../../../../resource/zhujiemian/rank/yuan.png';
import rank_tag_1 from '../../../../resource/zhujiemian/rank/rank1.png';
import rank_tag_2 from '../../../../resource/zhujiemian/rank/rank2.png';
import rank_tag_3 from '../../../../resource/zhujiemian/rank/rank3.png';
import rank_tag from '../../../../resource/zhujiemian/rank/star.png';
import title from "../../../../resource/zhujiemian/rank/title.png";

export const RankDialog = styled(Dialog)`
    grid-template-rows: 37px 330px;
`;

export const Title = styled.div`
    width: 70px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${title}') center no-repeat;
    background-size:100% 100%;
`;

export const DialogContent2 = styled(DialogContent)`
    display:grid;
    grid-template-rows: 35px 259px 35px;
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
    & div{    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;}
`;