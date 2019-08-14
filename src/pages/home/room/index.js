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
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <RoomFloor>
                    <RoomList>
                        <Link to="/game/1"><Room src={room1}></Room></Link>
                        <Room src={room2}></Room>
                        <Room src={room3}></Room>
                    </RoomList>
                </RoomFloor>
        )
    }
}

export default RoomComponent