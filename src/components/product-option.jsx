'use strict';
var React = require('react');

var productOption = React.createClass({
    render: function() {
        var options = this.props.data;
        console.log(options);
        return (
            <option value="{optionId}">{description}</option>
        );
    }
});

module.exports = productOption;
