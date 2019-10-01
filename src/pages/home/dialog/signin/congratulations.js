import React, { Component } from 'react';
import "animate.css";
import {Congratulations,CongratulationsTitle,CongratulationsDiscript,CoinTag,CongratulationsText} from './style';

class CongratulationsComponent extends Component {
    render() {
        return (<Congratulations className='show zoomIn faster animated'>
            <CongratulationsTitle/>
            <CongratulationsDiscript>
                <CoinTag/>
                <CongratulationsText>{this.props.coin}</CongratulationsText>
            </CongratulationsDiscript>
        </Congratulations>)
    }
}

export default CongratulationsComponent;