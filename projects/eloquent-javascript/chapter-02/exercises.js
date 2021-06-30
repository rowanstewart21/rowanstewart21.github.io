
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(size) {
  var line = '';
  
  for (var i = 0; i < size; i++) {
    line += '#';
    console.log(line);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (var i = 1; i < 16; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  var chessboard = '';
  
  var lineTwo = '';
  var lineOne = '';
  
  for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      lineOne += ' ';
      lineTwo += '#';
    } else {
      lineOne += '#';
      lineTwo += ' ';
    }
  }
  
  lineOne += '\n';
  lineTwo += '\n';
  
  for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      chessboard += (lineOne);
    } else {
      chessboard += (lineTwo);
    }
  }
  
  console.log(chessboard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
