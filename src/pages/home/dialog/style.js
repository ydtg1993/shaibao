import styled from 'styled-components';
import bottom_decoration from "../../../resource/dialog/bottom.png";
import close from '../../../resource/dialog/guanbi.png';
import border from "../../../resource/dialog/border.png";
import top from "../../../resource/dialog/top.png";
import input_bg from '../../../resource/dialog/input_bg.png';
import small_input_bg from '../../../resource/dialog/small_input_bg.png';

export const Dialog = styled.div`
    position: absolute;
    top:20%;
    left: 0;
    right: 0;
    margin:auto;
    width:320px;
    z-index:2000;
    visibility: hidden;
    opacity: 0;
    display:grid;
    &.show{
        visibility: visible;
        opacity: 1;
    }
    &.hidden{
        opacity: 0;
    }
    border: 2px solid;
    -webkit-border-image:url(${border}) 2;
    -o-border-image:url(${border}) 2;
    border-image: url(${border}) 2; 
`;

export const DialogTop = styled.div`
    background: url('${top}') center no-repeat 
    background-size:100% 100%;
`;

export const DialogContent = styled.div`
    background-image: radial-gradient(ellipse 100% 50% at bottom center,#1b4084,#1f263a);
`;

export const Close = styled.img.attrs({
    src:`${close}`
})`
    width:65px;
    position:absolute;
    z-index:2000;
    top: 0;
    right: 0;
`;

export const BottomDecoration = styled.img.attrs({
    src: `${bottom_decoration}`
})`
    position:absolute;
    width: 320px;
    margin:auto;
    bottom:0;
    left: 0;
    right: 0;
    z-index:2002;
`;

export const Button = styled.div`
    background: url('${input_bg}') no-repeat;  
    font-style: oblique;
    width: 83px;
    height: 35px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    font-family: LangFont;
    background-size: contain;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
`;

export const SmallButton = styled.div`
    height: 15px;
    display: inline-block;
    line-height: 15px;
    position:relative;
    span{
        font-style: oblique;
        font-family: LangFont;
        position:relative;
        display: block;
        text-align: center;
        z-index:1;
        color: #040404;
        font-size: 10px;
    }
`;

export const SmallInputBg = styled.img.attrs({
    src:`${small_input_bg}`
})`
    position:absolute;
    height: 100%;  
    width: 100%;  
    left:0;
    top: 0px;  
    bottom: 0px; 
`;