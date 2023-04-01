// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.8/contracts/token/ERC20/ERC20.sol";
contract Flutecoin is ERC20 {
constructor (string memory name , string memory symbol ,  uint256 initialSupply) ERC20(name , symbol)  {
    _mint(msg.sender , initialSupply * (10**18) );
}
function decimals() public view virtual override returns (uint8) {
  return 18;
}
}
