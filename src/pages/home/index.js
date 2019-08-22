import React from 'react';
import {
    HomeWrapper,
} from './style';
import {connect} from 'react-redux';
import { SetUserInfo } from '../auth/store/actions';
/*component*/
import TopComponent from './top';
import NavigationComponent from './navigation';
import AnnouncementComponent from './announcement';
import RoomComponent from './room';
import BottomComponent from './bottom';
import {Redirect} from "react-router";
import Cookies from "universal-cookie";

class Home extends React.Component {
    constructor(props) {
        super(props);
        const cookies = new Cookies();
        let userinfo = cookies.get('userinfo');
        if(userinfo && !this.props.userInfo) {
            this.props.setUserInfo(userinfo);
        }
    }

    render() {
        if(!this.props.userInfo){
            return (
                (<Redirect to={{pathname: "/auth"}}/>)
            )
        }
        return (
            <HomeWrapper>
                <TopComponent userinfo={this.props.userInfo}/>
                <AnnouncementComponent/>
                <NavigationComponent/>
                <RoomComponent/>
                <BottomComponent/>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo:state.auth.get('userInfo')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo(userinfo){
            dispatch(SetUserInfo(userinfo));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)