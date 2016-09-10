var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    Clock = require('Clock');

    describe('Clock', ()=>{
        it('should exist',()=>{
            expect(Clock).toExist();
        })
        describe('render', ()=>{
            it('should render clock to output', ()=>{
                let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
                let $el = $(ReactDOM.findDOMNode(clock));
                let actualText = $el.find('.clock-text').text();
                expect(actualText).toBe('01:02');
            })
        })
        describe('formatSeconds', ()=>{
            it('should format seconds', ()=>{
                let clock = TestUtils.renderIntoDocument(<Clock/>);
                let seconds = 615;
                let expected = '10:15';
                let actual = clock.formatSeconds(seconds);
                expect(actual).toBe(expected);
            })
        })
        describe('formatSeconds', ()=>{
            it('should format seconds when min/sec > 10', ()=>{
                let clock = TestUtils.renderIntoDocument(<Clock/>);
                let seconds = 61;
                let expected = '01:01';
                let actual = clock.formatSeconds(seconds);
                expect(actual).toBe(expected);
            })
        })
    })