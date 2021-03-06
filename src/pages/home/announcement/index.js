import React from 'react';
import {connect} from 'react-redux';
import {
    AnnouncementFloor,
    Announcement,
    Horn,
    Text
} from './style';

class AnnouncementComponent extends React.Component {
    constructor(props){
        super(props);
        this.announce = React.createRef();
        this.announceBox = React.createRef();
        this.announcementList = false;
        this.counter = 0;
    }

    componentDidMount() {
        if(this.props.announcementList){
            this.announcementList = this.props.announcementList;
            this.publish();
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.announcementList){
            this.announcementList = nextProps.announcementList;
            this.publish();
        }
    }

    publish(){
        if(!this.announcementList){
            return;
        }
        if(!this.announcementList[this.counter]){
            this.counter = 0;
        }
        this.announce.current.textContent = this.announcementList[this.counter];
        let announceW = this.announce.current.clientWidth + 10;
        let margin = this.announceBox.current.clientWidth;
        this.announce.current.style = `left:${margin}px`;
        const that = this;
        this.interval = setInterval(function () {
            if(!that.announce.current){
                clearInterval(that.interval);
                return
            }
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

    render() {
        return (
                <AnnouncementFloor>
                    <Announcement ref={this.announceBox}>
                        <Horn/><div><Text ref={this.announce}></Text></div>
                    </Announcement>
                </AnnouncementFloor>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        announcementList:state.home.get('announcementList')
    }
};

export default connect(mapStateToProps,null)(AnnouncementComponent);