import React from 'react';
import {
    BottomTab1,
    BottomTab2,
    BottomTab3,
    BottomTab4,
    BottomFloor,
    BottomTabList,
    BottomTabMain,
    BottomTabMainImg
} from './style';
import EmailComponent from "../dialog/email/index";
import RankComponent from "../dialog/rank";
import {connect} from "react-redux";
import * as Actions from "../store/actions";
import ExchangeComponent from "../dialog/exchange";
import {CloseMongolia, OpenMongolia} from "../../../index";
import {GetBankCardInfo} from "../../auth/store/actions";

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
        OpenMongolia();
        this.props.getBankCardInfo(this.props.userinfo.token);
        this.setState({
            exchangeVisible:true
        });
    }

    CloseExchange(){
        CloseMongolia();
        this.setState({
            exchangeVisible:false
        });
    }

    OpenEmail() {
        OpenMongolia();
        this.props.getEmailList();
        this.setState({
            emailVisible:true,
        });
    }

    CloseEmail(){
        CloseMongolia();
        this.setState({
            emailVisible:false,
        });
    }

    OpenRank(){
        OpenMongolia();
        this.props.getRankList();
        this.setState({
            rankVisible:true,
        });
    }

    CloseRank(){
        CloseMongolia();
        this.setState({
            rankVisible:false,
        });
    }

    render() {
        return (
            <BottomFloor>
                <BottomTabList>
                    <BottomTab1 onClick={this.OpenExchange.bind(this)}/>
                    <BottomTab2 onClick={this.OpenEmail.bind(this)}/>
                    <BottomTabMain>
                        <BottomTabMainImg onClick={this.OpenRank.bind(this)}/>
                    </BottomTabMain>
                    <BottomTab3/>
                    <BottomTab4/>
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
        getBankCardInfo(token) {
            dispatch(GetBankCardInfo(token));
        },
        getEmailList() {
            dispatch(Actions.GetEmailList(1))
        },
        getRankList() {
            dispatch(Actions.GetRankList(1))
        }
    }
};

export default connect(null, mapDispatchToProps)(BottomComponent)