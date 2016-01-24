var React = require('react');

var ClickButton = React.createClass({
  onButtonClicked: function(e) {
    this.props.onClick(this.props.buttonData);
  },
  render: function() {

    var className = '';

    switch(this.props.buttonData.type) {
      case 0:
        className += 'btn-primary';
        break;
      case 1:
        className += 'btn-info';
        break;
      case 2:
        className += 'btn-success';
        break;
      case 3:
        className += 'btn-danger';
        break;
    }

    return (
      <button
        className={'btn btn-raised ' + className}
        onClick={this.onButtonClicked}
        style={{fontSize: 18, fontWeight: 'bold'}}
      >{this.props.buttonData.text}</button>
    );
  },
});

module.exports = ClickButton;
