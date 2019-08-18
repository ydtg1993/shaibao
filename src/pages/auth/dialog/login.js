import React from 'react';
import Mongolian from "../../component/mongolian";

class Login extends React.Component{
    render() {
        return (
            <Mongolian show={this.props.showMongolian} />
        );
    }
}

export default Login;