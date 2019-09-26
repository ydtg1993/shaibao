import React from 'react';
import "animate.css";
import {connect} from "react-redux";
import {ActivityDialog,Title,ActivityContent,Menu,Content,Unit,Text,MenuBg,ContentText,ContentImg} from './style';
import {DialogTop,MongolianWrapper,BottomDecoration, Close} from "../style";

class ActivityComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {focus:false}
    }

    focusActivity(id){
        this.setState({
            focus:id.toString()
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props.visible !== nextProps.visible){
            return true;
        }else if(this.props.activityList !== nextProps.activityList){
            let first = Object.values(nextProps.activityList)[0];
            this.setState({
                focus:first.id.toString()
            });
            return true;
        }else if(this.state.focus !== nextState.focus){
            return true;
        }
        return false;
    }

    selectContent(data){
        if(data.content_type === 'TEXT'){
            return (<ContentText>{data.content}</ContentText>);
        }
        return (<ContentImg src={data.content}/>);
    }

    render() {
        const {focus} = this.state;
        const {visible,activityList} = this.props;
        const that = this;
        return visible && (
            <React.Fragment>
                <ActivityDialog className={visible ? 'show fadeInUp faster animated' : ''}>
                    <DialogTop>
                        <Title/>
                        <Close onClick={this.props.CloseActivity}/>
                    </DialogTop>
                    <ActivityContent>
                        <Menu>
                            {activityList && Object.keys(activityList).map((id) =>{
                                return (
                                    <Unit key={id} className={focus === id ? 'focus':''} onClick={that.focusActivity.bind(that,id)}><Text>{activityList[id].title}</Text></Unit>
                                )
                            })}
                            <MenuBg/>
                        </Menu>
                        <Content>
                            {activityList && focus && that.selectContent(activityList[focus])}
                        </Content>
                    </ActivityContent>
                    <BottomDecoration/>
                </ActivityDialog>
                <MongolianWrapper className={visible ? 'show' : 'hidden'}></MongolianWrapper>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activityList:state.home.get('activityList')
    }
};

export default connect(mapStateToProps, null)(ActivityComponent);