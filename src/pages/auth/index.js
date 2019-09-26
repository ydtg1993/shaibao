import React from 'react';
import {LoginWrapper, LoginButton, RegisterButton} from './style';
/*component*/
import Login from './dialog/login';
import ResetComponent from './dialog/reset';
import Register from './dialog/register';

class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginVisible:false,
            registerVisible:false,
            resetVisible:false
        };
    }

    OpenLoginDialog(){
        this.setState({
            loginVisible:true
        });
    }

    CloseLoginDialog(){
        this.setState({
            loginVisible:false
        });
    }

    OpenRegisterDialog(){
        this.setState({
            registerVisible:true
        });
    }

    CloseRegisterDialog(){
        this.setState({
            registerVisible:false
        });
    }

    OpenResetDialog(){
        this.setState({
            loginVisible:false,
            resetVisible:true
        });
    }

    CloseResetDialog(){
        this.setState({
            resetVisible:false
        });
    }

    render() {
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

export default Auth