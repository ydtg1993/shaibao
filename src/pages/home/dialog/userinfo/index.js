import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {
    UserInfoDialog,
    Title,
    DialogInfoContent,
    AvatarSec,
    ContentSec,
    DialogInfoBottom,
    Avatar,
    NameInput,
    MoneySection,
    MoneyInput,
    MoneyDigital,
    AccountInput,
    CardInput,
    MobileInput,
    STitle,
    SText
} from './type';
import {DialogTop, BottomDecoration, Close, MongolianWrapper} from "../style";
import avatar from "../../../../resource/zhujiemian/touxiang.png";
import {MoneyCharge, MoneyGold} from "../../top/style";

class UserInfoComponent extends React.Component {
    render() {
        const {visible} = this.props;
        const that = this;
        return visible && (<React.Fragment>
            <UserInfoDialog className={visible ? 'show fadeInUp faster animated' : ''}>
                <DialogTop>
                    <Title/>
                    <Close onClick={this.props.CloseUserInfoDialog}/>
                </DialogTop>
                <DialogInfoContent>
                    <AvatarSec>
                        <Avatar src={this.props.userinfo.avatar !== '' ? this.props.userinfo.avatar : avatar}/>
                    </AvatarSec>
                    <ContentSec>
                        <NameInput>{this.props.userinfo.username}</NameInput>
                        <MoneySection>
                            <MoneyGold/>
                            <MoneyDigital>{parseInt(this.props.gold)}</MoneyDigital>
                            <MoneyInput/>
                            <MoneyCharge/>
                        </MoneySection>
                        <AccountInput>
                            <STitle>账号ID</STitle>
                            <SText>{this.props.userinfo.id}</SText>
                        </AccountInput>

                        <MobileInput>
                            <STitle>手机号</STitle>
                            <SText></SText>
                        </MobileInput>

                        <CardInput>
                            <STitle>银行卡</STitle>
                            <SText>xxx</SText>
                        </CardInput>
                    </ContentSec>
                </DialogInfoContent>
                <DialogInfoBottom></DialogInfoBottom>
                <BottomDecoration/>
            </UserInfoDialog>
            <MongolianWrapper className={visible ? 'show fadeIn faster animated' : ''}/>
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        gold: state.auth.get('gold'),
        userinfo: state.auth.get('userInfo')
    }
};

export default connect(mapStateToProps, null)(UserInfoComponent);