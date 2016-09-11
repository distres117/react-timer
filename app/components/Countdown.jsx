var React = require('react'),
    Clock = require('Clock'),
    CountdownForm = require('CountdownForm'),
    Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function(){
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },
    componentWillUnmount: function(){
        clearInterval(this.timer);
        this.timer = undefined;
    },
    componentDidUpdate: function(prevProps, prevState){
        if(this.state.countdownStatus!==prevState.countdownStatus){
            switch (this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count:0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function(){
        this.timer = setInterval(()=>{
            let newCount = this.state.count - 1;
            this.setState({count: newCount >= 0 ? newCount : 0});
            if (newCount===0)this.setState({countdownStatus:'stopped'});
        }, 1000);
    },
    handleSetCountdown: function(seconds){
        this.setState({
            countdownStatus: 'started',
            count: seconds
        }); 
    },
    handleStatusChange: function(newStatus){
        this.setState({
            countdownStatus: newStatus
        })
    },
    render: function(){
        var {count, countdownStatus} = this.state;
        let renderControlArea=()=>{
            if (countdownStatus!=='stopped')
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            else
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        };
        return (
            <div>
                <h2 className="page-title">Countdown</h2>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;