import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {Bg, Close, EmailDialog,MongolianWrapper,BottomDecoration,EmailList,Email} from './../style';
import bg from '../../../../resource/zhujiemian/email/email_bg.png';
import close from '../../../../resource/dengluye/guanbi.png';
import * as Actions from "../../../home/store/actions";

class EmailComponent extends React.Component {
    componentWillMount() {
        this.props.getEmailList();
    }

    render() {
        const {visible} = this.props;
        return visible && (
            <React.Fragment>
                <EmailDialog className={visible ? 'show fadeInUp faster animated' : ''}>
                    <div>
                        <Bg src={bg}/>
                        <Close src={close} onClick={this.props.CloseEmail}/>
                    </div>
                    <EmailList>
                        {this.props.emailList.map(function (data,index) {
                            return (
                                <Email key={index}>
                                </Email>
                            )
                        })}
                    </EmailList>
                    <BottomDecoration/>
                </EmailDialog>
                <MongolianWrapper className={visible ? 'show' : 'hidden'}></MongolianWrapper>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emailList:state.home.get('emailList'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEmailList() {
            dispatch(Actions.getEmailList(1))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailComponent)