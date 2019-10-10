import React from 'react';
import {
    RoomFloor,
    RoomList,
    Room1,
    Room2,
    Room3
} from './style';
import {Link} from "react-router-dom";

class RoomComponent extends React.Component {
    render() {
        return (
                <RoomFloor>
                    <RoomList>
                        <Link to="/game/1"><Room1 style={{marginTop:'0'}}/></Link>
                        <Link to="/game/2"><Room2/></Link>
                        <Link to="/game/3"><Room3/></Link>
                    </RoomList>
                </RoomFloor>
        )
    }
}

export default RoomComponent