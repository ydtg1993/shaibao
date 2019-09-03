import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {GlobalStyle,Bg, Close, RankDialog,MongolianWrapper,BottomDecoration,RankList,Rank,MyRank,RankTitle,RankMoneyTag,RankTabg1,RankTabg2,RankTabg3,RankTagN} from './../style';
import bg from '../../../../resource/zhujiemian/rank/rank_bg.png';
import close from '../../../../resource/dengluye/guanbi.png';
import * as Actions from "../../../home/store/actions";

class RankComponent extends React.Component {
    componentWillMount() {
        this.props.getRankList();
    }

    selectTag(rank) {
        switch (rank) {
            case 1:
                return <RankTabg1/>;
            case 2:
                return <RankTabg2/>;
            case 3:
                return <RankTabg3/>;
            case -1:
                return <span className='rankTag'>未上榜</span>;
            default:
                return <RankTagN>{rank}</RankTagN>;
        }
    }

    render() {
        const {visible} = this.props;
        const selectTag = this.selectTag;
        return visible && (
            <React.Fragment>
                <GlobalStyle/>
                <RankDialog className={visible ? 'show fadeInUp faster animated' : ''}>
                    <div>
                        <Bg src={bg}/>
                        <Close src={close} onClick={this.props.CloseRank}/>
                    </div>
                    <div>
                        <RankTitle>
                            <div>排行</div>
                            <div>昵称</div>
                            <div>今日盈利</div>
                        </RankTitle>
                    </div>
                    <RankList>
                        {this.props.rankList.ls.map(function (data,index) {
                            return (
                                <Rank key={data.ranking}>
                                    <div>{selectTag(data.ranking)}</div>
                                    <div><span>{data.name}</span></div>
                                    <div><RankMoneyTag/><span className='moneyTitle'>{data.profit}</span></div>
                                </Rank>
                            )
                        })}
                    </RankList>
                    <div>
                        <MyRank>
                            <div>{selectTag(this.props.rankList.own.ranking)}</div>
                            <div><span>{this.props.rankList.own.name}</span></div>
                            <div><RankMoneyTag/><span className='moneyTitle'>{this.props.rankList.own.profit}</span></div>
                        </MyRank>
                    </div>
                    <BottomDecoration/>
                </RankDialog>
                <MongolianWrapper className={visible ? 'show' : 'hidden'}></MongolianWrapper>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rankList:state.home.get('rankList'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRankList() {
            dispatch(Actions.getRankList())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RankComponent)