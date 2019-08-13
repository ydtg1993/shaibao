import  React from 'react';
import { LoginWrapper,LoginButton,RegisterButton } from './style';
import {connect} from 'react-redux';
import { withCookies } from 'react-cookie';

class Login extends React.Component{
    constructor(props){
        super(props);
        const { cookies } = props;
        cookies.set('token', 'hikki', { path: '/' });
    }

    render() {
        return (
            <LoginWrapper>
                <LoginButton></LoginButton>
                <RegisterButton></RegisterButton>
            </LoginWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps,null)(withCookies(Login))