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
            page: 1,
            isLoadingMore: false,
            emailInfoVisible: false
        };
        this.emailList = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const that = this;
        this.emailList.current && this.emailList.current.addEventListener('scroll', function () {
            var afterScrollTop = this.scrollTop;
            if (afterScrollTop < this.beforeScrollTop) {
                this.beforeScrollTop = this.scrollTop;
                return;
            }
            this.beforeScrollTop = this.scrollTop;

            if (this.scrollHeight - 20 <= this.clientHeight + this.scrollTop) {
                if (that.state.isLoadingMore) {
                    return;
                }
                let page = that.state.page + 1;
                that.setState({
                    isLoadingMore: true,
                    page:page
                },()=>{
                    new Promise(function(resolve) {
                        that.props.getEmailList(page, resolve);
                    }).then(()=>{
                        that.setState(() =>({
                            isLoadingMore: false
                        }));
                    });
                });
            }
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.emailList.length !== nextProps.emailList.length) {
            return true;
        } else if (this.props.visible !== nextProps.visible) {
            return true;
        } else if (this.state.emailInfoVisible !== nextState.emailInfoVisible) {
            return true;
        }
        return false;
    }

    OpenEmailInfo(email_id) {
        this.setState({
            emailInfoVisible: true
        });
        this.props.readEmail(email_id);
    }

    CloseEmailInfo() {
        this.setState({
            emailInfoVisible: false
        });
    }

    CloseEmailList() {
        this.setState({
            page: 1,
            isLoadingMore: false
        });
        this.props.CloseEmail();
    }

    SelectMailDom(data){
        if(!data.is_read){
              return (
                  <React.Fragment>
                      <div>{data.exist_annex ? (<EnvelopeCoin/>) : (<EnvelopeClosed/>)}</div>
                      <div>
                          <div><span className='type'>【{data.tag}】</span><span
                              className='title'>{data.title}</span></div>
                          <div className='time'>{data.create_at}</div>
                      </div>
                      <div>
                          <EmailRead onClick={this.OpenEmailInfo.bind(this, data.id)}/>
                      </div>
                  </React.Fragment>);
        }
        /*mail read*/
        if(!data.exist_annex){
            return (
                <React.Fragment>
                    <div><EnvelopeOpened/></div>
                    <div>
                        <div><span className='type'>【{data.tag}】</span><span
                            className='title'>{data.title}</span></div>
                        <div className='time'>{data.create_at}</div>
                    </div>
                    <div>
                        <EmailReaded onClick={this.OpenEmailInfo.bind(this, data.id)}/>
                    </div>
                </React.Fragment>);
        }
        /*exist_annex read didnt receive*/
        if(!data.is_receive){
            return (
                <React.Fragment>
                    <div><EnvelopeCoin/></div>
                    <div>
                        <div><span className='type'>【{data.tag}】</span><span
                            className='title'>{data.title}</span></div>
                        <div className='time'>{data.create_at}</div>
                    </div>
                    <div>
                        <EnvelopeCoinReaded onClick={this.OpenEmailInfo.bind(this, data.id)}/>
                    </div>
                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                <div><EnvelopeCoin/></div>
                <div>
                    <div><span className='type'>【{data.tag}】</span><span
                        className='title'>{data.title}</span></div>
                    <div className='time'>{data.create_at}</div>
                </div>
                <div>
                    <EnvelopeCoinReaded onClick={this.OpenEmailInfo.bind(this, data.id)}/>
                </div>
            </React.Fragment>
        )
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
                                    {that.SelectMailDom(data)}
                                </Email>
                            )
                        })}
                    </EmailList>
                    <BottomDecoration/>
                </EmailDialog>
                <EmailInfoComponent visible={this.state.emailInfoVisible}
                                    CloseEmailInfo={this.CloseEmailInfo.bind(this)}/>
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
        getEmailList(page,callback) {
            dispatch(Actions.GetEmailList(page,callback))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailComponent)