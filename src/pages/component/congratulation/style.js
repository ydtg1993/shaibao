import styled,{keyframes} from "styled-components";
import {
    img_congratulate_title,
    img_congratulate_hikaru,
    img_congratulate_coin,
} from '../../../resource';

export const CongratulationDialog = styled.div`
    width: 350px;
    height: 350px;
    position: relative;
    z-index: 2000;
    margin: 0 auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Hikaru = styled.img.attrs({
    src:`${img_congratulate_hikaru}`
})`
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    animation: ${rotate} 10s linear infinite;
    opacity: 0.9;
`;

export const CongratulationsTitle = styled.img.attrs({
    src:`${img_congratulate_title}`
})`
    width: 260px;
    height: 82px;
    margin: 0 auto;
    display: block;
    position:relative;
    z-index: 2010;
    padding-top: 90px;
`;

export const CongratulationsDiscript = styled.div`
    width: 260px;
    height: 30px;
    margin: 10px auto 0;
    text-align: center;
    position:relative;
    z-index: 2010;
`;

export const CoinTag = styled.img.attrs({
    src:`${img_congratulate_coin}`
})`
    width: 32px;
    height: 26px;
    vertical-align: bottom;
    position:relative;
    z-index: 2010;
`;

export const CongratulationsText = styled.span`
    color: #ffe706;
    font-size: 26px;
    display: inline-block;
    line-height: 26px;
    text-shadow: 0 2px 2px rgb(0,0,0);
    position:relative;
    z-index: 2010;
    margin-left: 10px;
    font-weight: 500;
`;