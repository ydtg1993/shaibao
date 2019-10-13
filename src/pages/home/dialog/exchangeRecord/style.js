import styled from 'styled-components';
import {Dialog, DialogContent} from '../style';
import {img_home_rank_dark_line,img_home_exchange_record_title} from '../../../../resource';

export const ExchangeRecordDialog = styled(Dialog)`
    grid-template-rows: 37px 295px;
    margin:-166px auto 0;
`;

export const Title = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_exchange_record_title}') center no-repeat;
    background-size:100% 100%;
`;

export const DialogContent2 = styled(DialogContent)`
    display:grid;
    grid-template-rows: 35px 260px;
`;

export const RecordList = styled.div`
    padding: 2px 4px 0px 4px;
    overflow-y: auto;
`;

export const Record = styled.div`
    height:35px;
    line-height:35px;
    width:100%;
    margin-top:2px;
    background: url('${img_home_rank_dark_line}') center no-repeat 
    background-size:100% 100%;
    display:grid;
    grid-template-columns: 28% 28% 28% 16%;
    & div{
        text-align: center;
        font-size: 10px;
        color:white;
        font-weight:300;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const RecordTitle = styled(Record)`
    position:relative;
    z-index:2000;
    width:auto;
    margin-left:4px;
    margin-right:4px;
    & div{color: #f4ffd3;font-weight:300;font-size:14px}
`;