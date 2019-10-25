import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import {Chassis, Cover, ShaiBao, Dice1, Dice2, Dice3} from './style';
import anime from "animejs";
import {
    img_game_dice1,
    img_game_dice2,
    img_game_dice3,
    img_game_dice4,
    img_game_dice5,
    img_game_dice6
} from '../../../resource';

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
                return `${img_game_dice1}`;
            case 2:
                return `${img_game_dice2}`;
            case 3:
                return `${img_game_dice3}`;
            case 4:
                return `${img_game_dice4}`;
            case 5:
                return `${img_game_dice5}`;
            case 6:
                return `${img_game_dice6}`;
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
        } else if (nextProps.stage === actions.SETTLE_STAGE) {
            this.LotteryOverAnime();
        } else if (nextProps.stage === actions.OVER_STAGE) {
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
                                value: 28,
                                duration: 65,
                                easing: 'linear'
                            },
                            {
                                value: -28,
                                duration: 130,
                                easing: 'linear'
                            },
                            {
                                value: 0,
                                duration: 65,
                                easing: 'linear'
                            }
                        ],
                        direction: 'reverse',
                        easing: 'linear',
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
                if (that.cover.current) {
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

    LotteryOverAnime() {
        if (this.chassis.current) {
            let classname = this.chassis.current.className;
            classname = classname.replace(/fadeIn/, "fadeOutUp");
            this.chassis.current.className = classname;
        }
    }

    render() {
        const that = this;
        const {stage} = this.props;
        return stage === actions.LOTTERY_STAGE && (
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        priorResult: state.game.get('priorResult'),
        stage: state.game.get('stage')
    }
};

export default connect(mapStateToProps,null)(LotteryComponent)