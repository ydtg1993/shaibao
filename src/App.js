import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
/*redux*/
import {Provider} from 'react-redux';
import store from './store'
/*cookie*/
import { CookiesProvider } from 'react-cookie';
/*router*/
import Auth from './pages/auth';
import Home from './pages/home';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <CookiesProvider>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/auth" component={Auth}/>
                        </CookiesProvider>
                    </React.Fragment>
                </Router>
            </Provider>
        )
    }
}

export default App;
