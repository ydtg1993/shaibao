import React from 'react';
import {
    NavigationFloor,
    NavigationTab,
    TabList,
} from './style';
import {Link} from "react-router-dom";

/*img resource*/
import lucky from '../../../resource/zhujiemian/1.png';
import signIn from '../../../resource/zhujiemian/2.png';
import bet from '../../../resource/zhujiemian/3.png';
import activity from '../../../resource/zhujiemian/4.png';

class NavigationComponent extends React.Component {
    render() {
        return (
                <NavigationFloor>
                    <TabList>
                        <NavigationTab src={lucky}/>
                        <NavigationTab src={signIn}/>
                        <NavigationTab src={bet}/>
                        <NavigationTab src={activity}/>
                    </TabList>
                </NavigationFloor>
        )
    }
}

export default NavigationComponent