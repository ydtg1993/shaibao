import React from 'react';
import {
    HomeWrapper,
    TopFloor,
    AnnouncementFloor,
    Announcement,
    NavigationFloor,
    NavigationTab,
    TabList,
    RoomFloor,
    BottomFloor} from './style';
import {Link} from "react-router-dom";

/*img resource*/
import gonggao_bg from '../../resource/zhujiemian/gonggao.png';
import lucky from '../../resource/zhujiemian/1.png';
import signIn from '../../resource/zhujiemian/2.png';
import bet from '../../resource/zhujiemian/3.png';
import activity from '../../resource/zhujiemian/4.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomeWrapper>
                <TopFloor/>
                <AnnouncementFloor>
                    <Announcement src={gonggao_bg}/>
                </AnnouncementFloor>
                <NavigationFloor>
                    <TabList>
                        <NavigationTab src={lucky}/>
                        <NavigationTab src={signIn}/>
                        <NavigationTab src={bet}/>
                        <NavigationTab src={activity}/>
                    </TabList>
                </NavigationFloor>
                <RoomFloor/>
                <BottomFloor/>
            </HomeWrapper>
        )
    }
}

export default Home