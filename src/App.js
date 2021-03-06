import React from 'react';
import "animate.css";
import {GlobalStyle} from './style'
import { BrowserRouter as Router, Route } from 'react-router-dom';
/*redux*/
import { Provider } from 'react-redux';
import store from './store';
/*router*/
import Auth from './pages/auth/loadable';
import Home from './pages/home/loadable';
import Game from './pages/game/loadable';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <Router>
                    <React.Fragment>
                        <Route exact path="/auth" component={Auth}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/game/:room_id" component={Game}/>
                    </React.Fragment>
                </Router>
                <div id='MongolianScreen' className='CloseMongolian fadeIn faster animated'/>
                <div id='GameMongolianScreen' className='CloseMongolian fadeIn faster animated'/>
                <div id="VerticalScreen">为了更好的用户体验请使用大屏手机竖屏模式</div>
            </Provider>
        )
    }
}

export default App;
