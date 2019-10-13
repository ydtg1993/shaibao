import React from 'react';
import {connect} from 'react-redux';
import {BindCardDialog,Title,DialogContent,Section,Input,SubmitButton,SelectTag,SelectOptions,Option} from './style';
import {DialogTop,BottomDecoration, Close} from "../style";
import {BindBankCard} from "../../store/actions";
import Toast from "../../../component/toast";

class BindCardComponent extends React.Component {
    constructor(props){
        super(props);
        this.options = React.createRef();
        this.bankElem = React.createRef();
    }

    openBankOptions(){
        let options = this.options.current;
        options.className = options.className.replace(/hidden/,'show');
    }

    closeBankOptions(title,id){
        this.bankElem.current.value = title;
        this.bank_id = id;
        let options = this.options.current;
        options.className = options.className.replace(/show/,'hidden');
    }

    render() {
        const {visible,cardInfo,bankList} = this.props;
        const that = this;
        return (
            <BindCardDialog className={visible ? 'show fadeInLeft faster animated' : 'hidden'}>
                <DialogTop>
                    <Title/>
                    <Close onClick={this.props.CloseBindCardDialog}/>
                </DialogTop>
                <DialogContent>
                    <Section>
                        <Input>
                            <label>姓名</label>
                            <input name="real_name" placeholder={'持卡人姓名'} defaultValue={cardInfo.name ? cardInfo.name : ''} ref={(input)=>{this.real_name = input}}/>
                        </Input>
                    </Section>
                    <Section>
                        <Input>
                            <label>银行卡账号</label>
                            <input name="card_account" placeholder={'请输入银行卡号'} defaultValue={cardInfo.number ? cardInfo.number : ''} ref={(input)=>{this.card_account = input}}/>
                        </Input>
                    </Section>
                    <Section>
                        <Input>
                            <label>开户行</label>
                            <input name="card_bank" placeholder={'开户行'} defaultValue={cardInfo.bank_id && bankList[cardInfo.bank_id] ? bankList[cardInfo.bank_id] : ''} ref={this.bankElem} readOnly/>
                            <SelectTag onClick={this.openBankOptions.bind(this)}/>
                        </Input>
                        <SelectOptions ref={this.options} className='hidden'>
                            {
                                bankList && Object.keys(bankList).map(function (id){
                                    return <Option key={id} onClick={that.closeBankOptions.bind(that,bankList[id],id)}>{bankList[id]}</Option>;
                                })
                            }
                        </SelectOptions>
                    </Section>
                    <Section>
                        <Input>
                            <label>开户行支行</label>
                            <input name="bank_detail" placeholder={'建议填写 (可快速到账)'} defaultValue={cardInfo.bank_branch ? cardInfo.bank_branch : ''} ref={(input)=>{this.bank_branch= input}}/>
                        </Input>
                    </Section>
                </DialogContent>
                <SubmitButton onClick={()=>this.props.bindBankCard(this.real_name,this.card_account,this.bank_id,this.bank_branch)}>绑 定</SubmitButton>
                <BottomDecoration/>
            </BindCardDialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cardInfo:state.auth.get('cardInfo'),
        bankList:state.home.get('bankList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        bindBankCard(nameElem,numberElem,bank_id,bank_branchElem){
            let name = nameElem.value;
            let number = numberElem.value;
            let bank_branch = bank_branchElem.value;
            if(!name || !number || !bank_id || !bank_branch){
                Toast.error('请填写完成',1500);
                return;
            }

            if(!/^([1-9]{1})(\d{15}|\d{18})$/.test(number)){
                Toast.error('卡号不正确',1500);
                return;
            }

            dispatch(BindBankCard(name,number,bank_id,bank_branch));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BindCardComponent);