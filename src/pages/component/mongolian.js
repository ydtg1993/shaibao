import  React from 'react';
import {MongolianWrapper} from "./style";

class Mongolian extends React.Component{
    render() {
        return (
            <MongolianWrapper className={this.props.show ? 'show':'hidden'}></MongolianWrapper>
        )
    }
}

export default Mongolian