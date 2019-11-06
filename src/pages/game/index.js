import React from 'react';
import {
    GameWrapper,
} from './style';
import {Redirect, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import DialComponent from './dial';
import TableComponent from './table';
import MoneyComponent from './money';
import BetComponent from './bet';
import LotteryComponent from "./lottery";
import {POSITION_ROOM_FAST, POSITION_ROOM_ONE, POSITION_ROOM_FIVE, SetPlayerPosition} from "../auth/store/actions";
import {OpenGameMongolia, CloseGameMongolia, OpenMongolia, CloseMongolia} from "../../index";
import {GetAnnouncementList, GetChargeInfo} from "../home/store/actions";
import ChargeComponent from "../home/dialog/charge";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chargeVisible: false
        };
        this.requestLock = false;
        let room = POSITION_ROOM_FAST;
        switch (parseInt(this.props.match.params.room_id)) {
            case 2:
                room = POSITION_ROOM_ONE;
                break;
            case 3:
                room = POSITION_ROOM_FIVE;
                break;
            default:
                break;
        }
        if (this.props.userInfo && !this.requestLock) {
            const that = this;
            this.requestLock = true;
            this.props.enterHall(room, function () {
                that.requestLock = false;
            });
            !this.props.announcementList && this.props.getAnnouncementList();
        }
    }

    OpenCharge() {
        OpenMongolia();
        this.props.getChargeInfo();
        this.setState({
            chargeVisible: true
        });
    }

    CloseCharge() {
        CloseMongolia();
        this.setState({
            chargeVisible: false
        });
    }

    render() {
        if (!this.props.userInfo) {
            return (<Redirect to={{pathname: "/auth"}}/>)
        }
        if (this.props.stage !== actions.START_STAGE && this.props.stage !== actions.BET_STAGE) {
            OpenGameMongolia();
        } else {
            CloseGameMongolia();
        }
        return (
            <React.Fragment>
                <GameWrapper>
                    <DialComponent/>
                    <TableComponent stage={this.props.stage}/>
                    <MoneyComponent OpenCharge={this.OpenCharge.bind(this)}/>
                    <BetComponent/>
                </GameWrapper>
                <LotteryComponent stage={this.props.stage}/>
                <ChargeComponent visible={this.state.chargeVisible} CloseCharge={this.CloseCharge.bind(this)}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requestLock: state.game.get('requestLock'),
        userInfo: state.auth.get('userInfo'),
        stage: state.game.get('stage'),
        announcementList: state.home.get('announcementList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enterHall(room, callback) {
            dispatch(SetPlayerPosition(room));
            dispatch(actions.EnterHall(room, callback));
        },
        getAnnouncementList() {
            dispatch(GetAnnouncementList());
        },
        getChargeInfo() {
            dispatch(GetChargeInfo());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Game));