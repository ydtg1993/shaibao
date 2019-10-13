import React from 'react';
import {
    DialWrapper,
    Back,
    Announcement,
    AnnouncementBox,
    Tools,
    Record,
    Tab1,
    Tab2,
    Tab3,
    Text,
    Woman
} from './style';
import {Link} from "react-router-dom";
import RecordComponent from "../dialog/record";
import {connect} from "react-redux";
import * as Actions from "../store/actions";
import IntroductionComponent from "../dialog/introduction";

class DialComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recordVisible: false,
            introductionVisible: false,
            publishLock: false
        };
        this.announce = React.createRef();
        this.announceBox = React.createRef();
        this.announcementList = false;
        this.counter = 0;
    }

    componentDidMount() {
        if (this.props.announcementList) {
            this.announcementList = this.props.announcementList;
            this.publish();
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.announcementList) {
            this.announcementList = nextProps.announcementList;
            this.publish();
        }
    }

    publish() {
        if (this.state.publishLock || !this.announcementList) {
            return;
        }
        this.setState({
            publishLock: true
        });
        if (!this.announcementList[this.counter]) {
            this.counter = 0;
        }
        this.announce.current.textContent = this.announcementList[this.counter];
        let announceW = this.announce.current.clientWidth + 10;
        let margin = this.announceBox.current.clientWidth;
        this.announce.current.style = `left:${margin}px`;
        const that = this;
        this.interval = setInterval(function () {
            margin = margin - 0.2;
            if (!that.announce.current) {
                clearInterval(that.interval);
                return
            }
            that.announce.current.style = `left:${margin}px`;
            if (margin <= -announceW) {
                clearInterval(that.interval);
                that.counter++;
                that.publish();
            }
        }, 10);
    }

    componentWillUnmount() {
        this.setState({
            publishLock: false
        });
        clearInterval(this.interval);
    }

    OpenIntroduction() {
        this.setState({introductionVisible: true});
    }

    CloseIntroduction() {
        this.setState({introductionVisible: false});
    }

    OpenRecordDialog() {
        this.props.getRankList(this.props.playerPosition);
        this.setState({recordVisible: true});
    }

    CloseRecordDialog() {
        this.setState({recordVisible: false});
    }

    render() {
        return (
            <React.Fragment>
                <DialWrapper>
                    <Link to='/home' style={{position: 'relative', zIndex: 10000}}><Back/></Link>
                    <Announcement>
                        <AnnouncementBox ref={this.announceBox}>
                            <Text ref={this.announce}></Text>
                        </AnnouncementBox>
                    </Announcement>
                    <Tools>
                        <div>
                            <Record className={this.state.recordVisible ? 'hidden' : ''} onClick={this.OpenRecordDialog.bind(this)}/>
                            <RecordComponent visible={this.state.recordVisible} CloseRecordDialog={this.CloseRecordDialog.bind(this)}/>
                        </div>
                        <div>
                            <Tab1/>
                            <Tab2 onClick={this.OpenIntroduction.bind(this)}/>
                            <Tab3/>
                        </div>
                        <Woman/>
                    </Tools>
                </DialWrapper>
                <IntroductionComponent visible={this.state.introductionVisible} CloseIntroduction={this.CloseIntroduction.bind(this)}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playerPosition: state.auth.get('playerPosition'),
        announcementList: state.home.get('announcementList')
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