import styled from 'styled-components';
import {Button, Dialog} from '../style';
import {img_dialog_select_tag,img_home_bind_title} from '../../../../resource';

export const BindCardDialog = styled(Dialog)`
    grid-template-rows: 37px 180px 48px;
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1b4084,#1f263a);
    margin:-132px auto 0;
`;

export const Title = styled.div`
    width: 100px;
    height: 32px;
    margin: 2px auto 0;
    background: url('${img_home_bind_title}') center no-repeat;
    background-size:100% 100%;
`;

export const DialogContent = styled.div`
    display:grid;
    grid-template-rows: 70px 150px;
    grid-template-columns: 1fr 1fr
`;

export const Section = styled.div`
    
`;

export const Input = styled.div`
    position:relative;
    z-index:1;
    text-align: center;
    color:#e6e6e6;
    font-size:14px;
    font-weight: 300;
    margin-top:15px;
    label{
        text-align: left;
        vertical-align: middle;
        display: inline-block;
        width: 140px;
        font-size: 14px;
        color: #f7fbc2;
        font-weight: 300;
    }
    input{
        padding: 1px;
        font-size: 12px;
        padding-left: 3px;
        width: 140px;
        background-color:#17233a;
        border: 1px #dee487 solid;
        color: white;
        height:18px;
        border-radius: 2px;
        outline: none;
    }
`;

export const SelectTag = styled.img.attrs({
    src:`${img_dialog_select_tag}`
})`
    position: absolute;
    width: 18px;
    height: 18px;
    bottom: 2px;
    right: 10px;
`;

export const SelectOptions = styled.div`
    width: 140px;
    height: 80px;
    margin: 0 auto;
    background: #00000085;
    overflow-y: scroll;
    &.show{
        display:block;
    }
    &.hidden{
        display:none;
    }
`;

export const Option = styled.div`
    font-size: 12px;
    color:white;
    padding:3px;
`;

export const SubmitButton = styled(Button)`
    margin:0 auto;
`;