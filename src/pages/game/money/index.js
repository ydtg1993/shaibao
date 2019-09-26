import React from 'react';
import {
    MoneyWrapper,
    MoneySection,
    MoneyGold,
    MoneyInput,
    MoneyCharge
} from './style';
import anime from 'animejs';
import {connect} from "react-redux";

class MoneyComponent extends React.Component{
    constructor(props){
        super(props);
        this.money = React.createRef();
    }

    componentDidUpdate(nextProps, nextState, nextContext) {
        anime({
            targets: this.money.current,
            innerText: [parseInt(nextProps.myGold),parseInt(this.props.myGold)],
            round: 1,
            easing: 'easeInOutExpo'
        });
    }

    render() {
        return (
            <MoneyWrapper>
                <MoneySection>
                    <MoneyGold/>
                    <MoneyInput id='MoneyBox' ref={this.money}>{parseInt(this.props.myGold)}</MoneyInput>
                    <MoneyCharge/>
                </MoneySection>
            </MoneyWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myGold:state.auth.get('gold')
    }
};

export default connect(mapStateToProps, null)(MoneyComponent);