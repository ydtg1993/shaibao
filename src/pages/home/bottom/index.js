import React from 'react';
import {
    BottomTab,
    BottomFloor,
    BottomTabList,
    BottomTabMain,
    BottomTabMainImg
} from './style';
import {Link} from "react-router-dom";
/*img resource*/
import exchange from '../../../resource/zhujiemian/duihuan.png';
import email from '../../../resource/zhujiemian/youjian.png';
import rank from '../../../resource/zhujiemian/paihang.png';
import recommend from '../../../resource/zhujiemian/tuiguang.png';
import servant from '../../../resource/zhujiemian/kefu.png';

class BottomComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <BottomFloor>
                    <BottomTabList>
                        <BottomTab src={exchange}/>
                        <BottomTab src={email}/>
                        <BottomTabMain>
                            <BottomTabMainImg src={rank}/>
                        </BottomTabMain>
                        <BottomTab src={recommend}/>
                        <BottomTab src={servant}/>
                    </BottomTabList>
                </BottomFloor>
        )
    }
}

export default BottomComponent