import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/*redux*/
import { Provider } from 'react-redux';
import store from './store';
/*router*/
import Auth from './pages/auth';
import Home from './pages/home';
import Game from './pages/game/loadable';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <Route exact path="/auth" component={Auth}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/game/:room_id" component={Game}/>
                    </React.Fragment>
                </Router>
            </Provider>
        )
    }
}

export default App;
