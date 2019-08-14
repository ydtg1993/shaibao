import styled from 'styled-components';
import bg from '../../resource/youxijiemian/bg.jpg';

export const GameWrrapper = styled.div`
height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0px;  
    bottom: 0px;  
    background: url('${bg}') no-repeat;  
    background-size: 100%, 100%;
    z-index: 0;  
    overflow:hidden;
    display: grid;
`;