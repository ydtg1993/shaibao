import React from 'react';
import {
    BetWrapper,
    Chip
} from './style';
import {connect} from 'react-redux';
import * as actions from './../store/actions';
import chip5 from '../../../resource/youxijiemian/bet5.png';
import chip30 from '../../../resource/youxijiemian/bet30.png';
import chip100 from '../../../resource/youxijiemian/bet100.png';
import chip500 from '../../../resource/youxijiemian/bet500.png';
import chip2k from '../../../resource/youxijiemian/bet2K.png';
import chip1w from '../../../resource/youxijiemian/bet1W.png';


class BetComponent extends React.Component{
    choiceChip(chip){
        this.props.setBetChip(chip)
    }

    render() {
        return (
            <BetWrapper>
                <Chip src={chip5} onClick={this.choiceChip.bind(this,1)} className={this.props.chip === 1 ? 'choice':''}/>
                <Chip src={chip30} onClick={this.choiceChip.bind(this,2)} className={this.props.chip === 2 ? 'choice':''}/>
                <Chip src={chip100} onClick={this.choiceChip.bind(this,3)} className={this.props.chip === 3 ? 'choice':''}/>
                <Chip src={chip500} onClick={this.choiceChip.bind(this,4)} className={this.props.chip === 4 ? 'choice':''}/>
                <Chip src={chip2k} onClick={this.choiceChip.bind(this,5)} className={this.props.chip === 5 ? 'choice':''}/>
                <Chip src={chip1w} onClick={this.choiceChip.bind(this,6)} className={this.props.chip === 6 ? 'choice':''}/>
            </BetWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chip:state.game.get('chip')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBetChip(chip){
            let action = actions.SetBetChip(chip);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(BetComponent);