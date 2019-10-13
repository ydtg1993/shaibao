import React from 'react';
import {connect} from 'react-redux';
import {
    ExchangeDialog,
    Title,
    ExchangeContent,
    Menu,
    ExchangeContentSection,
    Unit,
    UnitText,
    InputTitle,
    MyMoneyInput,
    MoneySection,
    ExchangeMoneyInput,
    CardInput,
    MoneyDigital2,
    MoneyInput2,
    Description,
    ExchangeRecordButton,
    BindButton,
    ExchangeContentInfo,
    SubmitButton
} from './style';
import {DialogTop, BottomDecoration, Close,SmallInputBg} from "../style";
import {MoneyGold} from "../../style";
import BindCardComponent from "../bindCard";
import {GegBankList,ExchangeMoney,GetExchangeMoneyList} from "../../store/actions";
import ExchangeRecordComponent from "../exchangeRecord";
import {CloseMongolia, OpenMongolia} from "../../../../index";

class ExchangeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exchangeRecordVisible:false,
            bindCardVisible: false,
            visible: props.visible
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible
            })
        }
    }

    OpenExchangeRecord(){
        this.props.CloseExchange();
        OpenMongolia();
        this.props.getExchangeMoneyList();
        this.setState({
            exchangeRecordVisible: true
        });
    }

    CloseExchangeRecord(){
        this.setState({
            exchangeRecordVisible: false
        });
        CloseMongolia();
    }

    OpenBindCardDialog() {
        this.props.CloseExchange();
        if (!this.props.bankList) {
            this.props.getBankList();
        }
        this.setState({
            bindCardVisible: true,
        });
        OpenMongolia();
    }

    CloseBindCardDialog() {
        this.setState({
            bindCardVisible: false
        });
        CloseMongolia();
    }

    render() {
        const {cardInfo} = this.props;
        const {visible} = this.state;
        return (<React.Fragment>
            <ExchangeDialog className={visible ? 'show fadeInUp faster animated' : 'hidden'}>
                <DialogTop>
                    <Title/>
                    <Close onClick={this.props.CloseExchange}/>
                </DialogTop>
                <ExchangeContent>
                    <Menu>
                        <Unit className='focus'><UnitText>兑换到银行卡</UnitText></Unit>
                    </Menu>
                    <ExchangeContentSection>
                        <ExchangeContentInfo>
                            <MyMoneyInput>
                                <span className='myMoney'>当前余额</span>
                                <MoneySection>
                                    <MoneyGold/>
                                    <MoneyDigital2>{parseInt(this.props.myGold)}</MoneyDigital2>
                                    <MoneyInput2/>
                                </MoneySection>
                            </MyMoneyInput>
                            <Description>
                                提现0手续费,3-5分钟到账，提现前请确认银行卡账户准确无误
                            </Description>
                            <ExchangeMoneyInput>
                                <div>
                                    <InputTitle>兑换金额</InputTitle>
                                    <ExchangeRecordButton onClick={this.OpenExchangeRecord.bind(this)}><span>兑换记录</span><SmallInputBg/></ExchangeRecordButton>
                                </div>
                                <input name="exchange_money" placeholder={'请输入兑换金额'} ref={(input)=>{this.moneyElem = input}}/>
                            </ExchangeMoneyInput>
                            <CardInput>
                                <div>
                                    <InputTitle>收款银行卡</InputTitle>
                                    <BindButton onClick={this.OpenBindCardDialog.bind(this)}><span>去绑定</span><SmallInputBg/></BindButton>
                                </div>
                                <input name="card_number" placeholder={'未绑定银行卡号'} value={cardInfo.name ? cardInfo.name : ''} readOnly/>
                            </CardInput>
                            <SubmitButton onClick={()=>this.props.exchangeMoney(this.moneyElem)}>兑换</SubmitButton>
                        </ExchangeContentInfo>
                    </ExchangeContentSection>
                </ExchangeContent>
                <BottomDecoration/>
            </ExchangeDialog>
            <ExchangeRecordComponent visible={this.state.exchangeRecordVisible} CloseExchangeRecord={this.CloseExchangeRecord.bind(this)}/>
            <BindCardComponent visible={this.state.bindCardVisible} CloseBindCardDialog={this.CloseBindCardDialog.bind(this)}/>
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        myGold: state.auth.get('gold'),
        cardInfo: state.auth.get('cardInfo'),
        bankList: state.home.get('bankList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBankList() {
            dispatch(GegBankList());
        },
        exchangeMoney(moneyElem){
            let money = parseFloat(moneyElem.value);
            dispatch(ExchangeMoney(money));
        },
        getExchangeMoneyList(){
            dispatch(GetExchangeMoneyList(1));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeComponent);