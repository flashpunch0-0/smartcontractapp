
// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
contract Storage {

    
    uint256 value;
    //  uint256 keycount=1;

    mapping(uint=>address) public walletaddress;
   uint[] private keyarray; 
    function dataStore(uint data) public {

 value = value + data;
//  ++keys;
 walletaddress[data] = msg.sender;
 keyarray.push(data);
 getData();
    }

    function getData() public view returns(uint) {

        return value;
        
    }
    
    function getWalletCount() public view returns(uint) {
   return keyarray.length;
    //   return keys;    
    }
}