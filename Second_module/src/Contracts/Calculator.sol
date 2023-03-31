

// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Calculator {
    int public  a; 
    int public b ;
    constructor () {
        a = 0 ;
        b= 0 ;
    }
    function abs(int x) private pure returns (int) {
    return x >= 0 ? x : -x;
}
    function setValues (int _a , int _b) public  {
            a = _a ;
            b = _b ;
    }
    function add() public view returns(int) {
        return a+b; 
    } 
    function sub() public view  returns  (int) {
     return abs(a-b);
    }
    function multiply() public view returns (int) {
        return a*b;
    }
    function divide() public view returns  (int) {
        require(b!=0 , "cannot be divided by zero");
        return a/b ;
    }
}
// deployed on the contract =0x804a85dBe0743FaB694CC99d51Bf0330c74A67D5

