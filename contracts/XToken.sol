pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract XToken is StandardToken {
  string public name = "X-TOKEN";
  string public symbol = "XTKN";
  uint8  public decimals = 18;
}
