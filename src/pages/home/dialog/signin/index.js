import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {SignInDialog,DialogContent,Title,Content,Box,Award,Day,Complete} from './style';
import {DialogTop,BottomDecoration,Close} from "../style";
import box1 from '../../../../resource/zhujiemian/signin/coin.png';
import box2 from '../../../../resource/zhujiemian/signin/box1.png';
import box3 from '../../../../resource/zhujiemian/signin/box2.png';
import box4 from '../../../../resource/zhujiemian/signin/box3.png';
import box5 from '../../../../resource/zhujiemian/signin/box4.png';
import box6 from '../../../../resource/zhujiemian/signin/box5.png';
import box7 from '../../../../resource/zhujiemian/signin/box6.png';
import * as actions from "../../store/actions";

class SignInComponent extends React.Component {
    selectBox(index){
        switch(parseInt(index)){
            case 1:
                return <Box src={box1}/>;
            case 2:
                return <Box src={box2}/>;
            case 3:
                return <Box src={box3}/>;
            case 4:
                return <Box src={box4}/>;
            case 5:
                return <Box src={box5}/>;
            case 6:
                return <Box src={box6}/>;
            case 7:
                return <Box src={box7}/>;
        }
    }

    sign(allow,day){
        if(!allow){
            return;
        }
        this.props.playerSignIn(day);
    }

    render() {
        var {visible,signInList} = this.props;
        signInList = signInList ? JSON.parse(signInList):signInList;
        const that = this;
        return visible && (<React.Fragment>
            <SignInDialog className={visible ? 'show fadeInUp faster animated' : ''}>
                <DialogTop>
                    <Title/>
                    <Close onClick={this.props.CloseSignIn}/>
                </DialogTop>
                <DialogContent>
                    <Content>
                        {signInList && Object.keys(signInList).map(function (day) {
                            return (
                                <div key={day}>
                                    <Award onClick={that.sign.bind(that,signInList[day].allow,day)}>
                                        <Day>第{day}天</Day>
                                        {that.selectBox(day)}
                                        {signInList[day].is_sign ? <Complete/>:''}
                                    </Award>
                                </div>
                            );
                        })}
                    </Content>
                    <BottomDecoration/>
                </DialogContent>
            </SignInDialog>
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        signInList:state.home.get('signInList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        playerSignIn(day){
            dispatch(actions.PlayerSignIn(day));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignInComponent);