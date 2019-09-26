import React from 'react';
import {
    TimeLine,
} from './style';
import {connect} from "react-redux";
import * as actions from "../store/actions";

class TimeLineComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time:'00:00:00'
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.counter = nextProps.lottery_time_countdown - 1;
        if(this.counter < 1){
            this.setState({
                time:'00:00:00'
            });
            return;
        }
        const that = this;
        this.timer = setInterval(() => {
            if(that.counter < 1){
                that.props.setLotteryTimeCountdown(0);
                clearInterval(that.timer);
                return;
            }
            let h = that.addZero(Math.floor(that.counter / (60 * 60) % 24));
            let m = that.addZero(Math.floor(that.counter / 60 % 60));
            let s = that.addZero(Math.ceil(that.counter % 60));
            that.setState({
                time:h + ":" + m + ":" + s
            });
            that.counter--;
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.props.setLotteryTimeCountdown(0);
    }

    addZero(i){
        if(i<10){
            i = "0" + i;
        }return i;
    }

    render() {
        return (
            <TimeLine>{this.state.time}</TimeLine>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lottery_time_countdown: state.game.get('lottery_time_countdown')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLotteryTimeCountdown(counter){
            dispatch(actions.SetLotteryTimeCountdown(counter));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineComponent);