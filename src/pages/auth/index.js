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
                    <LoginButton value={this.props.userState} onClick={this.props.login}></LoginButton>
                    <RegisterButton></RegisterButton>
                </LoginWrapper>
                <Login show={this.props.showLoginDialog}/>
                <Mongolian show={this.props.showMongolian} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.auth.get('userState'),
        showMongolian: state.auth.get('showMongolian'),
        showLoginDialog:state.auth.get('showLoginDialog')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login() {
            const action = Actions.UserLogin(true);
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Auth))