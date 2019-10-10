import styled from 'styled-components';
import {Dialog} from "../style";
import {
    img_home_bet_record_title,
    img_home_bet_record_title1,
    img_home_bet_record_title2,
    img_home_bet_record_title3,
    img_home_bet_record_small1,
    img_home_bet_record_small2,
    img_home_bet_record_small3,
    img_home_bet_record_small4,
    img_home_bet_record_small5,
    img_home_bet_record_small6,
    img_home_bet_record_focus,
    img_home_bet_record_blur
} from '../../../../resource';

export const BetRecordDialog = styled(Dialog)`
    grid-template-rows: 37px 37px 398px;
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1b4084,#1f263a);
    margin:-236px auto 0;
`;

export const MTitle = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_bet_record_title}') center no-repeat;
    background-size:100% 100%;
`;

export const RecordNav = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    z-index: 2001;
`;

export const Tab = styled.div`
    text-align: center;
    color: white;
    font-weight: 500;
    height:37px;
    line-height:37px;
    background: url('${img_home_bet_record_blur}') center no-repeat;
    &.focus{background: url('${img_home_bet_record_focus}') center no-repeat;background-size: contain;}
`;

export const RecordList = styled.div`
    position:relative;
    z-index: 2001;
    padding: 0 4px 2px 4px;
    overflow-y:auto;
`;

export const Record = styled.div`
    background-color: #1b1e2c;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    margin-top: 4px;
`;

export const Hall_tag = styled.img`
    width:70px;
    margin-top:4px;
`;

export const HallTag1 = styled(Hall_tag).attrs({
    src:`${img_home_bet_record_title1}`
})``;

export const HallTag2 = styled(Hall_tag).attrs({
    src:`${img_home_bet_record_title2}`
})``;

export const HallTag3 = styled(Hall_tag).attrs({
    src:`${img_home_bet_record_title3}`
})``;

export const Small = styled.img`
    width:22px;
    height:22px;
`;

export const Small1 = styled(Small).attrs({
    src:`${img_home_bet_record_small1}`
})``;

export const Small2 = styled(Small).attrs({
    src:`${img_home_bet_record_small2}`
})``;

export const Small3 = styled(Small).attrs({
    src:`${img_home_bet_record_small3}`
})``;

export const Small4 = styled(Small).attrs({
    src:`${img_home_bet_record_small4}`
})``;

export const Small5 = styled(Small).attrs({
    src:`${img_home_bet_record_small5}`
})``;

export const Small6 = styled(Small).attrs({
    src:`${img_home_bet_record_small6}`
})``;

export const SmallResult = styled.div`
    text-align: center;
    height:22px;
    padding: 0;
    margin: 5px 0 0 0;
`;

export const Title = styled.p`
    text-align: center;
    color:white;
    margin: 0;
`;

export const Text = styled.p`
    color:white;
    margin: 0;
    font-size: 13px;
    &.second{margin-top:4px;}
`;

export const Result = styled.p`
    text-align: center;
    color:white;
    margin: 0;
    margin-top: 4px;
    font-size:13px;
    &.win{color:yellow}
    &.ready{color:yellow}
`;

export const BetResult = styled.p`
    text-align: center;
    color:yellow
    margin: 0;
    margin-top: 4px;
    font-size:13px;
`;

