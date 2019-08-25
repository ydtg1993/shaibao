import React from 'react';
import {
    BottomTab,
    BottomFloor,
    BottomTabList,
    BottomTabMain,
    BottomTabMainImg
} from './style';
/*img resource*/
import exchange from '../../../resource/zhujiemian/duihuan.png';
import email from '../../../resource/zhujiemian/youjian.png';
import rank from '../../../resource/zhujiemian/paihang.png';
import recommend from '../../../resource/zhujiemian/tuiguang.png';
import servant from '../../../resource/zhujiemian/kefu.png';
import EmailComponent from "../dialog/email/index";

class BottomComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emailVisible:false,
        }
    }

    openEmail() {
        this.setState({
            emailVisible:true,
        });
    }

    CloseEmail(){
        this.setState({
            emailVisible:false,
        });
    }

    render() {
        return (
            <BottomFloor>
                <BottomTabList>
                    <BottomTab src={exchange}/>
                    <BottomTab src={email} onClick={this.openEmail.bind(this)}/>
                    <BottomTabMain>
                        <BottomTabMainImg src={rank}/>
                    </BottomTabMain>
                    <BottomTab src={recommend}/>
                    <BottomTab src={servant}/>
                </BottomTabList>
                <EmailComponent visible={this.state.emailVisible} CloseEmail={this.CloseEmail.bind(this)}/>
            </BottomFloor>
        )
    }
}

export default BottomComponent