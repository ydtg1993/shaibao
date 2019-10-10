import styled from 'styled-components';
import {Dialog} from "../style";
import {img_home_activity_title,img_home_activity_tag} from '../../../../resource';

export const ActivityDialog = styled(Dialog)`
    grid-template-rows: 37px 276px;
    margin:-156px auto 0;
`;

export const Title = styled.div`
    width: 90px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_activity_title}') center no-repeat;
    background-size:100% 100%;
`;

export const ActivityContent = styled.div`
    display:grid;
    grid-template-columns: 86px auto;
    position: relative;
    z-index: 2001;
    overflow: hidden;
`;

export const Menu = styled.div`
    margin-bottom: 1px;
    overflow-y: auto;
    background-color:#1f263a;
`;

export const Unit = styled.div`
    background-color:#1f263a;
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
    background: url('${img_home_activity_tag}') center no-repeat 
    background-size:100% 100%;
    }
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
    overflow-y: auto;
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1a3361,#202840);
`;

export const ContentText = styled.div`
    padding:5px;
    font-size:12px;
    color:white;
`;

export const ContentImg = styled.img`
    width:100%;
`;