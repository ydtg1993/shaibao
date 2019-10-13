import React from 'react';
import {connect} from 'react-redux';
import * as Actions from "../../../home/store/actions";
import {
    EmailDialogInfo,
    InfoTitle,
    EmailDialogInfoContent,
    SubmitButton,
    EmailContent,
    EmailRemark,
    EnvelopeCoin,
    EmailDialogInfoBottom
} from './style';
import {DialogTop, Close} from "../style";

class EmailInfoComponent extends React.Component {
    deleteMail(mail_id) {
        this.props.DeleteMail(mail_id);
        this.props.CloseEmailInfo();
    }

    receiveCoin(mail_id) {
        this.props.ReceiveCoin(mail_id);
        this.props.CloseEmailInfo();
    }

    render() {
        const {visible, emailInfo} = this.props;
        return (
                <EmailDialogInfo className={visible ? 'show fadeIn faster animated' : ''}>
                    <DialogTop>
                        <InfoTitle/>
                        <Close onClick={this.props.CloseEmailInfo}/>
                    </DialogTop>
                    <EmailDialogInfoContent>
                        {emailInfo.content_type === 'TEXT' ?
                            (<EmailContent>{emailInfo.content}</EmailContent>) : (<img style={{width: '100%'}} src={emailInfo.content ? emailInfo.content : ''} alt="title"/>)
                        }
                        {emailInfo.exist_annex ? (
                            <EmailRemark>
                                <span>{emailInfo.annex.value} X</span><EnvelopeCoin/>
                            </EmailRemark>
                        ) : ''}
                    </EmailDialogInfoContent>
                    <EmailDialogInfoBottom>
                        {emailInfo.exist_annex && !emailInfo.is_receive? (
                            <SubmitButton onClick={this.receiveCoin.bind(this, emailInfo.id)}>领取</SubmitButton>
                        ) : (
                            <SubmitButton onClick={this.deleteMail.bind(this, emailInfo.id)}>删除</SubmitButton>
                        )
                        }
                    </EmailDialogInfoBottom>
                </EmailDialogInfo>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emailInfo: state.home.get('emailInfo')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        DeleteMail(mail_id) {
            dispatch(Actions.DeleteMail(mail_id));
        },
        ReceiveCoin(mail_id) {
            dispatch(Actions.ReceiveCoin(mail_id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailInfoComponent)