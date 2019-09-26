import styled from 'styled-components';
import {Dialog} from "../style";
import focus from '../../../../resource/zhujiemian/activity/focus.png';
import title from '../../../../resource/zhujiemian/activity/title.png';

export const ActivityDialog = styled(Dialog)`
    grid-template-rows: 37px 276px;
`;

export const Title = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${title}') center no-repeat;
    background-size:100% 100%;
`;

export const ActivityContent = styled.div`
    display:grid;
    grid-template-columns: 86px auto;
    position: relative;
    z-index: 2001;
    overflow: hidden;
    background-color:#1f263a;
`;

export const Menu = styled.div`
    margin-bottom: 1px;
    overflow-y: scroll;
`;

export const Unit = styled.div`
    background-color:#0f2a50;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #f7fbba;
    font-size:14px;
    margin-bottom: 1px;
    margin-right:6px;
    position: relative;
    z-index: 2;
    &.focus{
    color:white;
    margin: 0;
    background: url('${focus}') center no-repeat 
    background-size:100% 100%;
    }
`;

export const MenuBg = styled.div`
    background-color:#0f2a50;
    position:fixed;
    width:80px;
    position: absolute;
    width: 80px;
    height: calc(100% - 1px);
    top: 0;
    left: 2px;
    z-index: 1;
`;

export const Text = styled.span`
    font-size:13px;
    width:62px;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const Content = styled.div`
    margin-bottom: 1px;
    overflow-y: scroll;
    background-color: #1f263a;
`;

export const ContentText = styled.div`
    padding:5px;
    font-size:12px;
    color:white;
`;

export const ContentImg = styled.img`
    width:100%;
`;