import React from 'react';
import {
    MoneyWrapper,
    MoneySection,
    MoneyGold,
    MoneyInput,
    MoneyCharge
} from './style';

class MoneyComponent extends React.Component{
    render() {
        return (
            <MoneyWrapper>
                <MoneySection>
                    <MoneyGold/>
                    <MoneyInput>22</MoneyInput>
                    <MoneyCharge/>
                </MoneySection>
            </MoneyWrapper>
        )
    }
}

export default MoneyComponent;