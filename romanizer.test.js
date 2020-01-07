var romanizer = require('./romanizer');

test('Jest is up and running', function() {
  expect(1).toBe(1);
});

test('Romanizer returns a string', function() {
  var actual = typeof romanizer(2);
  var expected = 'string';
  expect(actual).toBe(expected);
});

test('Romanizer returns the correct result', function() {
  var actual = romanizer(0);
  var expected = 'The Romans had no representation for less than 1';
  expect(actual).toBe(expected);
});

// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(1);
//   var expected = 'I';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(2);
//   var expected = 'II';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(3);
//   var expected = 'III';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(4);
//   var expected = 'IV';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(5);
//   var expected = 'V';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(6);
//   var expected = 'VI';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(7);
//   var expected = 'VII';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(8);
//   var expected = 'VIII';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(9);
//   var expected = 'IX';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(10);
//   var expected = 'X';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(11);
//   var expected = 'XI';
//   expect(actual).toBe(expected);
// });
//
// test('Romanizer returns the correct result', function() {
//   var actual = romanizer(30);
//   var expected = 'XXX';
//   expect(actual).toBe(expected);
// });

var values = [
  {
    arabic: 5000,
    roman:
      "There's no easy way to represent numbers over 4999 in Roman numerals, sorry!",
  },
  {
    arabic: 4999,
    roman: 'MMMMCMXCIX',
  },
  {
    arabic: 1000,
    roman: 'M',
  },
  {
    arabic: 900,
    roman: 'CM',
  },
  {
    arabic: 774,
    roman: 'DCCLXXIV',
  },
  {
    arabic: 500,
    roman: 'D',
  },
  {
    arabic: 400,
    roman: 'CD',
  },
  {
    arabic: 392,
    roman: 'CCCXCII',
  },
  {
    arabic: 101,
    roman: 'CI',
  },
  {
    arabic: 100,
    roman: 'C',
  },
  {
    arabic: 98,
    roman: 'XCVIII',
  },
  {
    arabic: 90,
    roman: 'XC',
  },
  {
    arabic: 87,
    roman: 'LXXXVII',
  },
  {
    arabic: 50,
    roman: 'L',
  },
  {
    arabic: 40,
    roman: 'XL',
  },
  {
    arabic: 30,
    roman: 'XXX',
  },
  {
    arabic: 14,
    roman: 'XIV',
  },
  {
    arabic: 10,
    roman: 'X',
  },
  {
    arabic: 9,
    roman: 'IX',
  },
  {
    arabic: 7,
    roman: 'VII',
  },
  {
    arabic: 5,
    roman: 'V',
  },
  {
    arabic: 4,
    roman: 'IV',
  },
  {
    arabic: 3,
    roman: 'III',
  },
  {
    arabic: 1,
    roman: 'I',
  },
];

values.forEach(function(value) {
  test('Romanizer returns the correct result', function() {
    var actual = romanizer(value.arabic);
    var expected = value.roman;
    expect(actual).toBe(expected);
  });
});
