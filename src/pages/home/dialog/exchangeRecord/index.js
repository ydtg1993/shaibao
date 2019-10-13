import React from 'react';
import {connect} from 'react-redux';
import {ExchangeRecordDialog, Title, DialogContent2, RecordTitle, RecordList, Record} from './style';
import {Close, BottomDecoration,DialogTop} from "../style";
import {GetExchangeMoneyList} from "../../store/actions";

class ExchangeRecordComponent extends React.Component {
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
                        that.props.getExchangeMoneyList(page, resolve);
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
        if (this.props.exchangeRecordList.length !== nextProps.exchangeRecordList.length) {
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

    CloseExchangeRecord(){
        this.setState({
            page: 1,
            isLoadingMore: false
        });
        this.props.CloseExchangeRecord();
    }

    render() {
        const {visible,exchangeRecordList} = this.props;
        const that = this;
        return (
            <ExchangeRecordDialog className={visible ? 'show fadeInLeft faster animated' : 'hidden'}>
                <DialogTop>
                    <Title/>
                    <Close onClick={this.CloseExchangeRecord.bind(this)}/>
                </DialogTop>
                <DialogContent2>
                    <RecordTitle>
                        <div>订单号</div>
                        <div>金额</div>
                        <div>创建时间</div>
                        <div>状态</div>
                    </RecordTitle>
                    <RecordList ref={this.recordList}>
                        {exchangeRecordList && exchangeRecordList.map(function (data) {
                            return (
                                <Record key={data.sequence}>
                                    <div>{data.sequence}</div>
                                    <div>{data.amount}</div>
                                    <div>{data.create_at}</div>
                                    <div>{that.selectStatus(data.status)}</div>
                                </Record>
                            )
                        })}
                    </RecordList>
                </DialogContent2>
                <BottomDecoration/>
            </ExchangeRecordDialog>);
    }
}

const mapStateToProps = (state) => {
    return {
        exchangeRecordList:state.home.get('exchangeRecordList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getExchangeMoneyList(page,callback){
            dispatch(GetExchangeMoneyList(page,callback));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRecordComponent);