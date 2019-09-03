import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {Bg, Close, EmailDialog,MongolianWrapper,BottomDecoration,EmailList,Email,Envelope,EnvelopeOpened,EnvelopeClosed,EmailReaded,EmailRead} from './../style';
import EmailInfoComponent from './info';
import bg from '../../../../resource/zhujiemian/email/email_bg.png';
import close from '../../../../resource/dengluye/guanbi.png';
import * as Actions from "../../../home/store/actions";

class EmailComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emailInfoVisible:false
        }
    }

    componentWillMount() {
        this.props.getEmailList();
    }

    OpenEmailInfo(email_id){
        this.props.ReadEmail(email_id,this.props.userInfo.id);
        this.setState({
            emailInfoVisible:true
        });
    }

    CloseEmailInfo(){
        this.setState({
            emailInfoVisible:false
        });
    }

    render() {
        const {visible} = this.props;
        const OpenEmailInfo = this.OpenEmailInfo;
        const that = this;
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
                                <Email key={data.id} className={data.read ? 'read':''}>
                                    {data.read ? (
                                        <React.Fragment>
                                        <div><EnvelopeClosed/></div>
                                        <div>
                                            <div><span className='type'>【{data.type}】</span><span className='title'>{data.title}</span></div>
                                            <div className='time'>{data.create_at}</div>
                                        </div>
                                        <div>
                                            <EmailRead onClick={OpenEmailInfo.bind(that,data.id)}/>
                                        </div>
                                        </React.Fragment>):
                                        (
                                        <React.Fragment>
                                            <div><EnvelopeOpened/></div>
                                            <div>
                                                <div><span className='type'>【{data.type}】</span><span className='title'>{data.title}</span></div>
                                                <div className='time'>{data.create_at}</div>
                                            </div>
                                            <div>
                                                <EmailReaded onClick={OpenEmailInfo.bind(that,data.id)}/>
                                            </div>
                                        </React.Fragment>)}
                                </Email>
                            )
                        })}
                    </EmailList>
                    <BottomDecoration/>
                </EmailDialog>
                <MongolianWrapper className={visible ? 'show' : 'hidden'}></MongolianWrapper>
                <EmailInfoComponent visible={this.state.emailInfoVisible} CloseEmailInfo={this.CloseEmailInfo.bind(this)}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo:state.auth.get('userInfo'),
        emailList:state.home.get('emailList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEmailList() {
            dispatch(Actions.getEmailList(1))
        },
        ReadEmail(email_id,user_id){
            dispatch(Actions.ReadEmail(email_id,user_id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailComponent)