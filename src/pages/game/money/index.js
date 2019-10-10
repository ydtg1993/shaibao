import React from 'react';
import {
    MoneyWrapper,
    MoneySection,
    MoneyDigital2,
    MoneyInput2
} from './style';
import anime from 'animejs';
import {connect} from "react-redux";
import {MoneyCharge, MoneyGold} from "../../home/style";

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
                    <MoneyCharge onClick={this.props.OpenCharge}/>
                    <MoneyDigital2 id='MoneyBox' ref={this.money}>{parseInt(this.props.myGold)}</MoneyDigital2>
                    <MoneyInput2/>
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