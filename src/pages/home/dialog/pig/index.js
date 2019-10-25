import React from 'react';
import {connect} from 'react-redux';
import {
    Dialog,
    Title,
    Close,
    MiddleSection,
    PigSection,
    Pig,
    PigTitle,
    PigRestMoney,
    DescriptionSection,
    DescriptionTitle,
    Description,
    BoardSection,
    Board,
    BoardContent,
    BorderListRef,
    BoardTitle,
    BoardText,
    BrokeButton
} from "./style";
import PigRuleComponent from "./rule";
import PigBeginComponent from "./begin";
import Toast from "../../../component/toast";
import * as Actions from "../../store/actions";

class PigComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ruleVisible: false,
            beginVisible:false
        };
        this.boardListRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        clearInterval(this.interval);
        this.publish();
    }

    publish() {
        if (!this.props.pigInfo.record) {
            return;
        }
        let boardListH = this.boardListRef.current.clientHeight;
        const that = this;
        let margin = 105;
        that.boardListRef.current.style = `top:${margin}px`;
        this.interval = setInterval(function () {
            margin = margin - 0.2;
            that.boardListRef.current.style = `top:${margin}px`;
            if (margin <= -boardListH) {
                clearInterval(that.interval);
                that.publish();
            }
        }, 18);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    OpenRule() {
        this.setState({
            ruleVisible: true
        });
    }

    CloseRule() {
        this.setState({
            ruleVisible: false
        });
    }

    OpenBegin(){
        if(isNaN(this.props.pigInfo.player_integral) || this.props.pigInfo.player_integral < 500){
            Toast.info('您的积分不足');
            return
        }
        this.setState({
            beginVisible: true
        });
    }

    CloseBegin(){
        this.props.getPigInfo();
        this.setState({
            beginVisible: false
        });
    }

    render() {
        const {visible,pigInfo} = this.props;
        return (
            <React.Fragment>
                <Dialog className={visible ? 'show fadeInUp faster animated' : 'hidden'}>
                    <div>
                        <Title/>
                        <Close onClick={this.props.ClosePig}/>
                    </div>
                    <MiddleSection>
                        <PigSection>
                            <Pig>
                                <PigTitle>剩余钱罐</PigTitle>
                                <PigRestMoney>
                                    {pigInfo.total ? pigInfo.total.split('').map(function (data,key) {
                                          return (<div key={key}>{data}</div>)
                                        }) : [0,0,0,0,0].map(function (data,key) {
                                        return (<div key={key}>{data}</div>)
                                    })}
                                </PigRestMoney>
                                <BrokeButton onClick={this.OpenBegin.bind(this)}/>
                            </Pig>
                        </PigSection>
                        <DescriptionSection>
                            <DescriptionTitle onClick={this.OpenRule.bind(this)}/>
                            <Description>500积分/次</Description>
                            <Description>剩余积分: {pigInfo.player_integral}</Description>
                        </DescriptionSection>
                    </MiddleSection>
                    <BoardSection>
                        <Board>
                            <div>
                                <BoardTitle>获奖用户</BoardTitle>
                            </div>
                            <div>
                                <BoardContent>
                                    <BorderListRef ref={this.boardListRef}>
                                        {pigInfo.record && pigInfo.record.map(function (data,key) {
                                            return (<BoardText key={key}>恭喜<span>【{data.player}】</span>用户砸金猪获得了<span>{data.gold}元</span>红包</BoardText>)
                                        })}
                                    </BorderListRef>
                                </BoardContent>
                            </div>
                        </Board>
                    </BoardSection>
                </Dialog>
                <PigRuleComponent visible={this.state.ruleVisible} CloseRule={this.CloseRule.bind(this)}/>
                <PigBeginComponent visible={this.state.beginVisible} CloseBegin={this.CloseBegin.bind(this)}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pigInfo: state.home.get('pigInfo')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPigInfo(){
            dispatch(Actions.GetPigInfo());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PigComponent);