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
import Cookies from "universal-cookie";
import LotteryComponent from "./lottery";
import {SetWebsocket} from "./store/actions";
import {CloseWebsocket} from "./store/actions";
import {SetUserInfo} from "../auth/store/actions";

const cookies = new Cookies();
const userinfo = cookies.get('userinfo');

class Game extends React.Component {
    constructor(props) {
        super(props);
        if(userinfo && !this.props.userInfo) {
            this.props.setUserInfo(userinfo);
            this.state = {userinfo:userinfo};
        }else if(this.props.userInfo){
            this.state = {userinfo:this.props.userInfo};
        }else {
            this.state = {userinfo:false};
        }
        let room = 'Fast';
        switch (this.props.match.params.room_id) {
            case 2:
                room = 'OneMinute';
                break;
            case 3:
                room = 'FivesMinute';
                break;
        }
        this.props.enterHall(room);

        this.state = {
            lottery:false
        };
    }

    connection(token){
        const ws = new WebSocket('ws://10.10.13.153:8000/ws/three/'+token);
        this.props.setWebsocket(ws);
        const closeWebsocket = this.props.closeWebsocket;
        ws.onopen = () => {
            console.log('connected');
        };

        ws.onmessage = evt => {
            console.log(evt)
            const message = JSON.parse(evt.data);
            console.log(message)
        };

        ws.onerror = e => {
            console.log(e);
            closeWebsocket()
        };
    }

    componentDidMount() {
        const that = this;
        /*const interval = setInterval(function () {
            that.setState({
                lottery:true
            });
            clearInterval(interval);
        },3000);*/
    }

    render() {
        if (!userinfo && !this.props.userInfo) {
            return (<Redirect to={{pathname: "/auth"}}/>)
        }
        if(!this.props.websocket && this.props.userInfo) {
            this.connection(this.props.userInfo.token);
        }
        return (
            <React.Fragment>
                <GameWrapper>
                    <DialComponent/>
                    <TableComponent/>
                    <MoneyComponent/>
                    <BetComponent/>
                </GameWrapper>
                <LotteryComponent start={this.state.lottery}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.get('userInfo'),
        websocket: state.game.get('websocket')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enterHall(room){
            dispatch(actions.EnterHall(room));
        },
        setUserInfo(userinfo){
            let action = SetUserInfo(userinfo);
            dispatch(action);
        },
        setWebsocket(client){
            let action = SetWebsocket(client);
            dispatch(action);
        },
        closeWebsocket(){
            let action = CloseWebsocket();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Game));