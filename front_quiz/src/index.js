import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
    	<Switch>
      	<Route exact path="/" component={Home} />
      	<Route path="/master" component={App} />
    		<Route component={NotFound} />
    	</Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
