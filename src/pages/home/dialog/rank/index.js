import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {
    GlobalStyle,
    RankDialog,
    Title,
    DialogContent2,
    RankList,
    Rank,
    MyRank,
    RankTitle,
    RankMoneyTag,
    RankTabg1,
    RankTabg2,
    RankTabg3,
    RankTagN
} from './style';
import { DialogTop,MongolianWrapper, BottomDecoration, Close} from "../style";

class RankComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.visible !== nextProps.visible) {
            return true;
        }
        if (!this.props.rankList && nextProps.rankList) {
            return true;
        }
        return false;
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
        const {visible, rankList} = this.props;
        const selectTag = this.selectTag;
        return visible && (
            <React.Fragment>
                <GlobalStyle/>
                <RankDialog className={visible ? 'show fadeInUp faster animated' : ''}>
                    <DialogTop>
                        <Title/>
                        <Close onClick={this.props.CloseRank}/>
                    </DialogTop>
                    <DialogContent2>
                        <div>
                            <RankTitle>
                                <div>排行</div>
                                <div>昵称</div>
                                <div>今日盈利</div>
                            </RankTitle>
                        </div>
                        <RankList>
                            {rankList.ls && rankList.ls.map(function (data) {
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
                                <div>{selectTag(rankList.own ? rankList.own.ranking : -1)}</div>
                                <div><span>{this.props.userinfo.username}</span></div>
                                <div><RankMoneyTag/><span
                                    className='moneyTitle'>{rankList.own ? rankList.own.profit : 0}</span></div>
                            </MyRank>
                        </div>
                        <BottomDecoration/>
                    </DialogContent2>
                </RankDialog>
                <MongolianWrapper className={visible ? 'show' : 'hidden'}></MongolianWrapper>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rankList: state.home.get('rankList'),
    }
};

export default connect(mapStateToProps, null)(RankComponent)