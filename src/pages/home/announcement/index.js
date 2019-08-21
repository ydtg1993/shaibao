import React from 'react';
import {
    AnnouncementFloor,
    Announcement,
} from './style';
import {Link} from "react-router-dom";

class AnnouncementComponent extends React.Component {
    render() {
        return (
                <AnnouncementFloor>
                    <Announcement></Announcement>
                </AnnouncementFloor>
        )
    }
}

export default AnnouncementComponent