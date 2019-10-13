import styled from 'styled-components';
import {
    img_game_back,
    img_game_section1,
    img_game_record_tag,
    img_game_tag_rule,
    img_game_tag_service,
    img_game_tag_online,
    img_game_woman
} from '../../../resource';

export const DialWrapper = styled.div`
    background: url('${img_game_section1}') center no-repeat 
    background-size:100% 101%;
`;

export const Back = styled.img.attrs({
    src:`${img_game_back}`
})`
    position:absolute;
    top: 0px;
    left:0;
    width:60px;
`;

export const Announcement = styled.div`
    background:rgba(0, 0, 0, 0.42);
    width:100%;
    height:20px;
    line-height:20px;
    padding-left:70px;
`;

export const AnnouncementBox = styled.div`
    overflow: hidden;
`;

export const Text = styled.span`
    display: inline-block;
    color:#f5f5f5;
    font-weight: 300;
    font-size:13px;
    position:relative;
    top: -3px;
`;

export const Tools = styled.div`
    width:100%;
    height: 90%; 
    display: grid;
    grid-template-columns: auto 45px;
    position:relative;
`;

export const Record = styled.img.attrs({
    src:`${img_game_record_tag}`
})`
    margin-top:35px;
    width:22px;
    position:relative;
    z-index:10000;
    &.hidden {
         display: none;
    }
`;

export const Tab = styled.img`
    position:relative;
    z-index:10000;
    width:40px;
    margin-top:10px;
    display:block;
`;

export const Tab1 = styled(Tab).attrs({
    src:`${img_game_tag_service}`
})``;

export const Tab2 = styled(Tab).attrs({
    src:`${img_game_tag_rule}`
})``;

export const Tab3 = styled(Tab).attrs({
    src:`${img_game_tag_online}`
})``;

export const Woman = styled.img.attrs({
    src:`${img_game_woman}`
})`
    height: 100%;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
`;