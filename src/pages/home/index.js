import React from 'react';
import {
    HomeWrapper,
} from './style';
import {connect} from 'react-redux';
/*component*/
import TopComponent from './top';
import NavigationComponent from './navigation';
import AnnouncementComponent from './announcement';
import RoomComponent from './room';
import BottomComponent from './bottom';
import {Redirect} from "react-router";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(!this.props.userToken){
            return (
                (<Redirect to={{pathname: "/auth"}}/>)
            )
        }
        return (
            <HomeWrapper>
                <TopComponent/>
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
        userToken:state.auth.get('userToken'),
        userInfo:state.game.get('userInfo')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)