import React from 'react';
import {
    TopFloor,
    UserSection,
    Avatar,
    UserInfo,
    Username,
    Line,
    UserId,
    MoneySection,
    MoneyInput,
    MoneyGold,
    MoneyCharge
} from './style';
import lineBg from '../../../resource/zhujiemian/tou xiang fen ge.png';
import avatar from '../../../resource/zhujiemian/touxiang.png';

class TopComponent extends React.Component {
    render() {
        return (
            <TopFloor>
                <UserSection>
                    <Avatar src={this.props.userinfo.avatar !== '' ? this.props.userinfo.avatar: avatar} />
                    <UserInfo>
                        <Username>{this.props.userinfo.username}</Username>
                        <Line src={lineBg}></Line>
                        <UserId>ID:{this.props.userinfo.id}</UserId>
                    </UserInfo>
                </UserSection>
                <MoneySection>
                    <MoneyGold/>
                    <MoneyInput>{this.props.userinfo.gold}</MoneyInput>
                    <MoneyCharge/>
                </MoneySection>
                <div></div>
            </TopFloor>
        )
    }
}

export default TopComponent