var React = require('react'),
    Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    <p>Main.jsx</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;