import React from 'react';
import {
    HomeWrapper,
} from './style';
import {connect} from 'react-redux';
import {SetPlayerPosition,POSITION_HOME} from '../auth/store/actions';
import * as actions from './store/actions';
/*component*/
import TopComponent from './top';
import NavigationComponent from './navigation';
import AnnouncementComponent from './announcement';
import RoomComponent from './room';
import BottomComponent from './bottom';
import {Redirect} from "react-router";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.props.setPlayerPosition();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props.userInfo.token !== nextProps.userInfo.token){
            return true;
        }
        return false;
    }

    componentDidMount() {
        if(!this.props.requestLock) {
            this.props.setRequestLock(true);
            this.props.getAnnouncementList();
            this.props.getSignInList();
        }
    }

    render() {
        if(!this.props.userInfo){
            return (<Redirect to={{pathname: "/auth"}}/>)
        }
        return (
            <HomeWrapper>
                <TopComponent userinfo={this.props.userInfo}/>
                <AnnouncementComponent/>
                <NavigationComponent/>
                <RoomComponent/>
                <BottomComponent userinfo={this.props.userInfo}/>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requestLock:state.home.get('requestLock'),
        userInfo:state.auth.get('userInfo'),
        myGold:state.auth.get('gold'),
        announcementList:state.home.get('announcementList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRequestLock(bool){
            dispatch(actions.SetRequestLock(bool));
        },
        getAnnouncementList(){
            dispatch(actions.GetAnnouncementList());
        },
        setPlayerPosition(){
            dispatch(SetPlayerPosition(POSITION_HOME));
        },
        getSignInList(){
            dispatch(actions.GetSignInList());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)