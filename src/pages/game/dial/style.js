import styled from 'styled-components';
import bg from '../../../resource/youxijiemian/section1.png';

export const DialWrapper = styled.div`
    background: url('${bg}') center no-repeat 
    background-size:100% 101%;
`;

export const Back = styled.img`
    position:absolute;
    top: 0px;
    left:0;
    width:65px;
`;

export const Announcement = styled.div`
    background:rgba(0, 0, 0, 0.42);
    width:100%;
    height:20px;
    line-height:20px;
    padding-left:100px;
`;

export const Tools = styled.div`
    width:100%;
    height: 90%; 
    display: grid;
    grid-template-columns: auto 45px;
`;

export const Record = styled.img`
    margin-top:40px;
    width:24px;
`;

export const Tab = styled.img`
    width:40px;
    margin-top:10px;
    display:block;
`;