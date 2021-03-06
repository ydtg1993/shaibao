import React from 'react';
import {
    TableWrapper,
    Up,
    Down,
    Left,
    Plate,
    SPlate,
    Tip,
    Text,
    SText,
    Middle,
    Title,
    Period,
    PanDick,
    Right,
    Bets,
    Placeholder,
    Dice1,
    Dice2,
    Dice3
} from './style';
import anime from 'animejs';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import Toast from "../../component/toast";
import {PlayerGoldChange} from "../../auth/store/actions";
import TimeLineComponent from "./timeLine";
import {
    img_game_s4,
    img_game_s5,
    img_game_s6,
    img_game_s7,
    img_game_s8,
    img_game_s9,
    img_game_s10,
    img_game_s11,
    img_game_s12,
    img_game_s13,
    img_game_s14,
    img_game_s15,
    img_game_s16,
    img_game_s17,
    img_game_s_big,
    img_game_s_little,
    img_game_s_single,
    img_game_s_double,
    img_game_dice1,
    img_game_dice2,
    img_game_dice3,
    img_game_dice4,
    img_game_dice5,
    img_game_dice6,
} from '../../../resource';

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        for (let i = 1; i <= 18; i++) {
            this['plate' + i] = React.createRef();
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextProps.priorPosition && nextProps.stage === actions.SETTLE_STAGE) {
            this.plateAnime = anime.timeline({
                easing: 'easeInOutQuad',
                direction: 'alternate',
                loop:true
            });
            const that = this;
            nextProps.priorPosition.map(function (data) {
                that.plateAnime.add({targets: that['plate' + data].current, background: 'rgba(41, 152, 80, 0.56)'}, 0);
                return true;
            })
        }else if(nextProps.stage === actions.WIN_STAGE){
            let moneyBoxDom = document.getElementById('MoneyBox');
            let moneyBoxDomPosition = this.getOffset(moneyBoxDom);
            let win_gold = nextProps.win_event_data.win_gold;
            let positions = nextProps.win_event_data.positions;

            const that = this;
            positions.map(function (position) {
                var doms = document.querySelectorAll(`#betsBox${position} div`);
                for (let i = 0; i < doms.length; i++) {
                    var dom = doms[i];
                    var domPosition = that.getOffset(dom);
                    anime({
                        targets: dom,
                        translateX:[0,moneyBoxDomPosition.left - domPosition.left],
                        translateY: [0, moneyBoxDomPosition.top - domPosition.top],
                        duration: 500,
                        easing: "easeInOutCirc"
                    })
                }
                return true;
            });
            var interval = setInterval(function () {
                clearInterval(interval);
                that.props.playerGoldChange(that.props.myGold + win_gold);
            },1000);
        } else if (nextProps.stage === actions.OVER_STAGE || nextProps.stage === actions.START_STAGE) {
            /*clear bets*/
            for(let i=1;i<=18;i++){
                let box = document.getElementById('betsBox' + i);
                box.innerHTML = '';
            }
        }
        /*clear plate anime*/
        if(this.plateAnime && nextProps.stage !== actions.SETTLE_STAGE && nextProps.stage !== actions.WIN_STAGE){
            this.plateAnime.restart();
            this.plateAnime.pause();
        }
    }

    getOffset(element) {
        var actualLeft = element.offsetLeft;
        var actualTop  = element.offsetTop;
        var curParent  = element.offsetParent;

        while(curParent !== null) {
            actualLeft += curParent.offsetLeft;
            actualTop  += curParent.offsetTop;
            curParent   = curParent.offsetParent;
        }

        return {
            top : actualTop,
            left: actualLeft
        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (JSON.stringify(this.props.hallInfo) !== JSON.stringify(nextProps.hallInfo)) {
            return true;
        } else if (JSON.stringify(nextProps.priorResult) !== JSON.stringify(this.props.priorResult)) {
            return true;
        } else if(nextProps.sequence !== this.props.sequence){
            return true;
        } else if(this.props.stage !== nextProps.stage){
            return true;
        }
        return false;
    }

    Bet(id, e) {
        const that = this;
        const {hallInfo} = this.props;
        const bet_option = hallInfo.bet_option;
        const chip_option = hallInfo.chip_option;
        if (!hallInfo || !bet_option || !chip_option) {
            Toast.error('系统异常');
            return;
        }
        if (!this.props.websocket) {
            Toast.error('未连接到服务');
            return;
        }
        if (!this.props.chip) {
            Toast.error('未选择筹码');
            return;
        }

        let gold = chip_option[this.props.chip]['value'];
        if (this.props.myGold < gold) {
            Toast.info('金额不足');
            return;
        }

        let dice_type = bet_option[id]['dice_type'];
        try {
            let data = {
                "event": "ReqBet",
                "data": {
                    "bet_amount": gold,
                    "dice_type": dice_type
                }
            };
            that.props.websocket.send(Buffer.from(JSON.stringify(data)));
        } catch (e) {
            Toast.error('系统异常');
            return;
        }
        this.props.playerGoldChange(this.props.myGold-gold);
        let x = e.pageX - 8;
        let y = e.pageY - 8;
        let position = 'top:' + y + 'px;left:' + x + 'px;';
        let betDom = document.getElementsByClassName('chip'+this.props.chip)[0].cloneNode(true);
        betDom.setAttribute('style', 'position:absolute;' + position);

        let box = document.getElementById('betsBox' + id);
        box.appendChild(betDom);
        let basicTimeline = anime.timeline();
        basicTimeline
            .add({
                targets: betDom,
                translateY: [300, 0],
                duration: 500,
                easing: "easeOutSine",
                offset: "0"
            });
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
                break;
        }
    }

    selectDownPosition(position) {
        switch (parseInt(position)) {
            case 5:
                return `${img_game_s4}`;
            case 6:
                return `${img_game_s5}`;
            case 7:
                return `${img_game_s6}`;
            case 8:
                return `${img_game_s7}`;
            case 9:
                return `${img_game_s8}`;
            case 10:
                return `${img_game_s9}`;
            case 11:
                return `${img_game_s10}`;
            case 12:
                return `${img_game_s11}`;
            case 13:
                return `${img_game_s12}`;
            case 14:
                return `${img_game_s13}`;
            case 15:
                return `${img_game_s14}`;
            case 16:
                return `${img_game_s15}`;
            case 17:
                return `${img_game_s16}`;
            case 18:
                return `${img_game_s17}`;
            default:
                break;
        }
    }

    render() {
        const that = this;
        const {hallInfo} = this.props;
        const bet_option = hallInfo.bet_option;
        const selectDice = this.selectDice;
        const selectDownPosition = this.selectDownPosition;
        return (
            <React.Fragment>
                <TableWrapper>
                    <Up>
                        <Left>
                            <Plate ref={this.plate1}>
                                <Placeholder onClick={this.Bet.bind(this, 1)}/>
                                <Text src={img_game_s_big}/><Tip>1:{bet_option ? bet_option['1']['odds'] : '???'}</Tip>
                            </Plate>
                            <Plate ref={this.plate2}>
                                <Placeholder onClick={this.Bet.bind(this, 2)}/>
                                <Text src={img_game_s_little}/><Tip>1:{bet_option ? bet_option['2']['odds'] : '???'}</Tip>
                            </Plate>
                        </Left>
                        <Middle>
                            <Period>
                                <Title>{that.props.sequence}期截止时间</Title>
                                <TimeLineComponent/>
                            </Period>
                                <PanDick/>
                                {
                                    this.props.priorResult.map(function (data, index) {
                                        if (index === 0) {
                                            return <Dice1 src={selectDice(data)} key={index}/>
                                        } else if (index === 1) {
                                            return <Dice2 src={selectDice(data)} key={index}/>
                                        } else {
                                            return <Dice3 src={selectDice(data)} key={index}/>
                                        }
                                    })
                                }
                        </Middle>
                        <Right>
                            <Plate ref={this.plate3}>
                                <Placeholder onClick={this.Bet.bind(this, 3)}/>
                                <Text src={img_game_s_single}/><Tip>1:{bet_option ? bet_option['3']['odds'] : '???'}</Tip>
                            </Plate>
                            <Plate ref={this.plate4}>
                                <Placeholder onClick={this.Bet.bind(this, 4)}/>
                                <Text src={img_game_s_double}/><Tip>1:{bet_option ? bet_option['4']['odds'] : '???'}</Tip>
                            </Plate>
                        </Right>
                    </Up>
                    <Down>
                        {
                            [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(function (data) {
                                return (
                                    <SPlate key={data} ref={that['plate' + data]}>
                                        <Placeholder onClick={that.Bet.bind(that, data)}/>
                                        <SText
                                            src={selectDownPosition(data)}/><Tip>1:{bet_option ? bet_option[data]['odds'] : '???'}</Tip>
                                    </SPlate>
                                )
                            })
                        }
                    </Down>
                </TableWrapper>
                <Bets id='Bets'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(function (data) {
                            return (<div id={'betsBox' + data} key={data}></div>)
                        })
                    }
                </Bets>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myGold: state.auth.get('gold'),
        chip: state.game.get('chip'),
        priorResult: state.game.get('priorResult'),
        priorPosition: state.game.get('priorPosition'),
        hallInfo: state.game.get('hallInfo'),
        sequence:state.game.get('sequence'),
        websocket:state.game.get('websocket'),
        win_event_data:state.game.get('win_event_data')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        playerGoldChange(gold){
            dispatch(PlayerGoldChange(gold));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);