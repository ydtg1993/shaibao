import React from 'react';
import {Close, RuleDialog, RuleTitle,RuleDialogContent,RuleTopText,RuleText} from "./style";

class PigRuleComponent extends React.Component {
    render() {
        const {visible} = this.props;
        return (
            <RuleDialog className={visible ? 'show zoomIn faster animated' : 'hidden'}>
                <div>
                    <RuleTitle/>
                    <Close onClick={this.props.CloseRule}/>
                </div>
                <div>
                    <RuleDialogContent>
                        <RuleTopText>*积分获取方式：每充值1元计算1分，赠送彩金不计算积分</RuleTopText>
                        <RuleText>1、所获得金币需1倍流水，即可提交兑换。</RuleText>
                        <RuleText>2、玩家存款由系统自动统计，若有任何异议，以系统派送 为准。</RuleText>
                        <RuleText>3、如对活动有任何疑问，可随时联系在线客服进行喜讯</RuleText>
                        <RuleText>4、本活动最终解释权归公司所有，公司有随时修改、终止 活动的权利</RuleText>
                    </RuleDialogContent>
                </div>
            </RuleDialog>);
    }
}

export default PigRuleComponent;