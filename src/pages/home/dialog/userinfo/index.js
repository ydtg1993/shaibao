import React from 'react';
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
import {ClearUserInfo, GetBankCardInfo} from "../../../auth/store/actions";
import {GegBankList} from '../../store/actions';
import BindCardComponent from "../bindCard";
import {CloseMongolia, OpenMongolia} from "../../../../index";
import {img_home_default_avatar} from '../../../../resource';

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
        OpenMongolia();
        if(!this.props.bankList){
            this.props.getBankList();
        }
        this.setState({
            bindCardVisible:true,
        });
    }

    CloseBindCardDialog(){
        this.setState({
            bindCardVisible:false
        });
        CloseMongolia();
    }

    OpenCharge(){
        this.props.CloseUserInfoDialog();
        OpenMongolia();
        this.props.OpenCharge();
    }

    render() {
        const {cardInfo} = this.props;
        const {visible} = this.state;
        return (<React.Fragment>
            <UserInfoDialog className={visible ? 'show fadeInUp faster animated' : 'hidden'}>
                <DialogTop>
                    <Title/>
                    <Close onClick={this.props.CloseUserInfoDialog}/>
                </DialogTop>
                <DialogInfoContent>
                    <AvatarSec>
                        <Avatar src={this.props.userinfo.avatar !== '' ? this.props.userinfo.avatar : img_home_default_avatar}/>
                    </AvatarSec>
                    <ContentSec>
                        <NameInput>{this.props.userinfo.username}</NameInput>
                        <MoneySection>
                            <MoneyGold/>
                            <MoneyDigital2>{parseInt(this.props.gold)}</MoneyDigital2>
                            <MoneyInput2/>
                            <MoneyCharge onClick={this.OpenCharge.bind(this)}/>
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