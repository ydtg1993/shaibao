import React from 'react';
import {ExpandQrcodeBg, ExpandBoard, ExpandQrcode, Cross} from './style';

class ChargeQrcodeComponent extends React.Component {
    render() {
        const {visible} = this.props;
        return visible && (
            <ExpandQrcodeBg className={visible ? 'show fadeIn faster animated' : 'hidden'}>
                <ExpandBoard className={visible ? 'show zoomIn faster animated' : 'hidden'}>
                    <Cross onClick={this.props.CloseQrcode}/><ExpandQrcode src={this.props.src}/>
                </ExpandBoard>
            </ExpandQrcodeBg>
        );
    }
}

export default ChargeQrcodeComponent;