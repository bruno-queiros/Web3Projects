import { Component, OnInit } from '@angular/core';
import { UseMetaMaskService } from '../services/useMetaMask.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public value = 0;

  constructor(private useMetaMask: UseMetaMaskService ) { }

  ngOnInit(): void {
  }

  public connectWallet(){
    this.useMetaMask.connectMetaMask().then(res => {
      console.log(res);
    }).catch((error: any)=>{
      console.error(error);
    });
  }

}
