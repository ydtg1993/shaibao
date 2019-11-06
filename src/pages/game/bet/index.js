import React from 'react';
import {
    BetWrapper,
    Chip1,
    Chip2,
    Chip3,
    Chip4,
    Chip5,
    Chip6,
    BetChip1,
    BetChip2,
    BetChip3,
    BetChip4,
    BetChip5,
    BetChip6
} from './style';
import {connect} from 'react-redux';
import * as actions from './../store/actions';

class BetComponent extends React.Component {
    choiceChip(chip) {
        this.props.setBetChip(chip)
    }

    render() {
        let chip_option = this.props.hallInfo.chip_option;
        if (!chip_option) {
            chip_option = {
                "1": {'label': ''},
                "2": {'label': ''},
                "3": {'label': ''},
                "4": {'label': ''},
                "5": {'label': ''},
                "6": {'label': ''},
            }
        }
        return (
            <React.Fragment>
                <BetWrapper>
                    <Chip1 onClick={this.choiceChip.bind(this, 1)} className={this.props.chip === 1 ? 'choice' : ''}>{chip_option['1']['label']}</Chip1>
                    <Chip2 onClick={this.choiceChip.bind(this, 2)} className={this.props.chip === 2 ? 'choice' : ''}>{chip_option['2']['label']}</Chip2>
                    <Chip3 onClick={this.choiceChip.bind(this, 3)} className={this.props.chip === 3 ? 'choice' : ''}>{chip_option['3']['label']}</Chip3>
                    <Chip4 onClick={this.choiceChip.bind(this, 4)} className={this.props.chip === 4 ? 'choice' : ''}>{chip_option['4']['label']}</Chip4>
                    <Chip5 onClick={this.choiceChip.bind(this, 5)} className={this.props.chip === 5 ? 'choice' : ''}>{chip_option['5']['label']}</Chip5>
                    <Chip6 onClick={this.choiceChip.bind(this, 6)} className={this.props.chip === 6 ? 'choice' : ''}>{chip_option['6']['label']}</Chip6>
                </BetWrapper>
                <div style={{display:'none'}}>
                    <BetChip1 className='chip1'>{chip_option['1']['label']}</BetChip1>
                    <BetChip2 className='chip2'>{chip_option['2']['label']}</BetChip2>
                    <BetChip3 className='chip3'>{chip_option['3']['label']}</BetChip3>
                    <BetChip4 className='chip4'>{chip_option['4']['label']}</BetChip4>
                    <BetChip5 className='chip5'>{chip_option['5']['label']}</BetChip5>
                    <BetChip6 className='chip6'>{chip_option['6']['label']}</BetChip6>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chip: state.game.get('chip'),
        hallInfo: state.game.get('hallInfo')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBetChip(chip) {
            let action = actions.SetBetChip(chip);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BetComponent);