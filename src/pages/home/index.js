import React from 'react';
import {
    HomeWrapper,
} from './style';
import {Link} from "react-router-dom";
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

export default Home