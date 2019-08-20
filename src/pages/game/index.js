import React from 'react';
import {
    GameWrapper,
} from './style';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import DialComponent from './dial';
import TableComponent from './table';
import MoneyComponent from './money';
import BetComponent from './bet';

class Game extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.match.params.room_id);
    }

    componentDidMount(){

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

const mapStateToProps = (state) => {
    return {
        userInfo:state.auth.get('userInfo')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Game));