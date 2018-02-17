var XToken = artifacts.require("XToken");

module.exports = function(deployer) {
  // deployment steps

  deployer.deploy(XToken);
};
