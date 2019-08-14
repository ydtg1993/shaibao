import React from 'react';
import {
    GameWrapper,
} from './style';
/*component*/
import DialComponent from './dial';
import TableComponent from './table';
import MoneyComponent from './money';
import BetComponent from './bet';

class Game extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GameWrapper>
                <DialComponent/>
                <TableComponent/>
                <MoneyComponent/>
                <BetComponent/>
            </GameWrapper>
        )
    }
}

export default Game;