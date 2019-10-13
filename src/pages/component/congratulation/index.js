import React from 'react';
import "animate.css";
import {
    CongratulationDialog,
    CongratulationsTitle,
    CongratulationsDiscript,
    CoinTag,
    CongratulationsText,
    Hikaru
} from './style';

class Congratulation extends React.Component {
    render() {
        return (
            <CongratulationDialog className='show zoomIn faster animated'>
                <CongratulationsTitle/>
                <CongratulationsDiscript>
                    <CoinTag/>
                    <CongratulationsText>{this.props.coin}</CongratulationsText>
                </CongratulationsDiscript>
                <Hikaru/>
            </CongratulationDialog>)
    }
}

export default Congratulation;