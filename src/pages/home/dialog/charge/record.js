import React from 'react';
import {ChargeRecordDialog, ChargeRecordTitle,DialogContent2} from './style';
import {Close, DialogTop} from "../style";
import {RecordTitle,Record, RecordList} from "../exchangeRecord/style";
import {connect} from "react-redux";
import {GetChargeOrderList} from "../../store/actions";

class ChargeRecordComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            isLoadingMore: false
        };
        this.recordList = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const that =this;
        this.recordList.current && this.recordList.current.addEventListener('scroll', function () {
            var afterScrollTop = this.scrollTop;
            if(afterScrollTop < this.beforeScrollTop){
                this.beforeScrollTop = this.scrollTop;
                return;
            }
            this.beforeScrollTop = this.scrollTop;

            if(this.scrollHeight - 20 <= this.clientHeight + this.scrollTop) {
                if(that.state.isLoadingMore){
                    return;
                }
                let page = that.state.page + 1;
                that.setState({
                    isLoadingMore: true,
                    page:page
                },()=>{
                    new Promise(function(resolve) {
                        that.props.getChargeOrderList(page, resolve);
                    }).then(()=>{
                        that.setState(() =>({
                            isLoadingMore: false
                        }));
                    });
                });
            }
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.chargeOrderList.length !== nextProps.chargeOrderList.length) {
            return true;
        } else if (this.props.visible !== nextProps.visible) {
            return true;
        }
        return false;
    }

    selectStatus(status){
        switch(status){
            case -1:
                return '失败';
            case 0:
                return '审核中';
            case 1:
                return '成功';
            default:
                return ;
        }
    }

    CloseChargeRecord(){
        this.setState({
            page: 1,
            isLoadingMore: false
        });
        this.props.CloseChargeRecord();
    }

    render() {
        const {visible,chargeOrderList} = this.props;
        const that =this;
        return (
            <ChargeRecordDialog className={visible ? 'show fadeInLeft faster animated' : 'hidden'}>
                <DialogTop>
                    <ChargeRecordTitle/>
                    <Close onClick={this.CloseChargeRecord.bind(this)}/>
                </DialogTop>
                <DialogContent2>
                    <RecordTitle>
                        <div>充值方式</div>
                        <div>金额</div>
                        <div>创建时间</div>
                        <div>状态</div>
                    </RecordTitle>
                    <RecordList ref={this.recordList}>
                        {chargeOrderList && chargeOrderList.map(function (data) {
                            return (
                                <Record key={data.id}>
                                    <div>{data.type}</div>
                                    <div>{data.pay_money}</div>
                                    <div>{data.create_at}</div>
                                    <div>{that.selectStatus(data.status)}</div>
                                </Record>
                            )
                        })}
                    </RecordList>
                </DialogContent2>
            </ChargeRecordDialog>);
    }
}

const mapStateToProps = (state) => {
    return {
        chargeOrderList: state.home.get('chargeOrderList'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getChargeOrderList(page,callback){
            dispatch(GetChargeOrderList(page,callback));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChargeRecordComponent);