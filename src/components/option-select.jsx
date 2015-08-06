'use strict';

if (__CLIENT__) {
  require('./addToCartButton.less');
}
var productOption = require('./product-option.jsx');

var React = require('react');

var optionSelect = React.createClass({
    render() {
        var options = this.props.data;

        var optionNodes = options.map(function(option){
            if(options.indexOf(option.value) === -1)
                return <option value={option.optionId}>{option.decription}</option>;
            });

            return (
                <div className="select-container">
                    <select ref="menu" onChange={this.handleChange}>
                        <option value="0">Select an option</option>
                        {optionNodes}
                    </select>
                </div>
            );
    }
});

module.exports = optionSelect;
