import React from 'react';
import {
    TopFloor,
    UserSection,
    Avatar,
    UserInfo,
    Username,
    Line,
    UserId,
    MoneyInput2,
    MoneyDigital2,
} from './style';
import {
    MoneySection,
    MoneyGold,
    MoneyCharge
} from '../style';
import {img_home_default_avatar} from '../../../resource';
import {connect} from "react-redux";
import anime from "animejs";
import UserInfoComponent from "../dialog/userinfo";
import {CloseMongolia, OpenMongolia} from "../../../index";

class TopComponent extends React.Component {
    constructor(props) {
        super(props);
        this.money = React.createRef();
        this.state = {
            userInfoVisible:false
        };
    }

    componentDidUpdate(nextProps, nextState, nextContext) {
        anime({
            targets: this.money.current,
            innerText: [parseInt(nextProps.gold), parseInt(this.props.gold)],
            round: 1,
            easing: 'easeInOutExpo'
        });
    }

    OpenUserInfoDialog() {
        OpenMongolia();
        this.setState({
            userInfoVisible:true
        });
    }

    CloseUserInfoDialog(){
        CloseMongolia();
        this.setState({
            userInfoVisible:false
        });
    }

    render() {
        return (
            <React.Fragment>
                <TopFloor>
                    <UserSection>
                        <div>
                            <Avatar src={this.props.userinfo.avatar !== '' ? this.props.userinfo.avatar : img_home_default_avatar}
                                    onClick={this.OpenUserInfoDialog.bind(this)}/>
                            <UserInfo>
                                <Username>{this.props.userinfo.username}</Username>
                                <Line/>
                                <UserId>ID:{this.props.userinfo.id}</UserId>
                            </UserInfo>
                        </div>
                    </UserSection>
                    <MoneySection>
                        <MoneyGold/>
                        <MoneyCharge onClick={this.props.OpenCharge}/>
                        <MoneyDigital2 ref={this.money}>{parseInt(this.props.gold)}</MoneyDigital2>
                        <MoneyInput2/>
                    </MoneySection>
                    <div></div>
                </TopFloor>
                <UserInfoComponent visible={this.state.userInfoVisible} CloseUserInfoDialog={this.CloseUserInfoDialog.bind(this)} OpenCharge={this.props.OpenCharge}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gold: state.auth.get('gold')
    }
};

export default connect(mapStateToProps, null)(TopComponent)