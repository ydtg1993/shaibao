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
import axios from "axios";
import {USER_INFO} from "./store/actions";

class Game extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.match.params.room_id);
    }

    componentDidMount(){
        axios.get('/api/userinfo.json').then((res) => {
            const action = {
                type: USER_INFO,
                userInfo: res.data
            };
            this.props.getUserInfo(action);
            console.log(this.props.userInfo)
        }).catch(() => {

        });
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
        userInfo:state.game.get('userInfo')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo(action){
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Game));