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
    MoneyInput2,
    MoneyDigital2,
    AccountInput,
    CardInput,
    MobileInput,
    STitle,
    SText,
    SubmitButton,
    BindButton
} from './style';
import {DialogTop, BottomDecoration, Close, SmallInputBg} from "../style";
import {MoneyCharge, MoneyGold} from "../../style";
import avatar from "../../../../resource/zhujiemian/touxiang.png";
import {ClearUserInfo, GetBankCardInfo} from "../../../auth/store/actions";
import {GegBankList} from '../../store/actions';
import BindCardComponent from "../bindCard";


class UserInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bindCardVisible:false,
            visible:props.visible
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(!this.props.cardInfo){
            this.props.getBankCardInfo(this.props.userinfo.token);
        }
        if(this.props.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible
            })
        }
    }

    OpenBindCardDialog(){
        this.props.CloseUserInfoDialog();
        if(!this.props.bankList){
            this.props.getBankList();
        }
        this.setState({
            bindCardVisible:true,
        });
        let MongolianScreen = document.getElementById('MongolianScreen');
        MongolianScreen.className = MongolianScreen.className.replace(/CloseMongolian/,'ShowMongolian');
    }

    CloseBindCardDialog(){
        this.setState({
            bindCardVisible:false
        });
        let MongolianScreen = document.getElementById('MongolianScreen');
        MongolianScreen.className = MongolianScreen.className.replace(/ShowMongolian/,'CloseMongolian');
    }

    render() {
        const {cardInfo} = this.props;
        const {visible} = this.state;
        return (<React.Fragment>
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
                            <MoneyDigital2>{parseInt(this.props.gold)}</MoneyDigital2>
                            <MoneyInput2/>
                            <MoneyCharge/>
                        </MoneySection>
                        <AccountInput>
                            <STitle>账号ID</STitle>
                            <SText>{this.props.userinfo.id}</SText>
                        </AccountInput>
                        <MobileInput>
                            <STitle>手机号</STitle>
                            <SText>{this.props.userinfo.mobile}</SText>
                        </MobileInput>
                        <CardInput>
                            <STitle>银行卡</STitle>
                            <SText>{cardInfo.name ? cardInfo.name : ''}</SText>
                            <BindButton onClick={this.OpenBindCardDialog.bind(this)}><span>去绑定</span><SmallInputBg/></BindButton>
                        </CardInput>
                    </ContentSec>
                </DialogInfoContent>
                <DialogInfoBottom>
                    <SubmitButton onClick={this.props.clearUserInfo}>切换账号</SubmitButton>
                </DialogInfoBottom>
                <BottomDecoration/>
            </UserInfoDialog>
            <BindCardComponent visible={this.state.bindCardVisible} CloseBindCardDialog={this.CloseBindCardDialog.bind(this)}/>
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        gold: state.auth.get('gold'),
        userinfo: state.auth.get('userInfo'),
        cardInfo:state.auth.get('cardInfo'),
        bankList:state.home.get('bankList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearUserInfo(){
            dispatch(ClearUserInfo());
        },
        getBankCardInfo(token){
            dispatch(GetBankCardInfo(token));
        },
        getBankList(){
            dispatch(GegBankList());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoComponent);