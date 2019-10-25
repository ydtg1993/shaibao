import React from 'react';
import {LoginWrapper, LoginButton, RegisterButton} from './style';
/*component*/
import Login from './dialog/login';
import ResetComponent from './dialog/reset';
import Register from './dialog/register';
import {CloseMongolia, OpenMongolia} from "../../index";
import {connect} from "react-redux";
import {connection} from "../../websocket";
import {GetPlayerInfo, POSITION_ROOM_FAST, POSITION_ROOM_FIVE, POSITION_ROOM_ONE, SetUserInfo} from "./store/actions";
import {Redirect} from "react-router";
import Cookies from "js-cookie";

class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginVisible:false,
            registerVisible:false,
            resetVisible:false
        };
        const cookieUserInfo = Cookies.get('userinfo') ? JSON.parse(Cookies.get('userinfo')) : null;
        if(!this.props.userInfo && cookieUserInfo){
            this.props.setPlayerInfo(cookieUserInfo);
            const that = this;
            Promise.resolve().then(function () {
                that.props.getPlayerInfo();
            });
        }
    }

    OpenLoginDialog(){
        OpenMongolia();
        this.setState({
            loginVisible:true
        });
    }

    CloseLoginDialog(){
        CloseMongolia();
        this.setState({
            loginVisible:false
        });
    }

    OpenRegisterDialog(){
        OpenMongolia();
        this.setState({
            registerVisible:true
        });
    }

    CloseRegisterDialog(){
        CloseMongolia();
        this.setState({
            registerVisible:false
        });
    }

    OpenResetDialog(){
        OpenMongolia();
        this.setState({
            loginVisible:false,
            resetVisible:true
        });
    }

    CloseResetDialog(){
        CloseMongolia();
        this.setState({
            resetVisible:false
        });
    }

    render() {
        if(this.props.userInfo){
            const that = this;
            Promise.resolve().then(function () {
                connection(that.props.userInfo.token);
            });
            let playerPosition = Cookies.get('playerPosition');
            switch (playerPosition) {
                case POSITION_ROOM_FAST:
                    return (<Redirect to={{pathname: "/game/1"}}/>);
                case POSITION_ROOM_ONE:
                    return (<Redirect to={{pathname: "/game/2"}}/>);
                case POSITION_ROOM_FIVE:
                    return (<Redirect to={{pathname: "/game/3"}}/>);
                default:
                    return (<Redirect to={{pathname: "/home"}}/>);
            }
        }
        return (
            <React.Fragment>
                <LoginWrapper>
                    <LoginButton onClick={this.OpenLoginDialog.bind(this)}></LoginButton>
                    <RegisterButton onClick={this.OpenRegisterDialog.bind(this)}></RegisterButton>
                </LoginWrapper>
                <Login visible={this.state.loginVisible} CloseLoginDialog={this.CloseLoginDialog.bind(this)} OpenResetDialog={this.OpenResetDialog.bind(this)}/>
                <Register visible={this.state.registerVisible} CloseRegisterDialog={this.CloseRegisterDialog.bind(this)}/>
                <ResetComponent visible={this.state.resetVisible} CloseResetDialog={this.CloseResetDialog.bind(this)}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.get('userInfo')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPlayerInfo(userinfo){
            dispatch(SetUserInfo(userinfo));
        },
        getPlayerInfo(){
            dispatch(GetPlayerInfo());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth)