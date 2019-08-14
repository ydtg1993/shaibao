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
    BottomTab,
    BottomFloor,
    RoomList,
    Room,
    BottomTabList,
    BottomTabMain,
    BottomTabMainImg
} from './style';
import {Link} from "react-router-dom";
/*img resource*/
import lucky from '../../resource/zhujiemian/1.png';
import signIn from '../../resource/zhujiemian/2.png';
import bet from '../../resource/zhujiemian/3.png';
import activity from '../../resource/zhujiemian/4.png';

import exchange from '../../resource/zhujiemian/duihuan.png';
import email from '../../resource/zhujiemian/youjian.png';
import rank from '../../resource/zhujiemian/paihang.png';
import recommend from '../../resource/zhujiemian/tuiguang.png';
import servant from '../../resource/zhujiemian/kefu.png';
import room1 from '../../resource/zhujiemian/room1.png';
import room2 from '../../resource/zhujiemian/room2.png';
import room3 from '../../resource/zhujiemian/room3.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomeWrapper>
                <TopFloor/>

                <AnnouncementFloor>
                    <Announcement></Announcement>
                </AnnouncementFloor>

                <NavigationFloor>
                    <TabList>
                        <NavigationTab src={lucky}/>
                        <NavigationTab src={signIn}/>
                        <NavigationTab src={bet}/>
                        <NavigationTab src={activity}/>
                    </TabList>
                </NavigationFloor>

                <RoomFloor>
                    <RoomList>
                        <Room src={room1}></Room>
                        <Room src={room2}></Room>
                        <Room src={room3}></Room>
                    </RoomList>
                </RoomFloor>

                <BottomFloor>
                    <BottomTabList>
                        <BottomTab src={exchange}/>
                        <BottomTab src={email}/>
                        <BottomTabMain>
                            <BottomTabMainImg src={rank}/>
                        </BottomTabMain>
                        <BottomTab src={recommend}/>
                        <BottomTab src={servant}/>
                    </BottomTabList>
                </BottomFloor>
            </HomeWrapper>
        )
    }
}

export default Home