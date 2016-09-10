var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    Main = require('Main'),
    Countdown = require('Countdown'),
    Timer = require('Timer');
//Load Foundation

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown}></Route>
            <IndexRoute component={Timer}></IndexRoute>
        </Route>
    </Router>,
    document.getElementById('app')
);