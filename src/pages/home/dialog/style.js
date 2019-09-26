import styled from 'styled-components';
import bottom_decoration from "../../../resource/dialog/bottom.png";
import close from '../../../resource/dialog/guanbi.png';
import border from "../../../resource/dialog/border.png";
import top from "../../../resource/dialog/top.png";

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

export const MongolianWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0px;  
    bottom: 0px; 
    z-index:999;
    opacity: 0;
    visibility: hidden;
    background-color:rgba(0, 0, 0, 0.6); 
    -webkit-transition: opacity .1s ease-in-out;
    -moz-transition: opacity .1s ease-in-out;
    -ms-transition: opacity .1s ease-in-out;
    -o-transition: opacity .1s ease-in-out;
    transition: opacity .1s ease-in-out;
        
    &.show {
        opacity: 1;
        visibility: visible;
    }
    
    &.hidden {
         opacity: 0;
    }
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