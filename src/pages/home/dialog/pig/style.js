import styled from "styled-components";
import {
    img_dialog_border,
    img_home_pig_title,
    img_home_pig_bg,
    img_home_pig_bg2,
    img_home_pig_button,
    img_home_pig_board_bg,
    img_home_pig_close,
    img_home_pig_gold_pig,
    img_home_pig_rule,
    img_home_pig_pigpig
} from '../../../../resource';

export const Dialog = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top:50%;
    margin:-160px auto 0;
    width:320px;
    z-index:2000;
    visibility: hidden;
    opacity: 0;
    display:grid;
    grid-template-rows: 35px 150px 135px;
    background: url('${img_home_pig_bg}') no-repeat;  
    background-size: cover;
    border: 2px solid;
    -webkit-border-image:url(${img_dialog_border}) 2;
    -o-border-image:url(${img_dialog_border}) 2;
    border-image: url(${img_dialog_border}) 2; 
    &.show{
        visibility: visible;
        opacity: 1;
    }
    &.hidden{
        opacity: 0;
    }
`;

export const Title = styled.div`
    background: url('${img_home_pig_title}') center no-repeat;
    background-size:100% 100%;
    width: 160px;
    height: 42px;
    margin: -17px auto 0;
`;

export const RuleTitle = styled.img.attrs({
    src:`${img_home_pig_rule}`
})`
    display:block;
    width: 150px;
    height: 28px;
    margin: -17px auto 0;
`;

export const Close = styled.img.attrs({
    src:`${img_home_pig_close}`
})`
    width: 44px;
    position:absolute;
    z-index:2000;
    top: -2px;
    right: -3px;
`;

export const DialogContent = styled.div`
    
`;

export const MiddleSection = styled.div`
    display:grid;
    grid-template-columns: 200px 120px;
`;

export const PigSection = styled.div`

`;

export const Pig = styled.div`
    width: 190px;
    height: 120px;
    margin:0 auto;
    background: url('${img_home_pig_gold_pig}') center no-repeat;
    background-size:100% 100%;
`;

export const PigTitle = styled.div`
    font-size: 12px;
    color: #135a26;
    font-weight: 600;
    padding: 23px 57px 4px;
`;

export const PigRestMoney = styled.div`
    width: 110px;
    display:flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin-left: 26px;
    color: #fbffbe;
    font-weight: 400;
    div{
       width:20px;
       height:22px; 
       line-height:22px;
       text-align: center;
       background: #6f1637;
    }
`;

export const BrokeButton = styled.img.attrs({
  src:`${img_home_pig_button}`
})`
    width: 60px;
    height: 25px;
    display: block;
    margin: 7px 0 0 50px;
`;

export const DescriptionSection = styled.div`
    
`;

export const DescriptionTitle = styled.div`
    background: url('${img_home_pig_rule}') center no-repeat;
    background-size:100% 100%;
    height: 22px;
    width: 110px;
    margin-top: 20px;
    margin-bottom:10px;
`;

export const Description = styled.p`
    margin:0;
    font-size: 13px;
    font-weight: 500;
    color:#f7ffb4;
    width:110px;
    margin-top:10px;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const BoardSection = styled.div`

`;

export const Board = styled.div`
    background: url('${img_home_pig_board_bg}') center no-repeat;
    background-size:100% 100%;
    width:270px;
    height:130px;
    margin:0 auto;
    display:grid;
    grid-template-rows: 30px 100px;
`;

export const BoardContent = styled.div`
    height: 95px;
    padding: 0 5px 5px;
    overflow:hidden;
    position:relative;
`;

export const BorderListRef = styled.div`
    position:absolute;
    width:260px;
`;

export const BoardTitle = styled.p`
    color:white;
    margin: 5px auto 0;
    text-align: center;
`;

export const BoardText = styled.div`
    font-size:10px;
    color:white;
    height:16px;
    line-height:16px;
    text-align: center;
    span{color: #fffdbe;}
`;

/*rule dialog*/
export const RuleDialog = styled(Dialog)`
    background: url('${img_home_pig_bg2}') no-repeat;  
    background-size: cover;
    grid-template-rows: 35px 285px;
`;

export const RuleDialogContent = styled.div`
    padding:5px;
    height:275px;
`;

export const RuleTopText = styled.div`
    font-size: 12px;
    color: #fffdbe;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const RuleText = styled.div`
    color:white;
    font-size:11px;
    margin-top:7px;
`;

/*begin*/
export const BeginDialog = styled(Dialog)`
    grid-template-rows: 30px 25px 265px;
`;

export const BeginTitle = styled.div`
    text-align: center;
    width: 140px;
    height: 25px;
    line-height: 25px;
    font-size: 13px;
    margin: 0 auto;
    border-radius: 2px;
    background: #0d0c0c75;
    color: #fffdc6;
    font-weight: 600;
`;

export const PigBox = styled.div`
    height: 155px;
    overflow: hidden;
    display: flex;
    width: 315px;
    margin: 30px auto;
    flex-wrap: wrap;
    justify-content: center;
`;

export const PigPig = styled.div`
    width: 95px;
    height: 62px;
    background: url('${img_home_pig_pigpig}') center no-repeat;
    background-size: cover;
    background-position: -25px -18px 3px 13px;
    background-position: -85px 0px;
    &.active{background-position: 5px 0px;}
`;