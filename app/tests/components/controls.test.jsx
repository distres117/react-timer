var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    Controls = require('Controls');

describe('Controls', ()=>{
    it('Should exist', ()=>{
        expect(Controls).toExist();
    });
    describe('render', ()=>{
        it('should render pause when started', ()=>{
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let pauseBtn = $el.find('button:contains(Pause)');
            expect(pauseBtn.length).toBe(1);
        });
        it('should render start when paused', ()=>{
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let pauseBtn = $el.find('button:contains(Start)');
            expect(pauseBtn.length).toBe(1);
        });    

    })
});