import styled from 'styled-components';
import {Dialog} from "../style";
import blur from '../../../../resource/zhujiemian/bet_record/blur.png';
import focus from '../../../../resource/zhujiemian/bet_record/focus.png';
import hall1 from '../../../../resource/zhujiemian/bet_record/title1.png';
import hall2 from '../../../../resource/zhujiemian/bet_record/title2.png';
import hall3 from '../../../../resource/zhujiemian/bet_record/title3.png';
import small1 from '../../../../resource/zhujiemian/bet_record/small1.png';
import small2 from '../../../../resource/zhujiemian/bet_record/small2.png';
import small3 from '../../../../resource/zhujiemian/bet_record/small3.png';
import small4 from '../../../../resource/zhujiemian/bet_record/small4.png';
import small5 from '../../../../resource/zhujiemian/bet_record/small5.png';
import small6 from '../../../../resource/zhujiemian/bet_record/small6.png';
import title from "../../../../resource/zhujiemian/bet_record/title.png";

export const BetRecordDialog = styled(Dialog)`
    grid-template-rows: 37px 37px 398px;
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1b4084,#1f263a);
    top:10%;
`;

export const MTitle = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${title}') center no-repeat;
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
    background: url('${blur}') center no-repeat;
    &.focus{background: url('${focus}') center no-repeat;background-size: contain;}
`;

export const RecordList = styled.div`
    position:relative;
    z-index: 2001;
    padding: 0 4px 2px 4px;
    overflow:scroll;
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

export const Hall_tag_1 = styled(Hall_tag).attrs({
    src:`${hall1}`
})``;

export const Hall_tag_2 = styled(Hall_tag).attrs({
    src:`${hall2}`
})``;

export const Hall_tag_3 = styled(Hall_tag).attrs({
    src:`${hall3}`
})``;

export const Small = styled.img`
    width:22px;
    height:22px;
`;

export const Small1 = styled(Small).attrs({
    src:`${small1}`
})``;

export const Small2 = styled(Small).attrs({
    src:`${small2}`
})``;

export const Small3 = styled(Small).attrs({
    src:`${small3}`
})``;

export const Small4 = styled(Small).attrs({
    src:`${small4}`
})``;

export const Small5 = styled(Small).attrs({
    src:`${small5}`
})``;

export const Small6 = styled(Small).attrs({
    src:`${small6}`
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

