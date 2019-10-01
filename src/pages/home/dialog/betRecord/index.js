import React from 'react';
import "animate.css";
import {
    BetRecordDialog,
    Title,
    RecordList,
    RecordNav,
    Tab,
    Record,
    Hall_tag_1,
    Hall_tag_2,
    Hall_tag_3,
    Text,
    MTitle,
    Small1,
    Small2,
    Small3,
    Small4,
    Small5,
    Small6,
    Result,
    SmallResult,
    BetResult
} from './style';
import { DialogTop,BottomDecoration, Close} from "../style";
import {connect} from "react-redux";
import * as Actions from "../../../home/store/actions";

class BetRecordComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            isLoadingMore: false,
            record_all: true
        };
        this.betList = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const that =this;
        this.betList.current && this.betList.current.addEventListener('scroll', function () {
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
                });
                let type = that.state.record_all ? [] : [1];
                that.props.getBetRecords(page, type);
            }
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.betRecordList.length !== nextProps.betRecordList.length) {
            this.setState({
                isLoadingMore: false
            });
            return true;
        } else if (this.props.visible !== nextProps.visible) {
            return true;
        }
        return false;
    }

    CloseBetRecord(){
        this.setState({
            record_all: true,
            page:1,
            isLoadingMore: false
        });
        this.props.CloseBetRecord();
    }

    watchAll() {
        this.props.getBetRecords(1,[]);
        this.setState({
            record_all: true
        });
    }

    watchReward() {
        this.props.getBetRecords(1,[1]);
        this.setState({
            record_all: false
        });
    }

    switchHallTag(hall) {
        switch (hall) {
            case 'Fast':
                return <Hall_tag_1/>;
            case 'OneMinute':
                return <Hall_tag_2/>;
            case 'FivesMinute':
                return <Hall_tag_3/>;
            default:
                return <Hall_tag_1/>;
        }
    }

    switchSmall(small,key){
        switch (small) {
            case 1:
                return <Small1 key={key}/>;
            case 2:
                return <Small2 key={key}/>;
            case 3:
                return <Small3 key={key}/>;
            case 4:
                return <Small4 key={key}/>;
            case 5:
                return <Small5 key={key}/>;
            case 6:
                return <Small6 key={key}/>;
        }
    }

    switchResult(state,result,bonus){
        const that =this;
        switch (state) {
            case 0:
                return <Result className='ready'>未开奖</Result>;
            case 1:
                return (
                    <React.Fragment>
                        <SmallResult>{result.map(function (data,key) {
                            return that.switchSmall(data,key)
                        })}</SmallResult>
                        <Result className='win'>中 ({bonus}元)</Result>
                    </React.Fragment>
                );
                return;
            case -1:
                return <Result>未中奖</Result>;
                return;
        }
    }

    switchBetResult(type,amount){
        switch (type) {
            case 'BIG':
                return `大 (${amount})元`;
            case 'SMALL':
                return `小 (${amount})元`;
            case 'SINGULAR':
                return `单 (${amount})元`;
            case 'EVEN':
                return `双 (${amount})元`;
            case 'SUM_FOUR':
                return `4 (${amount})元`;
            case 'SUM_FIVE':
                return `5 (${amount})元`;
            case 'SUM_SIX':
                return `6 (${amount})元`;
            case 'SUM_SEVEN':
                return `7 (${amount})元`;
            case 'SUM_EIGHT':
                return `8 (${amount})元`;
            case 'SUM_NINE':
                return `9 (${amount})元`;
            case 'SUM_TEN':
                return `10 (${amount})元`;
            case 'SUM_ELEVEN':
                return `11 (${amount})元`;
            case 'SUM_TWELVE':
                return `12 (${amount})元`;
            case 'SUM_THIRTEEN':
                return `13 (${amount})元`;
            case 'SUM_FOURTEEN':
                return `14 (${amount})元`;
            case 'SUM_FIFTEEN':
                return `15 (${amount})元`;
            case 'SUM_SIXTEEN':
                return `16 (${amount})元`;
            case 'SUM_SEVENTEEN':
                return `17 (${amount})元`;
        }
    }

    render() {
        const {visible, betRecordList} = this.props;
        const that = this;
        return visible && (
                <BetRecordDialog className={visible ? 'show fadeInUp faster animated' : ''}>
                    <DialogTop>
                        <MTitle/>
                        <Close onClick={this.CloseBetRecord.bind(this)}/>
                    </DialogTop>
                    <RecordNav>
                        <div><Tab className={this.state.record_all ? 'focus' : ''}
                                  onClick={this.watchAll.bind(this)}>全部记录</Tab></div>
                        <div><Tab className={!this.state.record_all ? 'focus' : ''}
                                  onClick={this.watchReward.bind(this)}>中奖记录</Tab></div>
                    </RecordNav>
                    <RecordList ref={this.betList}>
                        {betRecordList && betRecordList.map(function (data, key) {
                            return (
                                <Record key={data.sequence+data.bet_type}>
                                    <div>
                                        {that.switchHallTag(data.hall_tag)}
                                        <Text>{data.sequence}期</Text>
                                        <Text className='second'>{data.create_at}</Text>
                                    </div>
                                    <div>
                                        <Title>开奖结果</Title>
                                        {that.switchResult(data.state,data.result,data.bonus)}
                                    </div>
                                    <div>
                                        <Title>我的投注</Title>
                                        <BetResult>{that.switchBetResult(data.bet_type,data.bet_amount)}</BetResult>
                                    </div>
                                </Record>
                            )
                        })}
                    </RecordList>
                    <BottomDecoration/>
                </BetRecordDialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        betRecordList: state.home.get('betRecordList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBetRecords(page, type) {
            dispatch(Actions.GetBetRecord(page, type))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BetRecordComponent);