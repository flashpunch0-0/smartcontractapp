import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import abi from './smartcontract2.json';
function App() { 
  

  const [walletAddress, setWalletAddress] = useState("");
  async function requestAccount() {
    console.log('Requesting account...');

  
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error ');
      }

    } else {
      alert('Meta Mask nahi hai');
    }
  }

  async function getsum() {
   const val = document.getElementById("sumofdigit");
   dataStore(val);
   const totalsum = smartcontract2.getData();
   const walletcount = smartcontract2.getWalletCount();
   
  
  }

  

  return (
   <body>
   {/* <nav class="navbar fixed-top grad4 p-0">
   <div class="container-fluid p-3">
    <h1>OneOBit</h1>
   </div>
 </nav>
 <div class="container-fluid">
  onClick={connectWallet} className='button'>{address}//////// 
 </div> */}
 <div>
        <header>
          <h1>OneOBit </h1>
        </header>
        <section>
          <div className="gameArea"> 
            <div class='row '>
            <button
        
        onClick={requestAccount}
        
        >Request Account</button>
        <h3>Wallet Address: {walletAddress}</h3>
            </div>
            <input type="text" id='sumofdigit' placeholder='enter digit' />
            <button onClick={getsum}></button>
            <input type="text">{totalsum}</input>
            <input type="text">{totalsum}</input>
         

            <button className="btn ">Hit to begin</button>
          </div>
        </section>
      </div>

 
   </body>
  );
}

export default App;
