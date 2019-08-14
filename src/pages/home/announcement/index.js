import React from 'react';
import {
    AnnouncementFloor,
    Announcement,
} from './style';
import {Link} from "react-router-dom";

class AnnouncementComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <AnnouncementFloor>
                    <Announcement></Announcement>
                </AnnouncementFloor>
        )
    }
}

export default AnnouncementComponent