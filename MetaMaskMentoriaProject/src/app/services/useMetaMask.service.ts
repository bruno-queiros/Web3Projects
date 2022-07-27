import { Injectable } from '@angular/core';
import { WinRefService } from './winref.service';

@Injectable({
  providedIn: 'root'
})
export class UseMetaMaskService {

  private web3: any;
  private ethereum: any;

  public balance: any;

  constructor(public winRef: WinRefService) { 
    this.ethereum = winRef.window.ethereum;
  }

  public isMetaMaskInstalled(){
    return this.ethereum && this.ethereum.isMetaMask;
  }

  public async connectMetaMask(){
    if(!this.isMetaMaskInstalled()){
      alert("You need install MetaMask");
    }
    try{
      const accountsData = await this.ethereum.request({
        method: "eth_requestAccounts"
      });
      console.log(accountsData);
    }catch(error){
      console.log(error);
    }
  }

  public async accountInfo(account: any[]){
     const initialvalue = await this.web3.eth.getBalance(account);
     this.balance = this.web3.utils.fromWei(initialvalue , 'ether');
     return this.balance;
  }
}
