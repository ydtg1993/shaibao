import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import { Chassis, Cover, ShaiBao, Dice1, Dice2, Dice3 } from './style';
import anime from "animejs";
import s1 from "../../../resource/youxijiemian/s1.png";
import s2 from "../../../resource/youxijiemian/s2.png";
import s3 from "../../../resource/youxijiemian/s3.png";
import s4 from "../../../resource/youxijiemian/s4.png";
import s5 from "../../../resource/youxijiemian/s5.png";
import s6 from "../../../resource/youxijiemian/s6.png";

class LotteryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.cover = React.createRef();
        this.chassis = React.createRef();
        this.shaibao = React.createRef();

        this.dice1 = React.createRef();
        this.dice2 = React.createRef();
        this.dice3 = React.createRef();
    }

    selectDice(dice) {
        switch (dice) {
            case 1:
                return `${s1}`;
            case 2:
                return `${s2}`;
            case 3:
                return `${s3}`;
            case 4:
                return `${s4}`;
            case 5:
                return `${s5}`;
            case 6:
                return `${s6}`;
            default:
                return '';
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.stage === actions.LOTTERY_STAGE) {
            this.lotteryAnimeProcess();
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.stage === actions.LOTTERY_STAGE) {
            return true
        } else if (nextProps.stage === actions.LOTTERY_RESULT_STAGE) {
            if (this.animation_lottery) {
                this.animation_lottery.restart();
                this.animation_lottery.pause();
                this.LotteryPublishAnime(nextProps.priorResult);
            }
        } else if(nextProps.stage === actions.SETTLE_STAGE){
            this.LotteryOverAnime();
        }else if (nextProps.stage === actions.OVER_STAGE) {
            return true;
        }
        return false;
    }

    lotteryAnimeProcess() {
        const basicTimeline = anime.timeline();
        const that = this;
        basicTimeline
            .add({
                targets: this.chassis.current,
                translateY: [30, 0],
                duration: 1500,
                easing: "easeOutSine",
                offset: "0"
            })
            .add({
                targets: this.cover.current,
                translateY: [-200, 0],
                duration: 1500,
                easing: "easeOutSine",
                offset: "0",
                complete: function () {
                    let animation_lottery = anime({
                        targets: that.shaibao.current,
                        rotate: [
                            {
                                value: 30,
                                duration: 65,
                                easing: 'easeInOutSine'
                            },
                            {
                                value: -30,
                                duration: 130,
                                easing: 'easeInOutSine'
                            },
                            {
                                value: 0,
                                duration: 65,
                                easing: 'easeInOutSine'
                            }
                        ],
                        direction: 'reverse',
                        easing: 'easeInOutSine',
                        loop: true
                    });
                    that.animation_lottery = animation_lottery;
                }
            });
    }

    LotteryPublishAnime(priorResult) {
        const that = this;
        this.dice1.current && this.dice1.current.setAttribute('src', that.selectDice(priorResult[0]));
        this.dice2.current && this.dice2.current.setAttribute('src', that.selectDice(priorResult[1]));
        this.dice3.current && this.dice3.current.setAttribute('src', that.selectDice(priorResult[2]));

        anime({
            targets: that.cover.current,
            translateY: [0, -200],
            duration: 1500,
            easing: "easeOutSine",
            offset: "0",
            complete: function () {
                if(that.cover.current) {
                    let classname = that.cover.current.className;
                    classname = classname.replace(/fadeIn/, "fadeOutUp");
                    that.cover.current.className = classname;
                    anime({
                        targets: that.chassis.current,
                        translateY: [0, -30],
                        duration: 1500,
                        easing: "easeOutSine",
                        offset: "0"
                    });
                }
            }
        });
    }

    LotteryOverAnime(){
        if(this.chassis.current) {
            let classname = this.chassis.current.className;
            classname = classname.replace(/fadeIn/, "fadeOutUp");
            this.chassis.current.className = classname;
        }
    }

    render() {
        const that = this;
        const {stage} = this.props;
        return stage === actions.LOTTERY_STAGE && (
            <React.Fragment>
                <ShaiBao ref={this.shaibao}>
                    <Cover className={stage === actions.LOTTERY_STAGE ? 'show fadeIn animated' : ''} ref={this.cover}/>
                    <Chassis className={stage === actions.LOTTERY_STAGE ? 'show fadeIn animated' : ''} ref={this.chassis}>
                        {
                            that.props.priorResult.map(function (data, index) {
                                if (index === 0) {
                                    return <Dice1 src={that.selectDice(data)} ref={that.dice1} key={index}/>
                                } else if (index === 1) {
                                    return <Dice2 src={that.selectDice(data)} ref={that.dice2} key={index}/>
                                } else {
                                    return <Dice3 src={that.selectDice(data)} ref={that.dice3} key={index}/>
                                }
                            })
                        }
                    </Chassis>
                </ShaiBao>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        priorResult: state.game.get('priorResult'),
        stage: state.game.get('stage')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LotteryComponent)