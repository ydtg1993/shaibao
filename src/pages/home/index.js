import  React from 'react';
import { LoginWrapper } from './style';
import { Link } from "react-router-dom";
class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <LoginWrapper>
                <Link to="/auth">auth</Link>
            </LoginWrapper>
        )
    }
}

export default Home