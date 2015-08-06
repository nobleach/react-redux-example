'use strict';

require('../styles/addToCartButton.less');

var React = require('react');

var addToCartButton = React.createClass({
    render: function() {
        var buttonText = this.props.buttonText;
        var optionId = this.props.optionId;
        return (
            <a className="new-button button-green">
                <span className="button-text">{buttonText}</span>
            </a>
        );
    }
});

module.exports = addToCartButton;
