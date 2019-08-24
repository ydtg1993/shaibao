import React from 'react';
import {
    HomeWrapper,
} from './style';
import {connect} from 'react-redux';
import { SetUserInfo } from '../auth/store/actions';
import { SetWebsocket,CloseWebsocket } from '../game/store/actions';
/*component*/
import TopComponent from './top';
import NavigationComponent from './navigation';
import AnnouncementComponent from './announcement';
import RoomComponent from './room';
import BottomComponent from './bottom';
import {Redirect} from "react-router";
import Cookies from "universal-cookie";
import Toast from "../component/toast";

const cookies = new Cookies();
const userinfo = cookies.get('userinfo');

class Home extends React.Component {
    constructor(props){
        super(props);
        if(userinfo && !this.props.userInfo) {
            this.props.setUserInfo(userinfo);
            this.state = {userinfo:userinfo};
        }else if(this.props.userInfo){
            this.state = {userinfo:this.props.userInfo};
        }else {
            this.state = {userinfo:false};
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(!nextProps.websocket) {
            this.connection();
        }
    }

    connection(){
        const ws = new WebSocket('ws://10.10.13.153:8000/ws/chat/');
        this.props.setWebsocket(ws);
        const closeWebsocket = this.props.closeWebsocket;
        ws.onopen = () => {
            console.log('connected');
        };

        ws.onmessage = evt => {
            const message = JSON.parse(evt.data);
            console.log(message)
        };

        ws.onerror = e => {
            console.log('error');
            closeWebsocket()
        };
    }

    render() {
        if(!userinfo && !this.props.userInfo){
            return (<Redirect to={{pathname: "/auth"}}/>)
        }
        return (
            <HomeWrapper>
                <TopComponent userinfo={this.props.userInfo}/>
                <AnnouncementComponent/>
                <NavigationComponent/>
                <RoomComponent/>
                <BottomComponent/>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo:state.auth.get('userInfo'),
        websocket: state.game.get('websocket')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo(userinfo){
            let action = SetUserInfo(userinfo)
            dispatch(action);
        },
        setWebsocket(client){
            let action = SetWebsocket(client)
            dispatch(action);
        },
        closeWebsocket(){
            let action = CloseWebsocket();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)