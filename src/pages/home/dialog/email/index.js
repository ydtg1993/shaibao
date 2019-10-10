import React from 'react';
import {connect} from 'react-redux';
import {
    EmailDialog,
    ListTitle,
    EmailList,
    Email,
    EnvelopeCoin,
    EnvelopeOpened,
    EnvelopeClosed,
    EmailReaded,
    EmailRead,
    EnvelopeCoinReaded
} from './style';
import {Close} from "../style";
import {DialogTop, BottomDecoration} from "../style";
import EmailInfoComponent from './info';
import * as Actions from "../../../home/store/actions";

class EmailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            isLoadingMore: false,
            emailInfoVisible: false
        };
        this.emailList = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const that =this;
        this.emailList.current && this.emailList.current.addEventListener('scroll', function () {
            var afterScrollTop = this.scrollTop;
            if(afterScrollTop < this.beforeScrollTop){
                this.beforeScrollTop = this.scrollTop;
                return;
            }
            this.beforeScrollTop = this.scrollTop;

            if(this.scrollHeight - 20 <= this.clientHeight + this.scrollTop) {
                if(that.state.isLoadingMore){
                    return;
                }
                let page = that.state.page + 1;
                that.setState({
                    isLoadingMore: true,
                    page:page
                });
                that.props.getEmailList(page);
            }
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.emailList.length !== nextProps.emailList.length) {
            this.setState({
                isLoadingMore: false
            });
            return true;
        } else if (this.props.visible !== nextProps.visible) {
            return true;
        } else if(this.state.emailInfoVisible !== nextState.emailInfoVisible){
            return true;
        }
        return false;
    }

    OpenEmailInfo(email_id) {
        this.props.readEmail(email_id);
        this.setState({
            emailInfoVisible: true
        });
    }

    CloseEmailInfo() {
        this.setState({
            emailInfoVisible: false
        });
    }

    CloseEmailList(){
        this.setState({
            page:1,
            isLoadingMore: false
        });
        this.props.CloseEmail();
    }

    render() {
        const {visible, emailList} = this.props;
        const that = this;
        return (
            <React.Fragment>
                <EmailDialog className={visible ? 'show fadeInUp faster animated' : 'hidden'}>
                    <DialogTop>
                        <ListTitle/>
                        <Close onClick={this.CloseEmailList.bind(this)}/>
                    </DialogTop>
                    <EmailList ref={this.emailList}>
                        {emailList && emailList.map(function (data) {
                            return (
                                <Email key={data.id} className={data.is_read ? 'read' : ''} id={`email_id_${data.id}`}>
                                    {
                                        !data.is_read ? (
                                                <React.Fragment>
                                                    <div>{data.exist_annex ? (<EnvelopeCoin/>) : (<EnvelopeClosed/>)}</div>
                                                    <div>
                                                        <div><span className='type'>【{data.tag}】</span><span
                                                            className='title'>{data.title}</span></div>
                                                        <div className='time'>{data.create_at}</div>
                                                    </div>
                                                    <div>
                                                        <EmailRead onClick={that.OpenEmailInfo.bind(that, data.id)}/>
                                                    </div>
                                                </React.Fragment>) :
                                            (
                                                <React.Fragment>
                                                    <div>{data.exist_annex ? (<EnvelopeCoin/>) : (
                                                        <EnvelopeOpened/>)}</div>
                                                    <div>
                                                        <div><span className='type'>【{data.tag}】</span><span
                                                            className='title'>{data.title}</span></div>
                                                        <div className='time'>{data.create_at}</div>
                                                    </div>
                                                    <div>
                                                        {data.exist_annex ? (<EnvelopeCoinReaded
                                                            onClick={that.OpenEmailInfo.bind(that, data.id)}/>) : (
                                                            <EmailReaded
                                                                onClick={that.OpenEmailInfo.bind(that, data.id)}/>)}
                                                    </div>
                                                </React.Fragment>)
                                    }
                                </Email>
                            )
                        })}
                    </EmailList>
                    <BottomDecoration/>
                </EmailDialog>
                <EmailInfoComponent visible={this.state.emailInfoVisible} CloseEmailInfo={this.CloseEmailInfo.bind(this)}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emailList: state.home.get('emailList')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        readEmail(email_id) {
            dispatch(Actions.ReadEmail(email_id))
        },
        getEmailList(page) {
            dispatch(Actions.GetEmailList(page))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailComponent)