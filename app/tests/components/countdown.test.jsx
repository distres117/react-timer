var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    Countdown = require('Countdown');

describe('Countdown', ()=>{
    it('Should exist', ()=>{
        expect(Countdown).toExist();
    });
    describe('handleSetCountdown', ()=>{
        it('Should set state to started and Countdown', (done)=>{
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');
            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001)
        });
        it('Should not countdown into negative numbers', (done)=>{
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);
            expect(countdown.state.count).toBe(1);
            expect(countdown.state.countdownStatus).toBe('started');
            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)
        });
    });
});