import styled from 'styled-components';
import {
    img_game_record_close,
    img_game_record_bg,
    img_game_record_title
} from '../../../../resource';

export const RecordDialog = styled.div`
    margin-top:35px;
    position:relative;
    z-index:10000;
    width: 140px;
    height: 200px;
    background: url('${img_game_record_bg}') center no-repeat; 
    background-size:100% 100%;
    display:grid;
    grid-template-rows: 25px 175px;
    &.show{
        display:grid;
    }
    &.hidden{
        display:none;
    }
`;

export const RecordTitle = styled.div`
    height:22px;
    margin:2px 2px 0 0;
    background:#0205259e;
    border-radius:0 12px 0 0;
    & img {
    margin-top:2px;
    margin-left:25px;
    width: 62px;
    height: 18px;
    }
`;

export const Title = styled.img.attrs({
    src:`${img_game_record_title}`
})`
    margin-top:2px;
    margin-left:25px;
    width: 62px;
    height: 18px;
`;

export const RecordList = styled.div`
    padding-right: 2px;
    margin-bottom: 2px;
    border-radius: 0 0 12px 0;
    overflow-y: scroll;
`;

export const Record = styled.div`
    height:22px;
    line-height:22px;
    display: grid;
    grid-template-columns: 38% 16% 46%;
    color:#fff;
    font-size: 12px;
    &.even{background:#020525a1;}
    & div{text-align: center;font-weight: 300;}
`;

export const Close = styled.img.attrs({
    src:`${img_game_record_close}`
})`
    width: 58px;
    height: 26px;
    position: absolute;
    z-index: 20;
    top: 2px;
    right: 2px;
`;

export const TextBlock = styled.span`
    height:22px;
    line-height:22px;
    color:white;
    font-size: 12px;
    padding: 0 2px 0 2px;
    &.yellow{color:yellow}
    &.green{color:#8bc34a}
    &.purple{color:#552382fa}
`;