import  React from 'react';
import { LoginWrapper,LoginButton,RegisterButton } from './style';
import {connect} from 'react-redux';
import { withCookies } from 'react-cookie';

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
                <LoginButton onClick={this.ShowLoginDialog}></LoginButton>
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

    }
};

export default connect(mapStateToProps,null)(withCookies(Auth))