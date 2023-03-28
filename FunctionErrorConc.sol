// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract FunctionErrorConc
    {
        address  payable public owner ;
        constructor () {
        owner = payable(msg.sender); // seting the owner of the contract 
        }  
        function RequireFunc() public view {
                require(msg.sender == owner,"not the owner of the contract sent by the - RequireFunc() "); 
        }  
        function RevertFunc() public  view {
            if(msg.sender != owner ) { 
                revert ("not the owner of the contract sebnt by the RevertFunc()");
            }
        }
        error NotOwner(address payable _address, string  str); 
        function revertCustomFunc() public view {
              if(msg.sender!= owner) 
              {
                revert NotOwner({_address: payable(msg.sender), str : "not the owner of the conytract sent by the - RevertCustom"});
              }
        } 
        function assertFunc() public payable  {
            assert(msg.sender== owner);

        }

    }
