import React from 'react';
import {
    HomeWrapper,
} from './style';
import {connect} from 'react-redux';
/*component*/
import TopComponent from './top';
import NavigationComponent from './navigation';
import AnnouncementComponent from './announcement';
import RoomComponent from './room';
import BottomComponent from './bottom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomeWrapper>
                <TopComponent/>
                <AnnouncementComponent/>
                <NavigationComponent/>
                <RoomComponent/>
                <BottomComponent/>
            </HomeWrapper>
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

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)