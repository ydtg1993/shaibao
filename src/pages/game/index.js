import React from 'react';
import {
    GameWrapper,
} from './style';
/*component*/
import DialComponent from './dial';
import TableComponent from './table';
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
                <BetComponent/>
            </GameWrapper>
        )
    }
}

export default Game;