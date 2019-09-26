import React from 'react';
import {
    DialWrapper,
    Back,
    Announcement,
    AnnouncementBox,
    Tools,
    Record,
    Tab,Text
} from './style';
import {Link} from "react-router-dom";
import back from '../../../resource/youxijiemian/fanhui.png';
import record from '../../../resource/youxijiemian/kaijiang.png';
import servant from '../../../resource/youxijiemian/kefu.png';
import rule from '../../../resource/youxijiemian/wanfa.png';
import crowd from '../../../resource/youxijiemian/zaixian.png';
import RecordComponent from "../dialog/record";
import {connect} from "react-redux";
import * as Actions from "../store/actions";

class DialComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            recordVisible:false
        };
        this.announce = React.createRef();
        this.announcementList = false;
        this.counter = 0;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.announcementList){
            this.announcementList = prevProps.announcementList;
            this.publish();
        }
    }

    publish(){
        if(!this.announcementList[this.counter]){
            this.counter = 0;
        }
        this.announce.current.textContent = this.announcementList[this.counter];
        let announceW = this.announce.current.clientWidth + 10;
        let margin = 350;
        this.announce.current.style = `left:${margin}px`;
        const that = this;
        this.interval = setInterval(function () {
            margin = margin-0.2;
            that.announce.current.style = `left:${margin}px`;
            if(margin <= -announceW){
                clearInterval(that.interval);
                that.counter++;
                that.publish();
            }
        },10);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    OpenRecordDialog(){
        this.props.getRankList(this.props.playerPosition);
        this.setState({recordVisible:true});
    }

    CloseRecordDialog(){
        this.setState({recordVisible:false});
    }

    render() {
        return (
            <DialWrapper>
                <Link to='/home'><Back src={back}/></Link>
                <Announcement>
                    <AnnouncementBox>
                    <Text ref={this.announce}></Text>
                    </AnnouncementBox>
                </Announcement>
                <Tools>
                    <div>
                        <Record className={this.state.recordVisible ? 'hidden' : ''} src={record} onClick={this.OpenRecordDialog.bind(this)}/>
                        <RecordComponent visible={this.state.recordVisible} CloseRecordDialog={this.CloseRecordDialog.bind(this)}/>
                    </div>
                    <div>
                        <Tab src={servant}/>
                        <Tab src={rule}/>
                        <Tab src={crowd}/>
                    </div>
                </Tools>
            </DialWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playerPosition:state.auth.get('playerPosition'),
        announcementList:state.home.get('announcementList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRankList(room) {
            dispatch(Actions.getRecordList(room))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DialComponent);