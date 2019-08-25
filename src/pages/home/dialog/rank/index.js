import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {Bg, Close, RankDialog,MongolianWrapper,BottomDecoration,RankList,Rank,MyRank,RankTitle} from './../style';
import bg from '../../../../resource/zhujiemian/rank/rank_bg.png';
import close from '../../../../resource/dengluye/guanbi.png';
import * as Actions from "../../../home/store/actions";

class RankComponent extends React.Component {
    componentWillMount() {
        this.props.getRankList();
    }

    render() {
        const {visible} = this.props;
        return visible && (
            <React.Fragment>
                <RankDialog className={visible ? 'show fadeInUp faster animated' : ''}>
                    <div>
                        <Bg src={bg}/>
                        <Close src={close} onClick={this.props.CloseRank}/>
                    </div>
                    <div>
                        <RankTitle></RankTitle>
                    </div>
                    <RankList>
                        {this.props.rankList.map(function (data,index) {
                            return (<Rank key={index}></Rank>)
                        })}
                    </RankList>
                    <div>
                        <MyRank></MyRank>
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