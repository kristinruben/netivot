// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  let Button = React.createClass({
    getInitialState: function(){
        return {
            color: 'button special small icon fa-close fa-lg'
        };
    },
    handleClick: function(){
        if (this.state.color === 'button special small icon fa-close fa-lg'){
            this.setState({color: 'button small icon fa-plus fa-lg'});
        } else {
            this.setState({color: 'button special small icon fa-close fa-lg'});
        }
    },
    render: function() {
        return <button className={this.state.color} onClick={this.handleClick}>city</button>
    }
});

ReactDOM.render(<Button />, document.getElementById('cities'));
});

model.exports = Button;
