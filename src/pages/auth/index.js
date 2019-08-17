import  React from 'react';
import { LoginWrapper,LoginButton,RegisterButton } from './style';
import {connect} from 'react-redux';
import { withCookies } from 'react-cookie';
import * as Actions from './store/actions';

class Auth extends React.Component{
    constructor(props){
        super(props);
        /*bind function*/
        this.ShowLoginDialog = this.ShowLoginDialog.bind(this);
        const { cookies } = props;
        cookies.set('token', 'hikki', { path: '/' });
    }

    render() {
        return (
            <LoginWrapper>
                <LoginButton value={this.props.userState} onClick={this.props.changeState}></LoginButton>
                <RegisterButton></RegisterButton>
            </LoginWrapper>
        )
    }

    ShowLoginDialog(){
        alert(1)
    }
}

const mapStateToProps = (state) => {
    return {
        userState:state.auth.get('userState')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeState(){
            const action = Actions.UserLogin(true);
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withCookies(Auth))