import styled from 'styled-components';
import {Dialog,DialogContent} from "../style";
import {
    img_home_rank_title,
    img_home_rank_rank1,
    img_home_rank_rank2,
    img_home_rank_rank3,
    img_home_rank_star,
    img_home_rank_yuan,
    img_home_rank_dark_line,
    img_home_rank_light_line,
} from '../../../../resource';

export const RankDialog = styled(Dialog)`
    grid-template-rows: 37px 330px;
    margin:-183px auto 0;
`;

export const Title = styled.div`
    width: 70px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_rank_title}') center no-repeat;
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
    background: url('${img_home_rank_dark_line}') center no-repeat 
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
    background: url('${img_home_rank_star}') center no-repeat 
    background-size:100%;
    width:25px;
    margin: 0 auto;
    color:#ffeab5;font-size:12px;font-family: MyFont;
`;

export const RankTabg1 = styled(RankTag).attrs({
    src:`${img_home_rank_rank1}`
})``;
export const RankTabg2 = styled(RankTag).attrs({
    src:`${img_home_rank_rank2}`
})``;
export const RankTabg3 = styled(RankTag).attrs({
    src:`${img_home_rank_rank3}`
})``;

export const RankMoneyTag = styled.img.attrs({
    src:`${img_home_rank_yuan}`
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
    background: url('${img_home_rank_light_line}') center no-repeat 
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