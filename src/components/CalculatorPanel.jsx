var React = require('react');
var CalculatorController = require('../controllers/CalculatorController.js');
var Calculator = new CalculatorController();
var ClickButton = require('./ClickButton.jsx');

var CalculatorPanel = React.createClass({
  getInitialState: function() {
    return {
      result: 0.00
    }
  },
  onButtonClicked: function(e) {
    this.setState({
      result: Calculator.input(e)
    });
  },
  render: function() {

    var buttons = Calculator.possibleInputs;

    var styleResult = {
      textAlign: 'right',
      paddingRight: 5, 
      fontSize: 30,
      height: 60,
      backgroundColor: 'lightgrey'
    };

    return (
      <div className="col-sm-5">
        <div className="row">
          <div className="panel panel-primary">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-12">
                  <input className="form-control icon-" style={styleResult} value={this.state.result} disabled />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[0]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[1]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[2]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[3]} onClick={this.onButtonClicked} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[4]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[5]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[6]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[7]} onClick={this.onButtonClicked} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[8]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[9]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[10]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[11]} onClick={this.onButtonClicked} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[12]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[13]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[14]} onClick={this.onButtonClicked} />
                </div>
                <div className="col-sm-3">
                  <ClickButton buttonData={buttons[15]} onClick={this.onButtonClicked} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CalculatorPanel;
