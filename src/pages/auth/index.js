import React from 'react';
import {LoginWrapper, LoginButton, RegisterButton} from './style';
import {connect} from 'react-redux';
import * as Actions from './store/actions';
/*component*/
import Login from './dialog/login';
import ResetComponent from './dialog/reset';
import Register from './dialog/register';
import Mongolian from "../component/mongolian";

class Auth extends React.Component {
    render() {
        return (
            <React.Fragment>
                <LoginWrapper>
                    <LoginButton onClick={this.props.login}></LoginButton>
                    <RegisterButton onClick={this.props.register}></RegisterButton>
                </LoginWrapper>
                <Login show={this.props.showLoginDialog}/>
                <ResetComponent show={this.props.showResetDialog}/>
                <Register show={this.props.showRegisterDialog}/>
                <Mongolian show={this.props.showMongolian} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showMongolian: state.auth.get('showMongolian'),
        showLoginDialog:state.auth.get('showLoginDialog'),
        showRegisterDialog:state.auth.get('showRegisterDialog'),
        showResetDialog:state.auth.get('showResetDialog')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login() {
            dispatch(Actions.OpenLoginDialog())
        },
        register(){
            dispatch(Actions.OpenRegisterDialog())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)