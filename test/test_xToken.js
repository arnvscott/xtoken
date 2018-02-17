const XToken = artifacts.require("XToken");

contract("XToken", function(accounts) {
  it("should have the name X-Token", function() {
    return XToken.deployed().then(function(instance) {
        return instance.name().then(function(name) {
            assert.equal(name, "X-Token", "The name of XToken is invalid")
          })
      })
  });
});
