import React from 'react';
import {LoginWrapper, LoginButton, RegisterButton} from './style';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
import * as Actions from './store/actions';
/*component*/
import Login from './dialog/login';
import Register from './dialog/register';
import Mongolian from "../component/mongolian";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        /*bind function*/
        const {cookies} = props;
        cookies.set('token', 'hikki', {path: '/'});
    }

    render() {
        return (
            <React.Fragment>
                <LoginWrapper>
                    <LoginButton onClick={this.props.login}></LoginButton>
                    <RegisterButton onClick={this.props.register}></RegisterButton>
                </LoginWrapper>
                <Login show={this.props.showLoginDialog}/>
                <Register show={this.props.showRegisterDialog}/>
                <Mongolian show={this.props.showMongolian} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.auth.get('userState'),
        showMongolian: state.auth.get('showMongolian'),
        showLoginDialog:state.auth.get('showLoginDialog'),
        showRegisterDialog:state.auth.get('showRegisterDialog')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login() {
            dispatch(Actions.UserLogin())
        },
        register(){
            dispatch(Actions.UserRegister())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Auth))