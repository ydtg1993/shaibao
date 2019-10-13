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

class PigComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ruleVisible: false,
            beginVisible:false
        };
        this.boardList = [
            {name: 'xxx', money: '12'},
            {name: 'xxx', money: '12'},
            {name: 'xxx', money: '12'},
            {name: 'xxx', money: '12'},
            {name: 'xxx', money: '12'}];
        this.boardListRef = React.createRef();
    }

    componentDidMount() {
        this.publish();
    }

    publish() {
        if (!this.boardList) {
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
        this.setState({
            beginVisible: true
        });
    }

    CloseBegin(){
        this.setState({
            beginVisible: false
        });
    }

    render() {
        const {visible} = this.props;
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
                                    <div>5</div>
                                    <div>5</div>
                                    <div>5</div>
                                    <div>5</div>
                                    <div>5</div>
                                </PigRestMoney>
                                <BrokeButton onClick={this.OpenBegin.bind(this)}/>
                            </Pig>
                        </PigSection>
                        <DescriptionSection>
                            <DescriptionTitle onClick={this.OpenRule.bind(this)}/>
                            <Description>500积分/次</Description>
                            <Description>剩余积分: 0</Description>
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
                                        <BoardText>恭喜<span>【xxx】</span>用户砸金猪获得了<span>15元</span>红包</BoardText>
                                        {this.boardList.map(function (data,key) {
                                            return (<BoardText key={key}>恭喜<span>【{data.name}】</span>用户砸金猪获得了<span>{data.money}元</span>红包</BoardText>)
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

export default PigComponent;