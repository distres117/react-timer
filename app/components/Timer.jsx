var React = require('react'),
    Clock = require('Clock'),
    Controls = require('Controls');

var Timer = React.createClass({
    getInitialState:function(){
        return {
            count: 0,
            countdownStatus: 'paused'
        };
    },
    componentDidUpdate: function(prevProps, prevState){
        if (this.state.countdownStatus!==prevState.countdownStatus){
            switch (this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count:0,
                        countdownStatus: 'paused'
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function(){
        console.log('startTimer');
        this.timer = setInterval(()=>{
            let newCount = this.state.count + 1;
            this.setState({count: newCount});
        }, 1000);
    },
    handleOnStatusChange: function(newStatus){
        this.setState({countdownStatus:newStatus});
    },
    render: function(){
        let {count, countdownStatus} = this.state;
        return (
            <div>
                <h2 className="page-title">Timer</h2>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={countdownStatus} onStatusChange={this.handleOnStatusChange}/>
            </div>
            
        )
    }
});

module.exports = Timer;