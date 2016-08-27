import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

var CitiesPage = React.createClass({
  getInitialState: function() {
    return {
      points: this.props.points,
      themes: this.props.themes,
      buttons: []
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themes: nextProps.themes
    })
  },

  render() {
    let pointValue = this.state.points
    var themes = this.state.themes

    return (
      <div className="row">
        {themes.map( themeObj => {
           return (
              <Button points={pointValue} themeID={themeObj.id} />
           )
        })}
      </div>
       )
  }
});

module.exports = CitiesPage;
