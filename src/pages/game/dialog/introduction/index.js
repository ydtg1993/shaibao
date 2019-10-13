import React from 'react';
import {IntroductionDialog,Title,DialogContent,DialogContentInfo,Text} from "./style";
import {Close, DialogTop} from "../../../home/dialog/style";

class IntroductionComponent extends React.Component {
    render() {
        const {visible} = this.props;
        return (
            <IntroductionDialog className={visible ? 'show fadeInUp faster animated' : 'hidden'}>
                <DialogTop>
                    <Title/>
                    <Close onClick={this.props.CloseIntroduction}/>
                </DialogTop>
                <DialogContent>
                    <DialogContentInfo>
                        <Text>1)进入游戏后,本局还在下注的倒计时情况下可以参与本局游戏,如果进入时是在开奖的倒计时情况下等待本局游戏结束后参与游戏;</Text>
                        <Text>2)游戏开始后,玩家开始下注,点击桌面代表多个骰子组合结合的区域投入筹码,下注时间为30秒;</Text>
                        <Text>3)下注时间结束后,所有玩家不能继续下注,庄家开启骰盅后显示结果;</Text>
                        <Text>4)根据开启骰盅的结果,对应桌面上的区域,玩家押中的区域会赢得庄家给予的对应赔率的筹码,没有押中区域的筹码,归庄家所有</Text>
                        <Text>下注区域包括:</Text>
                        <Text style={{marginTop:0}}>大：总点数11至17 小：总点数4至10</Text>
                        <Text>单：总点数和值为单 双：总点数和值为双</Text>
                        <Text>点数:分别为4、5、6、7、8、9、10、11、12、13、14、15、16、17</Text>
                        <Text>总共18个下注区域。</Text>
                        <Text>赔率分别为:</Text>
                        <Text style={{marginTop:0}}>大(1赔1)、小(1赔1)、数字4(1赔50)、数字5(1赔18)、 数字6(1赔14)、数字7(1赔12)、数字8(1赔8)、数字9(1赔6)数字10(1赔6)、数字11(1赔6)、数字12(1赔6)、数字13(1赔8)、数字14(1赔12)、数字15(1赔14)、数字16(1赔18)、数字17(1赔50)。</Text>
                    </DialogContentInfo>
                </DialogContent>
            </IntroductionDialog>
        );
    }
}

export default IntroductionComponent;