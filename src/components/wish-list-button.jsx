'use strict';

require('../styles/addToCartButton.less');

var React = require('react');

var wishListButton = React.createClass({
    render: function() {
        var optionId = this.props.optionId;
        return (
            <a className="new-button button-grey">
                <span className="button-text">Add To Wish List</span>
            </a>
        );
    }
});

module.exports = wishListButton;

