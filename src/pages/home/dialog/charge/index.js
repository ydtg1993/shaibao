import React from 'react';
import {
    ChargeDialog,
    Title,
    MoneySticker,
    ChargeNav,
    Tab,
    TabIconScan,
    TabIconUp,
    ChargeContent,
    ChargeContentInfo,
    ChargeListContentInfo,
    BankCard,
    BankTitle,
    BankInfo,
    BankInfoTitle,
    BankInfoType,
    BankInfoRange,
    Floor,
    LeftFloor,
    LastFloor,
    InputTitle,
    Input,
    ClearButton,
    MoneyButton,
    ChargeRecordButton,
    SubmitButton,
    Text,
    A,
    Service,
    ScanSec,
    QrCode,
    ScanTagList,
    ScanTagUp,
    ScanTagWechat,
    ScanTagAlipay,
    Tips,
    EspecialTips,
    ChargeBottom
} from './style';
import {Close, BottomDecoration, DialogTop, SmallInputBg} from "../style";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Toast from "../../../component/toast";
import {connect} from "react-redux";
import {CommitChargeOrder, GetChargeOrderList} from "../../store/actions";
import ChargeRecordComponent from "./record";
import {CloseMongolia, OpenMongolia} from "../../../../index";
import ChargeQrcodeComponent from "./qr";

class ChargeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            chargeRecordVisible:false,
            chargeQrcodeVisible:false
        };
        this.accountElem = React.createRef();
        this.chargeValue = React.createRef();
        this.transferName = React.createRef();
        this.transferChargeValue = React.createRef();
        this.bankInfo = false;
    }

    ClearInput(pos) {
        switch (pos) {
            case 1:
                this.accountElem.current.value = '';
                return;
            case 2:
                this.chargeValue.current.value = '';
                return;
            case 3:
                this.transferName.current.value = '';
                return;
            case 4:
                this.transferChargeValue.current.value = '';
                return;
            default:
                return;
        }
    }

    SelectMoney(money) {
        this.chargeValue.current.value = money;
    }

    ChangePosition(position) {
        this.setState({
            position
        });
    }

    SelectBank(bankInfo) {
        this.bankInfo = bankInfo;
        this.ChangePosition(3);
    }

    SelectDom() {
        switch (this.state.position) {
            case 1:
                return this.ScanDom();
            case 2:
                return this.UpListDom();
            case 3:
                return this.UpDom();
            default:
                return;
        }
    }

    ScanDom() {
        let fastInfo = this.props.chargeInfo.fast;
        return (
            <ChargeContent>
                <ChargeContentInfo>
                    <div>
                        <Floor>
                            <InputTitle>充值账号: </InputTitle>
                            <Input placeholder='请输入充值账号' ref={this.accountElem}/>
                            <ClearButton onClick={this.ClearInput.bind(this, 1)}>
                                <span>清除</span>
                                <SmallInputBg/>
                            </ClearButton>
                        </Floor>
                        <Floor>
                            <InputTitle>充值金额: </InputTitle>
                            <Input placeholder='请输入充值金额' ref={this.chargeValue}/>
                            <ClearButton onClick={this.ClearInput.bind(this, 2)}>
                                <span>清除</span>
                                <SmallInputBg/>
                            </ClearButton>
                        </Floor>
                        <Floor style={{padding: '0 15px 0'}}>
                            <MoneyButton
                                onClick={this.SelectMoney.bind(this, 50)}><span>50</span><SmallInputBg/></MoneyButton>
                            <MoneyButton
                                onClick={this.SelectMoney.bind(this, 100)}><span>100</span><SmallInputBg/></MoneyButton>
                            <MoneyButton
                                onClick={this.SelectMoney.bind(this, 300)}><span>300</span><SmallInputBg/></MoneyButton>
                            <MoneyButton
                                onClick={this.SelectMoney.bind(this, 500)}><span>500</span><SmallInputBg/></MoneyButton>
                        </Floor>
                        <Floor style={{marginTop: '10px'}}>
                            <Text>收款账户名: {fastInfo ? fastInfo.name : ''}</Text>
                            <CopyToClipboard text={fastInfo ? fastInfo.name : 'null'}>
                                <A onClick={() => Toast.success('复制成功', 1000)}>复制</A>
                            </CopyToClipboard>
                        </Floor>
                        <Floor style={{marginTop: '10px'}}>
                            <Text>收款账号: {fastInfo ? fastInfo.number : ''}</Text>
                            <CopyToClipboard text={fastInfo ? fastInfo.number : 'null'}>
                                <A onClick={() => Toast.success('复制成功', 1000)}>复制</A>
                            </CopyToClipboard>
                        </Floor>
                        <LeftFloor>
                            <Text>二维码:</Text>
                            <ScanSec onClick={this.OpenQrcode.bind(this)}>
                                <QrCode src={fastInfo ? fastInfo.qr_code : ''}/>
                                <ScanTagList>
                                    <ScanTagUp/>
                                    <ScanTagWechat/>
                                    <ScanTagAlipay/>
                                </ScanTagList>
                            </ScanSec>
                        </LeftFloor>
                        <Tips style={{marginTop: '5px'}}>温馨提示：<EspecialTips>请转账成功后在提交订单</EspecialTips></Tips>
                        <Tips style={{textIndent: '-5px'}}>【充值金额】填写扫码支付订单的金额 </Tips>
                        <Tips style={{textIndent: '-5px'}}>【充值账号】填写您的会员账号，扫码支付完成后，提交充值订单</Tips>
                    </div>
                    <div>
                        <LastFloor>
                            <div><Service/><A className='big'>客服</A></div>
                            <ChargeRecordButton onClick={this.OpenChargeRecord.bind(this)}><span>充值记录</span><SmallInputBg/></ChargeRecordButton>
                        </LastFloor>
                    </div>
                </ChargeContentInfo>
                <ChargeBottom>
                    <SubmitButton
                        onClick={() => this.props.commitChargeOrder('fast',fastInfo.id, this.accountElem, this.chargeValue)}><span>提交订单</span><SmallInputBg/></SubmitButton>
                </ChargeBottom>
            </ChargeContent>
        );
    }

    UpListDom() {
        const that = this;
        let banks = this.props.chargeInfo.banks;
        return (
            <ChargeListContentInfo>
                {banks && Object.keys(banks).map(function (key) {
                    return (
                        <BankCard key={banks[key].id} onClick={that.SelectBank.bind(that, banks[key])}>
                            <BankTitle>BANK</BankTitle>
                            <BankInfo>
                                <BankInfoTitle>{banks[key].bank_name}</BankInfoTitle>
                                <BankInfoType>储蓄卡</BankInfoType>
                                <div style={{clear: 'both'}}></div>
                                <BankInfoRange>范围:&nbsp;&nbsp;{banks[key].interval}</BankInfoRange>
                            </BankInfo>
                        </BankCard>
                    );
                })}
            </ChargeListContentInfo>
        );
    }

    UpDom() {
        let bankInfo = this.bankInfo;
        return (
            <ChargeContent>
                <ChargeContentInfo>
                    <div>
                        <Floor>
                            <Text>银&nbsp;&nbsp;&nbsp;&nbsp;行: {bankInfo ? bankInfo.bank_name : ''}</Text>
                        </Floor>
                        <Floor>
                            <Text>收款人: {bankInfo ? bankInfo.name : ''}</Text>
                            <CopyToClipboard text={bankInfo ? bankInfo.name : 'null'}>
                                <A onClick={() => Toast.success('复制成功', 1000)}>复制</A>
                            </CopyToClipboard>
                        </Floor>
                        <Floor>
                            <Text>收款账号: {bankInfo ? bankInfo.number : ''}</Text>
                            <CopyToClipboard text={bankInfo ? bankInfo.number : 'null'}>
                                <A onClick={() => Toast.success('复制成功', 1000)}>复制</A>
                            </CopyToClipboard>
                        </Floor>
                        <Floor>
                            <InputTitle>存款人: </InputTitle>
                            <Input placeholder='转账账号对应姓名' ref={this.transferName}/>
                            <ClearButton onClick={this.ClearInput.bind(this, 3)}>
                                <span>清除</span>
                                <SmallInputBg/>
                            </ClearButton>
                        </Floor>
                        <Floor>
                            <InputTitle>充值金额: </InputTitle>
                            <Input placeholder='请输入充充值金额' ref={this.transferChargeValue}/>
                            <ClearButton onClick={this.ClearInput.bind(this, 4)}>
                                <span>清除</span>
                                <SmallInputBg/>
                            </ClearButton>
                        </Floor>
                        <Tips style={{marginTop: '20px'}}>温馨提示:</Tips>
                        <Tips>1、请正确输入您的户名和充值金额</Tips>
                        <Tips>2、请务必转账后，提交充值订单</Tips>
                        <Tips>3、转账一笔提交1次，请勿重复提交订单</Tips>
                        <Tips>4、转账时，无比增加小数点，一边财务查数</Tips>
                        <Tips>5、转账后请保留单据作为核对证明</Tips>
                    </div>
                    <div>
                        <LastFloor>
                            <div><Service/><A className='big'>客服</A></div>
                            <ChargeRecordButton onClick={this.OpenChargeRecord.bind(this)}><span>充值记录</span><SmallInputBg/></ChargeRecordButton>
                        </LastFloor>
                    </div>
                </ChargeContentInfo>
                <ChargeBottom>
                    <SubmitButton
                        onClick={() => this.props.commitChargeOrder('bank',bankInfo.id, this.transferName, this.transferChargeValue)}><span>提交订单</span><SmallInputBg/></SubmitButton>
                </ChargeBottom>
            </ChargeContent>
        );
    }

    OpenChargeRecord(){
        this.props.CloseCharge();
        this.props.getChargeOrderList();
        OpenMongolia();
        this.setState({
            chargeRecordVisible:true
        });
    }

    CloseChargeRecord(){
        CloseMongolia();
        this.setState({
            chargeRecordVisible:false
        });
    }

    OpenQrcode(){
        this.setState({
            chargeQrcodeVisible:true
        });
    }

    CloseQrcode(){
        this.setState({
            chargeQrcodeVisible:false
        });
    }

    render() {
        const {visible,chargeInfo} = this.props;
        return (
            <React.Fragment>
                <ChargeDialog className={visible ? 'show fadeInUp faster animated' : 'hidden'}>
                    <DialogTop>
                        <MoneySticker/>
                        <Title/>
                        <Close onClick={this.props.CloseCharge}/>
                    </DialogTop>
                    <ChargeNav>
                        <div><Tab className={this.state.position === 1 ? 'focus' : ''}
                                  onClick={this.ChangePosition.bind(this, 1)}><TabIconScan/>快捷扫码</Tab></div>
                        <div><Tab className={this.state.position !== 1 ? 'focus' : ''}
                                  onClick={this.ChangePosition.bind(this, 2)}><TabIconUp/>银联支付</Tab></div>
                    </ChargeNav>
                    {this.SelectDom()}
                    <BottomDecoration/>
                </ChargeDialog>
                <ChargeRecordComponent visible={this.state.chargeRecordVisible} CloseChargeRecord={this.CloseChargeRecord.bind(this)}/>
                <ChargeQrcodeComponent visible={this.state.chargeQrcodeVisible} src={chargeInfo.fast ? chargeInfo.fast.qr_code : ''} CloseQrcode={this.CloseQrcode.bind(this)}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chargeInfo: state.home.get('chargeInfo'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        commitChargeOrder(pay_type,account_id, nameElem, moneyElem) {
            let player_name = nameElem.current.value;
            var pay_money = moneyElem.current.value;
            if (!player_name || !pay_money) {
                Toast.info('请填写完整');
                return
            }
            pay_money = parseFloat(pay_money);
            if (pay_money <= 0 || isNaN(pay_money)) {
                Toast.info('请填输入正确金额');
                return
            }
            dispatch(CommitChargeOrder(pay_type,account_id, player_name, pay_money));
        },
        getChargeOrderList(){
            dispatch(GetChargeOrderList(1));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChargeComponent);