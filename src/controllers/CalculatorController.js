var CalculatorController = function() {

  this.EnumTypes = EnumTypes = {
    'NUMBER': 0,
    'OPERATOR': 1,
    'EQUALS': 2,
    'CLEAR': 3
  };

  this.possibleInputs = [
    { text: '1', type: EnumTypes.NUMBER },
    { text: '2', type: EnumTypes.NUMBER },
    { text: '3', type: EnumTypes.NUMBER },
    { text: '+', type: EnumTypes.OPERATOR },

    { text: '4', type: EnumTypes.NUMBER },
    { text: '5', type: EnumTypes.NUMBER },
    { text: '6', type: EnumTypes.NUMBER },
    { text: '-', type: EnumTypes.OPERATOR },

    { text: '7', type: EnumTypes.NUMBER },
    { text: '8', type: EnumTypes.NUMBER },
    { text: '9', type: EnumTypes.NUMBER },
    { text: 'x', type: EnumTypes.OPERATOR },

    { text: 'C', type: EnumTypes.CLEAR },
    { text: '0', type: EnumTypes.NUMBER },
    { text: '=', type: EnumTypes.EQUALS },
    { text: '÷', type: EnumTypes.OPERATOR }

  ];

  // buffer
  var buffer = [
    { value: 0,
      last: EnumTypes.CLEAR,
      operator: ''
    }
  ];

  this.input = function(buttonType) {

    var display = '';

    // clear button
    if (buttonType.type == EnumTypes.CLEAR) {
      // reset buffer
      buffer = [
        { value: 0, last: EnumTypes.CLEAR, operator: '' }
      ];
    }

    // number buttons
    else if (buttonType.type == EnumTypes.NUMBER) {

      var value = buttonType.text == '0' ? '' : buttonType.text;
      var last = getLastEntry();

      // concatenate number
      var newValue = (last.value + '' + value) * 1;

      // if last entry was a operator start new buffer
      // else overwrite current one
      var entry = {
        value: newValue,
        last: EnumTypes.NUMBER,
        operator: last.operator
      };

      setLastEntry(entry);

      display = newValue;
    }

    // operator buttons
    else if (buttonType.type == EnumTypes.OPERATOR) {

      // check if last entry wasn't an operator
      var last = getLastEntry();

      if (last.last == EnumTypes.NUMBER) {
        buffer.push({
          value: 0,
          last: EnumTypes.OPERATOR,
          operator: buttonType.text
        });

        display = 0;
      } else {
        display = last.value;
      }
    }

    else if (buttonType.type == EnumTypes.EQUALS) {
      // calculate
      var newValue = runBuffer();

      buffer = [{
        value: newValue,
        last: EnumTypes.NUMBER,
        operator: ''
      }];

      display = newValue;
    }

    console.log(buffer);

    // refresh display
    return parseFloat(display * 1);
  };

  var getLastEntry = function() {
    return buffer[buffer.length - 1];
  };

  var setLastEntry = function(v) {
    buffer[buffer.length - 1] = v;
  };

  var runBuffer = function() {

    var result = 0;

    // loop over buffer
    for (var i=0; i<buffer.length; i++) {
      var firstEntry = buffer[i];
      var secondEntry = typeof buffer[i+1] != 'undefined' ? buffer[i+1] : false;

      var n1 = parseFloat(firstEntry.value);

      if (secondEntry !== false) {

        var n2 = parseFloat(secondEntry.value);
        var operator = secondEntry.operator;

        // calc
        result = calc(n1, n2, operator);

        console.log('n1', n1);
        console.log('n2', n2);
        console.log('r', result);

      }
    }

    return result;
  };

  var calc = function(n1, n2, operator) {

    var r = n1;

    switch(operator) {
      case '+':
        r = n1 + n2;
        break;

      case '-':
        r = n1 - n2;
        break;

      case 'x':
        r = n1 * n2;
        break;

      case '÷':
        r = n1 / n2;
        break;
    }

    return r;
  };
};

module.exports = CalculatorController;
