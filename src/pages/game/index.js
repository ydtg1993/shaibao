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
import {POSITION_ROOM_FAST,POSITION_ROOM_ONE,POSITION_ROOM_FIVE} from "../auth/store/actions";
import {MongolianWrapper} from "./lottery/style";

class Game extends React.Component {
    constructor(props) {
        super(props);
        let room = POSITION_ROOM_FAST;
        switch (parseInt(this.props.match.params.room_id)) {
            case 2:
                room = POSITION_ROOM_ONE;
                break;
            case 3:
                room = POSITION_ROOM_FIVE;
                break;
        }
        this.props.initStage();
        this.props.enterHall(room);
    }

    render() {
        if (!this.props.userInfo) {
            return (<Redirect to={{pathname: "/auth"}}/>)
        }
        return (
            <React.Fragment>
                <GameWrapper>
                    <DialComponent/>
                    <TableComponent stage={this.props.stage}/>
                    <MoneyComponent/>
                    <BetComponent/>
                </GameWrapper>
                <LotteryComponent stage={this.props.stage}/>
                <MongolianWrapper className={this.props.stage !== actions.START_STAGE && this.props.stage !== actions.BET_STAGE ? 'show' : 'hidden'}></MongolianWrapper>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.get('userInfo'),
        stage:state.game.get('stage')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enterHall(room){
            dispatch(actions.EnterHall(room));
        },
        initStage(){
            dispatch(actions.InitStage());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Game));