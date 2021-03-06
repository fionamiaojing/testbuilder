/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== false) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  for (var prefix = 51; prefix <=55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
        detectNetwork(parseInt(prefix) + '12345678901234').should.equal('MasterCard');
      })
    })(prefix)
  }
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011123456789012').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011123456789012345').should.equal('Discover');
  });


  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(parseInt(prefix) + '1234567890123').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(parseInt(prefix) + '1234567890123456').should.equal('Discover');
      });
    })(prefix)
  }

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6512345678901234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6512345678901234567').should.equal('Discover');
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  for (var l = 12; l <= 19; l++) {
    (function(l) {
      it('has a prefix of 5018' + ' and a length of ' + l, function() {
        detectNetwork('5018' + Array(l - 3).join('1')).should.equal('Maestro');
      });
    })(l)
  };

  for (var l = 12; l <= 19; l++) {
    (function(l) {
      it('has a prefix of 5020' + ' and a length of ' + l, function() {
        detectNetwork('5020' + Array(l - 3).join('1')).should.equal('Maestro');
      });
    })(l)
  };

  for (var l = 12; l <= 19; l++) {
    (function(l) {
      it('has a prefix of 5038' + ' and a length of ' + l, function() {
        detectNetwork('5038' + Array(l - 3).join('1')).should.equal('Maestro');
      });
    })(l)
  };

  for (var l = 12; l <= 19; l++) {
    (function(l) {
      it('has a prefix of 6304' + ' and a length of ' + l, function() {
        detectNetwork('6304' + Array(l - 3).join('1')).should.equal('Maestro');
      });
    })(l)
  };
});

describe('China UnionPay', function() {
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    for (var l = 16; l < 20; l++) {
      (function(prefix, l) {
        it('has a prefix of ' + prefix + ' and a length of ' + l, function() {
          detectNetwork(parseInt(prefix) + Array(l - 5).join('1')).should.equal('China UnionPay');
        });
      })(prefix, l)
    }
  };

  for (var prefix = 624; prefix <= 626; prefix++) {
    for (var l = 16; l < 20; l++) {
      (function(prefix, l) {
        it('has a prefix of ' + prefix + ' and a length of ' + l, function() {
          detectNetwork(parseInt(prefix) + Array(l - 2).join('1')).should.equal('China UnionPay');
        });
      })(prefix, l)
    }
  };

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    for (var l = 16; l < 20; l++) {
      (function(prefix, l) {
        it('has a prefix of ' + prefix + ' and a length of ' + l, function() {
          detectNetwork(parseInt(prefix) + Array(l - 3).join('1')).should.equal('China UnionPay');
        });
      })(prefix, l)
    }
  };
});

describe('Switch', function() {
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var prefixArray = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]
  var len = [16,18,19]
  for (var prefix of prefixArray) {
    for (var l of len) {
      (function(prefix, l) {
        it('has a prefix of ' + prefix + ' and a length of ' + l, function() {
          detectNetwork(parseInt(prefix) + Array(l - prefix.toString().length + 1).join('1')).should.equal('Switch');
        });
      })(prefix, l)
    }
  };
});
