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
import RankComponent from "../dialog/rank";
import {connect} from "react-redux";
import * as Actions from "../store/actions";
import ExchangeComponent from "../dialog/exchange";

class BottomComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            exchangeVisible:false,
            emailVisible:false,
            rankVisible:false
        }
    }

    OpenExchange(){
        let MongolianScreen = document.getElementById('MongolianScreen');
        MongolianScreen.className = MongolianScreen.className.replace(/CloseMongolian/,'ShowMongolian');
        this.setState({
            exchangeVisible:true
        });
    }

    CloseExchange(){
        let MongolianScreen = document.getElementById('MongolianScreen');
        MongolianScreen.className = MongolianScreen.className.replace(/ShowMongolian/,'CloseMongolian');
        this.setState({
            exchangeVisible:false
        });
    }

    OpenEmail() {
        let MongolianScreen = document.getElementById('MongolianScreen');
        MongolianScreen.className = MongolianScreen.className.replace(/CloseMongolian/,'ShowMongolian');
        this.props.getEmailList();
        this.setState({
            emailVisible:true,
        });
    }

    CloseEmail(){
        let MongolianScreen = document.getElementById('MongolianScreen');
        MongolianScreen.className = MongolianScreen.className.replace(/ShowMongolian/,'CloseMongolian');
        this.setState({
            emailVisible:false,
        });
    }

    OpenRank(){
        let MongolianScreen = document.getElementById('MongolianScreen');
        MongolianScreen.className = MongolianScreen.className.replace(/CloseMongolian/,'ShowMongolian');
        this.props.getRankList();
        this.setState({
            rankVisible:true,
        });
    }

    CloseRank(){
        let MongolianScreen = document.getElementById('MongolianScreen');
        MongolianScreen.className = MongolianScreen.className.replace(/ShowMongolian/,'CloseMongolian');
        this.setState({
            rankVisible:false,
        });
    }

    render() {
        return (
            <BottomFloor>
                <BottomTabList>
                    <BottomTab src={exchange} onClick={this.OpenExchange.bind(this)}/>
                    <BottomTab src={email} onClick={this.OpenEmail.bind(this)}/>
                    <BottomTabMain>
                        <BottomTabMainImg src={rank} onClick={this.OpenRank.bind(this)}/>
                    </BottomTabMain>
                    <BottomTab src={recommend}/>
                    <BottomTab src={servant}/>
                </BottomTabList>
                <ExchangeComponent userinfo={this.props.userinfo} visible={this.state.exchangeVisible} CloseExchange={this.CloseExchange.bind(this)}/>
                <EmailComponent visible={this.state.emailVisible} CloseEmail={this.CloseEmail.bind(this)}/>
                <RankComponent userinfo={this.props.userinfo} visible={this.state.rankVisible} CloseRank={this.CloseRank.bind(this)}/>
            </BottomFloor>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmailList() {
            dispatch(Actions.GetEmailList(1))
        },
        getRankList() {
            dispatch(Actions.GetRankList(1))
        }
    }
};

export default connect(null, mapDispatchToProps)(BottomComponent)