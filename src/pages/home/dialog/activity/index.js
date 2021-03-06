import React from 'react';
import {connect} from "react-redux";
import {ActivityDialog, Title, ActivityContent, Menu, Content, Unit, Text, ContentText, ContentImg} from './style';
import {DialogTop, BottomDecoration, Close} from "../style";

class ActivityComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focus: false}
    }

    focusActivity(id) {
        this.setState({
            focus: id.toString()
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.visible !== nextProps.visible) {
            return true;
        } else if (this.props.activityList !== nextProps.activityList) {
            let first = Object.values(nextProps.activityList)[0];
            first && this.setState({
                focus: first.id.toString()
            });
            return true;
        } else if (this.state.focus !== nextState.focus) {
            return true;
        }
        return false;
    }

    selectContent(data) {
        if (data.content_type === 'TEXT') {
            return (<ContentText>{data.content}</ContentText>);
        }
        return (<ContentImg src={data.content}/>);
    }

    render() {
        const {focus} = this.state;
        const {visible, activityList} = this.props;
        const that = this;
        return (
            <ActivityDialog className={visible ? 'show fadeInUp faster animated' : 'hidden'}>
                <DialogTop>
                    <Title/>
                    <Close onClick={this.props.CloseActivity}/>
                </DialogTop>
                <ActivityContent>
                    <Menu>
                        {activityList && Object.keys(activityList).map((id) => {
                            return (
                                <Unit key={id} className={focus === id ? 'focus' : ''}
                                      onClick={that.focusActivity.bind(that, id)}><Text>{activityList[id].title}</Text></Unit>
                            )
                        })}
                    </Menu>
                    <Content>
                        {activityList && focus && that.selectContent(activityList[focus])}
                    </Content>
                </ActivityContent>
                <BottomDecoration/>
            </ActivityDialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activityList: state.home.get('activityList')
    }
};

export default connect(mapStateToProps, null)(ActivityComponent);