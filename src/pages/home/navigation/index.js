import React from 'react';
import {
    NavigationFloor,
    NavigationTab1,
    NavigationTab2,
    NavigationTab3,
    NavigationTab4,
    TabList,
} from './style';
import BetRecordComponent from "../dialog/betRecord";
import {connect} from "react-redux";
import * as Actions from "../store/actions";
import ActivityComponent from "../dialog/activity";
import SignInComponent from "../dialog/signin";
import {CloseMongolia, OpenMongolia} from "../../../index";
import PigComponent from "../dialog/pig";

class NavigationComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pigVisible:false,
            betRecordVisible:false,
            activityVisible:false,
            signInVisible:false
        }
    }

    OpenPig(){
        OpenMongolia();
        this.setState({
            pigVisible:true,
        })
    }

    ClosePig(){
        CloseMongolia();
        this.setState({
            pigVisible:false,
        })
    }

    OpenSignIn(){
        OpenMongolia();
        this.setState({
            signInVisible:true,
        })
    }

    CloseSignIn(){
        CloseMongolia();
        this.setState({
            signInVisible:false
        })
    }

    OpenBetRecord(){
        OpenMongolia();
        this.props.getBetRecords(1,[]);
        this.setState({
            betRecordVisible:true,
        });
    }

    CloseBetRecord(){
        CloseMongolia();
        this.setState({
            betRecordVisible:false,
        })
    }

    OpenActivity(){
        OpenMongolia();
        this.props.getActivityList();
        this.setState({
            activityVisible:true,
        });
    }

    CloseActivity(){
        CloseMongolia();
        this.setState({
            activityVisible:false,
        });
    }

    render() {
        return (
            <React.Fragment>
                <NavigationFloor>
                    <TabList>
                        <NavigationTab1 onClick={this.OpenPig.bind(this)}/>
                        <NavigationTab2 onClick={this.OpenSignIn.bind(this)}/>
                        <NavigationTab3 onClick={this.OpenBetRecord.bind(this)}/>
                        <NavigationTab4 onClick={this.OpenActivity.bind(this)}/>
                    </TabList>
                </NavigationFloor>
                <PigComponent visible={this.state.pigVisible} ClosePig={this.ClosePig.bind(this)}/>
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