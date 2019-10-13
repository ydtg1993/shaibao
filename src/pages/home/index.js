import React from 'react';
import {
    HomeWrapper
} from './style';
import {connect} from 'react-redux';
import {SetPlayerPosition, POSITION_HOME} from '../auth/store/actions';
import * as actions from './store/actions';
/*component*/
import TopComponent from './top';
import NavigationComponent from './navigation';
import AnnouncementComponent from './announcement';
import RoomComponent from './room';
import BottomComponent from './bottom';
import {Redirect} from "react-router";
import {CloseMongolia, CloseGameMongolia, OpenMongolia} from "../../index";
import ChargeComponent from "./dialog/charge";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chargeVisible:false
        };
        this.props.setPlayerPosition();
        CloseGameMongolia();
        CloseMongolia();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.userInfo.token !== nextProps.userInfo.token) {
            return true;
        }else if(this.state.chargeVisible !== nextState.chargeVisible){
            return true;
        }
        return false;
    }

    componentDidMount() {
        if (!this.props.requestLock) {
            this.props.setRequestLock(true);
            !this.props.announcementList && this.props.getAnnouncementList();
            !this.props.signInList && this.props.getSignInList();
        }
    }

    OpenCharge(){
        OpenMongolia();
        this.props.getChargeInfo();
        this.setState({
            chargeVisible:true
        });
    }

    CloseCharge(){
        CloseMongolia();
        this.setState({
            chargeVisible:false
        });
    }

    render() {
        if (!this.props.userInfo) {
            return (<Redirect to={{pathname: "/auth"}}/>)
        }
        return (
            <React.Fragment>
                <HomeWrapper>
                    <TopComponent userinfo={this.props.userInfo} OpenCharge={this.OpenCharge.bind(this)}/>
                    <AnnouncementComponent/>
                    <NavigationComponent/>
                    <RoomComponent/>
                    <BottomComponent userinfo={this.props.userInfo}/>
                </HomeWrapper>
                <ChargeComponent visible={this.state.chargeVisible} CloseCharge={this.CloseCharge.bind(this)}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requestLock: state.home.get('requestLock'),
        userInfo: state.auth.get('userInfo'),
        myGold: state.auth.get('gold'),
        announcementList: state.home.get('announcementList'),
        signInList:state.home.get('signInList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRequestLock(bool) {
            dispatch(actions.SetRequestLock(bool));
        },
        getAnnouncementList() {
            dispatch(actions.GetAnnouncementList());
        },
        setPlayerPosition() {
            dispatch(SetPlayerPosition(POSITION_HOME));
        },
        getSignInList() {
            dispatch(actions.GetSignInList());
        },
        getChargeInfo(){
            dispatch(actions.GetChargeInfo());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)