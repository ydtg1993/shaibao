import React from 'react';
import {connect} from 'react-redux';
import {SignInDialog,DialogContent,Title,Content,Box,AwardBox,Award,Complete,Light} from './style';
import {DialogTop,BottomDecoration,Close} from "../style";
import * as actions from "../../store/actions";
import {
    img_home_signin_box1,
    img_home_signin_box2,
    img_home_signin_box3,
    img_home_signin_box4,
    img_home_signin_box5,
    img_home_signin_box6,
    img_home_signin_box7,
} from '../../../../resource';

class SignInComponent extends React.Component {
    selectBox(index){
        switch(parseInt(index)){
            case 1:
                return <Box src={img_home_signin_box1}/>;
            case 2:
                return <Box src={img_home_signin_box2}/>;
            case 3:
                return <Box src={img_home_signin_box3}/>;
            case 4:
                return <Box src={img_home_signin_box4}/>;
            case 5:
                return <Box src={img_home_signin_box5}/>;
            case 6:
                return <Box src={img_home_signin_box6}/>;
            case 7:
                return <Box src={img_home_signin_box7}/>;
            default:
                break;
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
        return (
            <SignInDialog className={visible ? 'show fadeInUp faster animated' : 'hidden'}>
                <DialogTop>
                    <Title/>
                    <Close onClick={this.props.CloseSignIn}/>
                </DialogTop>
                <DialogContent>
                    <Content>
                        {signInList && Object.keys(signInList).map(function (day) {
                            return (
                                <AwardBox key={day} className={day === 7 ? 'last':''}>
                                    <Award onClick={that.sign.bind(that,signInList[day].allow,day)}>
                                        {that.selectBox(day)}
                                        {signInList[day].is_sign ? <Complete/>:''}
                                    </Award>
                                </AwardBox>
                            );
                        })}
                    </Content>
                    <BottomDecoration/>
                </DialogContent>
                <Light id='signInLight'/>
            </SignInDialog>
        );
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