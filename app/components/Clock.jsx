var React = require('react');

var Clock = React.createClass({
    render: function(){
        let {totalSeconds} = this.props;
        return (
            <div className="clock">
                <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
            </div>
        )
    },
    getDefaultProps: function(){
        return {
            totalSeconds: 0
        };
    },
    propTypes:{
        totalSeconds: React.PropTypes.number
    },
    formatSeconds: function(totalSeconds){
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);
        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;
        return minutes + ':' + seconds;
    }
});

module.exports = Clock;