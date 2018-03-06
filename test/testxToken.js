const XToken = artifacts.require("XToken");

contract("XToken", function() {


  it("should have the name X-Token", function() {
    return XToken.deployed().then(function(instance) {
      return instance.name().then(function(name) {
        assert.equal(name, "X-Token", "The name of X-Token is incorrect");
      })
    })
  });

  it("should have the symbol XTKN", function() {
    return XToken.deployed().then(function(instance) {
      return instance.symbol().then(function(symbol) {
        assert.equal(symbol, "XTKN", "The symbol of X-Token is incorrect");
      })
    })
  });

  it("should have 18 decimal places", function() {
    return XToken.deployed().then(function(instance) {
      return instance.decimals().then(function(decimals) {
        assert.equal(decimals.valueOf(), 18, "The decimals of X-Token is incorrect");
      })
    })
  });

});