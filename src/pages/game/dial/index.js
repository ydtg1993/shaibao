import React from 'react';
import {
    DialWrapper,
    Back,
    Announcement,
    Tools,
    Record,
    Tab
} from './style';
import {Link} from "react-router-dom";
import back from '../../../resource/youxijiemian/fanhui.png';
import record from '../../../resource/youxijiemian/kaijiang.png';
import servant from '../../../resource/youxijiemian/kefu.png';
import rule from '../../../resource/youxijiemian/wanfa.png';
import crowd from '../../../resource/youxijiemian/zaixian.png';

class DialComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DialWrapper>
                <Link to='/home'><Back src={back}/></Link>
                <Announcement></Announcement>
                <Tools>
                    <div>
                        <Record src={record}/>
                    </div>
                    <div>
                        <Tab src={servant}/>
                        <Tab src={rule}/>
                        <Tab src={crowd}/>
                    </div>
                </Tools>
            </DialWrapper>
        )
    }
}

export default DialComponent;