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
    SSText,
    Middle,
    Title,
    TimeLine,
    Period,
    Pan,
    PanDick,
    Right,
    Bets,
    Placeholder,
    Dice1,
    Dice2,
    Dice3
} from './style';
import anime from 'animejs';
import {connect} from 'react-redux';
import da from '../../../resource/youxijiemian/da.png';
import xiao from '../../../resource/youxijiemian/xiao.png';
import dan from '../../../resource/youxijiemian/dan.png';
import shuang from '../../../resource/youxijiemian/shuang.png';
import t4 from '../../../resource/youxijiemian/4.png';
import t5 from '../../../resource/youxijiemian/5.png';
import t6 from '../../../resource/youxijiemian/6.png';
import t7 from '../../../resource/youxijiemian/7.png';
import t8 from '../../../resource/youxijiemian/8.png';
import t9 from '../../../resource/youxijiemian/9.png';
import t10 from '../../../resource/youxijiemian/10.png';
import t11 from '../../../resource/youxijiemian/11.png';
import t12 from '../../../resource/youxijiemian/12.png';
import t13 from '../../../resource/youxijiemian/13.png';
import t14 from '../../../resource/youxijiemian/14.png';
import t15 from '../../../resource/youxijiemian/15.png';
import t16 from '../../../resource/youxijiemian/16.png';
import t17 from '../../../resource/youxijiemian/17.png';
import chip5 from '../../../resource/youxijiemian/bet5.png';
import chip30 from '../../../resource/youxijiemian/bet30.png';
import chip100 from '../../../resource/youxijiemian/bet100.png';
import chip500 from '../../../resource/youxijiemian/bet500.png';
import chip2k from '../../../resource/youxijiemian/bet2K.png';
import chip1w from '../../../resource/youxijiemian/bet1W.png';
import s1 from '../../../resource/youxijiemian/s1.png';
import s2 from '../../../resource/youxijiemian/s2.png';
import s3 from '../../../resource/youxijiemian/s3.png';
import s4 from '../../../resource/youxijiemian/s4.png';
import s5 from '../../../resource/youxijiemian/s5.png';
import s6 from '../../../resource/youxijiemian/s6.png';

class TableComponent extends React.Component {
    Bet(e) {
        if(!this.props.chip){
            return;
        }
        const x = e.pageX - 8;
        const y = e.pageY - 8;
        const position = 'top:'+y+'px;left:'+x+'px;';
        const betDom = document.createElement('img');
        betDom.setAttribute('src', this.selectChip());
        betDom.setAttribute('style','position:fixed;width:16px;'+position);
        document.getElementById('Bets').appendChild(betDom);

        const basicTimeline = anime.timeline();
        basicTimeline
            .add({
                targets: betDom ,
                translateY: [300, 0],
                duration: 500,
                easing: "easeOutSine",
                offset: "0"
            });
    }

    selectChip(){
        switch (this.props.chip) {
            case 1:
                return `${chip5}`;
            case 2:
                return `${chip30}`;
            case 3:
                return `${chip100}`;
            case 4:
                return `${chip500}`;
            case 5:
                return `${chip2k}`;
            case 6:
                return `${chip1w}`;
        }
    }

    selectDice(dice){
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
        }
    }

    selectDownPosition(position){
        switch (parseInt(position)) {
            case 5:
                return `${t4}`;
            case 6:
                return `${t5}`;
            case 7:
                return `${t6}`;
            case 8:
                return `${t7}`;
            case 9:
                return `${t8}`;
            case 10:
                return `${t9}`;
            case 11:
                return `${t10}`;
            case 12:
                return `${t11}`;
            case 13:
                return `${t12}`;
            case 14:
                return `${t13}`;
            case 15:
                return `${t14}`;
            case 16:
                return `${t15}`;
            case 17:
                return `${t16}`;
            case 18:
                return `${t17}`;
        }
    }

    render() {
        const {hallInfo} = this.props;
        const bet_option = hallInfo.bet_option;
        const selectDice = this.selectDice;
        const selectDownPosition = this.selectDownPosition;
        return (
            <React.Fragment>
                <TableWrapper>
                    <Up>
                        <Left>
                            <Plate>
                                <Placeholder onClick={this.Bet.bind(this)}/>
                                <Text src={da}/><Tip>1:{bet_option ? bet_option['1']['odds'] : ''}</Tip>
                            </Plate>
                            <Plate>
                                <Placeholder onClick={this.Bet.bind(this)}/>
                                <Text src={xiao}/><Tip>1:{bet_option ? bet_option['2']['odds'] : ''}</Tip>
                            </Plate>
                        </Left>
                        <Middle>
                            <Period>
                                <Title>0808期截止时间</Title>
                                <TimeLine>00:00:00</TimeLine>
                            </Period>
                            <Pan>
                                <PanDick/>
                                {
                                    this.props.priorResult.map(function (data,index) {
                                        if(index===0){
                                            return <Dice1 src={selectDice(data)} key={index}/>
                                        }else if(index === 1){
                                            return <Dice2 src={selectDice(data)} key={index}/>
                                        }else {
                                            return <Dice3 src={selectDice(data)} key={index}/>
                                        }
                                    })
                                }
                            </Pan>
                        </Middle>
                        <Right>
                            <Plate>
                                <Placeholder onClick={this.Bet.bind(this)}/>
                                <Text src={dan}/><Tip>1:{bet_option ? bet_option['3']['odds'] : ''}</Tip>
                            </Plate>
                            <Plate>
                                <Placeholder onClick={this.Bet.bind(this)}/>
                                <Text src={shuang}/><Tip>1:{bet_option ? bet_option['4']['odds'] : ''}</Tip>
                            </Plate>
                        </Right>
                    </Up>
                    <Down>
                        {
                            hallInfo && Object.keys(bet_option).map(key => {
                                if(key < 5){
                                    return;
                                }
                                return  (
                                    <SPlate key={key}>
                                        <Placeholder onClick={this.Bet.bind(this)}/>
                                        <SText src={selectDownPosition(key)}/><Tip>1:{bet_option[key]['odds']}</Tip>
                                    </SPlate>
                                )
                            })
                        }
                    </Down>
                </TableWrapper>
                <Bets id='Bets'></Bets>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chip: state.game.get('chip'),
        priorResult:state.game.get('priorResult'),
        hallInfo:state.game.get('hallInfo')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);