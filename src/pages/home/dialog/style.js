import styled from 'styled-components';
import bottom_decoration from '../../../resource/zhujiemian/email/bottom.png';
import light_line from '../../../resource/zhujiemian/rank/light-line.png';
import dark_line from '../../../resource/zhujiemian/rank/dark-line.png';

export const Bg = styled.img`
    width:100%;
    position: absolute;
    z-index:1000;
`;

export const BottomDecoration = styled.img.attrs({
    src: `${bottom_decoration}`
})`
    position:absolute;
    width: 308px;
    margin:auto;
    bottom:0;
    left: 0;
    right: 0;
    z-index:2002;
`;

export const Close = styled.img`
    width:25%;
    position:absolute;
    z-index:2000;
    top: 2px;
    right: 1px;
`;

export const Dialog = styled.div`
    position: absolute;
    top:20%;
    left: 0;
    right: 0;
    margin:auto;
    width:310px;
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
`;

export const EmailDialog = styled(Dialog)`
    grid-template-rows: 40px 318px;
`;

export const EmailList = styled.div`
    
`;

export const RankDialog = styled(Dialog)`
    grid-template-rows: 40px 35px 248px 35px;
`;

export const RankList = styled.div`
    position:relative;
    z-index: 2001;
    padding: 2px 4px 0px 4px;
    overflow:scroll;
`;

export const Rank = styled.div`
    height:35px;
    line-height:35px;
    width:100%;
    margin-top:2px;
    background: url('${dark_line}') center no-repeat 
    background-size:100% 100%;
    &:first-child{margin-top:0}
`;

export const RankTitle = styled(Rank)`
    position:relative;
    z-index:2000;
    width:auto;
    margin-left:4px;
    margin-right:4px;
`;

export const MyRank = styled(Rank)`
    background: url('${light_line}') center no-repeat 
    background-size:100% 100%;
    position:relative;
    z-index:2000;
    width:auto;
    margin-left:4px;
    margin-right:4px;
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