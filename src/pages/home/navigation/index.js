import React from 'react';
import {
    NavigationFloor,
    NavigationTab,
    TabList,
} from './style';
/*img resource*/
import lucky from '../../../resource/zhujiemian/1.png';
import signIn from '../../../resource/zhujiemian/2.png';
import bet from '../../../resource/zhujiemian/3.png';
import activity from '../../../resource/zhujiemian/4.png';
import BetRecordComponent from "../dialog/betRecord";
import {connect} from "react-redux";
import * as Actions from "../store/actions";
import ActivityComponent from "../dialog/activity";
import SignInComponent from "../dialog/signin";

class NavigationComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            betRecordVisible:false,
            activityVisible:false,
            signInVisible:false
        }
    }

    OpenSignIn(){
        this.setState({
            signInVisible:true,
        })
    }

    CloseSignIn(){
        this.setState({
            signInVisible:false
        })
    }

    OpenBetRecord(){
        this.props.getBetRecords(1,[]);
        this.setState({
            betRecordVisible:true,
        });
    }

    CloseBetRecord(){
        this.setState({
            betRecordVisible:false,
        })
    }

    OpenActivity(){
        this.props.getActivityList();
        this.setState({
            activityVisible:true,
        });
    }

    CloseActivity(){
        this.setState({
            activityVisible:false,
        });
    }

    render() {
        return (
            <React.Fragment>
                <NavigationFloor>
                    <TabList>
                        <NavigationTab src={lucky}/>
                        <NavigationTab src={signIn} onClick={this.OpenSignIn.bind(this)}/>
                        <NavigationTab src={bet} onClick={this.OpenBetRecord.bind(this)}/>
                        <NavigationTab src={activity} onClick={this.OpenActivity.bind(this)}/>
                    </TabList>
                </NavigationFloor>
                <SignInComponent visible={this.state.signInVisible} CloseSignIn={this.CloseSignIn.bind(this)}/>
                <BetRecordComponent visible={this.state.betRecordVisible} CloseBetRecord={this.CloseBetRecord.bind(this)}/>
                <ActivityComponent visible={this.state.activityVisible} CloseActivity={this.CloseActivity.bind(this)}/>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBetRecords(page,type){
            dispatch(Actions.GetBetRecord(page,type))
        },
        getActivityList(){
            dispatch(Actions.GetActivityList());
        }
    }
};

export default connect(null,mapDispatchToProps)(NavigationComponent);