import React from 'react';
import {
    TopFloor,
} from './style';
import {Link} from "react-router-dom";


class TopComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<TopFloor/>)
    }
}

export default TopComponent