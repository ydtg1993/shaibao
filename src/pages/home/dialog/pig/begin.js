import React from 'react';
import {connect} from 'react-redux';
import {
    BeginDialog,
    Title,
    Close,
    BeginTitle,
    PigBox,
    PigPig,
    Light
} from "./style";
import {OpenPig} from "../../store/actions";

class PigBeginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.pigBox = React.createRef();
        this.requestLock = false;
    }

    Choice() {
        if (this.requestLock) {
            return
        }
        this.requestLock = true;
        let nodes = this.pigBox.current.childNodes;
        for (let i in nodes) {
            if (nodes[i] instanceof HTMLElement) {
                nodes[i].className = nodes[i].className + ' active';
            }
        }
        const that = this;
        this.props.openPig(function () {
            that.requestLock = false;
            that.CloseBegin();
        });
    }

    CloseBegin() {
        let nodes = this.pigBox.current.childNodes;
        for (let i in nodes) {
            if (nodes[i] instanceof HTMLElement) {
                nodes[i].className = nodes[i].className.replace(/ active/, '')
            }
        }
        this.props.CloseBegin();
    }

    render() {
        const {visible} = this.props;
        return (
            <BeginDialog className={visible ? 'show fadeIn faster animated' : 'hidden'}>
                <div>
                    <Title/>
                    <Close onClick={this.CloseBegin.bind(this)}/>
                </div>
                <div>
                    <BeginTitle>选择要砸的金猪钱罐</BeginTitle>
                </div>
                <div>
                    <PigBox ref={this.pigBox}>
                        <PigPig onClick={this.Choice.bind(this)}/>
                        <PigPig onClick={this.Choice.bind(this)}/>
                        <PigPig onClick={this.Choice.bind(this)}/>
                        <PigPig onClick={this.Choice.bind(this)}/>
                        <PigPig onClick={this.Choice.bind(this)}/>
                    </PigBox>
                </div>
                <Light id='beginPigLight'/>
            </BeginDialog>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openPig(callback) {
            dispatch(OpenPig(callback));
        }
    }
}

export default connect(null, mapDispatchToProps)(PigBeginComponent);