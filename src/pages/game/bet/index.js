import React from 'react';
import {
    BetWrapper,
    Chip
} from './style';
import chip5 from '../../../resource/youxijiemian/bet5.png';
import chip30 from '../../../resource/youxijiemian/bet30.png';
import chip100 from '../../../resource/youxijiemian/bet100.png';
import chip500 from '../../../resource/youxijiemian/bet500.png';
import chip2k from '../../../resource/youxijiemian/bet2k.png';
import chip1w from '../../../resource/youxijiemian/bet1w.png';


class BetComponent extends React.Component{
    render() {
        return (
            <BetWrapper>
                <Chip src={chip5}/>
                <Chip src={chip30}/>
                <Chip src={chip100}/>
                <Chip src={chip500}/>
                <Chip src={chip2k}/>
                <Chip src={chip1w}/>
            </BetWrapper>
        )
    }
}

export default BetComponent;