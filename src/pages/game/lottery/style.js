import styled from 'styled-components';
import chassis from '../../../resource/youxijiemian/shaidi.png';
import cover from '../../../resource/youxijiemian/shaigai.png';

export const MongolianWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0;  
    bottom: 0; 
    z-index:10000;
    opacity: 0;
    visibility: hidden;
    background-color:rgba(0, 0, 0, 0.1); 
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

export const ShaiBao = styled.div`
    width:100%;
    height:100%;
    position: absolute;
    z-index:10000; 
`;

export const Cover = styled.img.attrs({
    src:`${cover}`
})`
    margin-top: 226px;
    width:160px;
    left: 50%;
    margin-left: -80px;
    position: relative; 
    z-index:20000; 
    opacity: 0;
    visibility: hidden;
   
    &.show {
        opacity: 1;
        visibility: visible;
    }
`;

export const Chassis = styled.div`
    background: url('${chassis}') center no-repeat 
    background-size:100% auto;
    height:130px;
    left: 50%;
    margin-top:-125px;
    margin-left: -80px;
    width:160px;
    position: relative;  
    z-index:19990;  
    opacity: 0;
    visibility: hidden;
    
    &.show {
        opacity: 1;
        visibility: visible;
    }
`;

export const Dice = styled.img`
    width:35px;
    height:35px;
    position:relative;
`;

export const Dice1 = styled(Dice)`
    top:15px;
    left: 50%;
    transform: translateX(-50%);
`;

export const Dice2 = styled(Dice)`
    top: 52px;
    left: 2px;
`;

export const Dice3 = styled(Dice)`
    top: 49px;
    left: 26px;
`;

