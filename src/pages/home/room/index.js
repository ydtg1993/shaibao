import React from 'react';
import {
    RoomFloor,
    RoomList,
    Room,
} from './style';
import {Link} from "react-router-dom";
/*img resource*/
import room1 from '../../../resource/zhujiemian/room1.png';
import room2 from '../../../resource/zhujiemian/room2.png';
import room3 from '../../../resource/zhujiemian/room3.png';

class RoomComponent extends React.Component {
    render() {
        return (
                <RoomFloor>
                    <RoomList>
                        <Link to="/game/1"><Room src={room1} style={{marginTop:'0'}}></Room></Link>
                        <Link to="/game/2"><Room src={room2}></Room></Link>
                        <Link to="/game/3"><Room src={room3}></Room></Link>
                    </RoomList>
                </RoomFloor>
        )
    }
}

export default RoomComponent