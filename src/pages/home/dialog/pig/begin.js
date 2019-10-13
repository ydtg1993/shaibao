import React from 'react';
import {connect} from 'react-redux';
import {
    BeginDialog,
    Title,
    Close,
    BeginTitle,
    PigBox,
    PigPig
} from "./style";

class PigBeginComponent extends React.Component {
    constructor(props){
        super(props);
        this.pigBox = React.createRef();
    }

    Choice(){
        let nodes = this.pigBox.current.childNodes;
        for (let i in nodes){
            if(nodes[i] instanceof HTMLElement){
                nodes[i].className = nodes[i].className + ' active';
            }
        }
    }

    CloseBegin(){
        let nodes = this.pigBox.current.childNodes;
        for (let i in nodes){
            if(nodes[i] instanceof HTMLElement){
                nodes[i].className = nodes[i].className.replace(/ active/,'')
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
            </BeginDialog>
        );
    }
}

export default PigBeginComponent;