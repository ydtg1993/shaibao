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

class BottomComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emailVisible:false,
            rankVisible:false
        }
    }

    OpenEmail() {
        this.props.getEmailList();
        this.setState({
            emailVisible:true,
        });
    }

    CloseEmail(){
        this.setState({
            emailVisible:false,
        });
    }

    OpenRank(){
        this.props.getRankList();
        this.setState({
            rankVisible:true,
        });
    }

    CloseRank(){
        this.setState({
            rankVisible:false,
        });
    }

    render() {
        return (
            <BottomFloor>
                <BottomTabList>
                    <BottomTab src={exchange}/>
                    <BottomTab src={email} onClick={this.OpenEmail.bind(this)}/>
                    <BottomTabMain>
                        <BottomTabMainImg src={rank} onClick={this.OpenRank.bind(this)}/>
                    </BottomTabMain>
                    <BottomTab src={recommend}/>
                    <BottomTab src={servant}/>
                </BottomTabList>
                <EmailComponent userinfo={this.props.userinfo} visible={this.state.emailVisible} CloseEmail={this.CloseEmail.bind(this)}/>
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