import { Component, Input, OnInit } from '@angular/core';
import { ProviderService } from './app.provider';
import { Values } from './utils/app.values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  resultArray: object;
  loaderFlag: Boolean;
  erroFlag: Boolean;
  constructor(public providerService: ProviderService) {
    this.loaderFlag = false;
    this.erroFlag = true;
  }

  ngOnInit() {
    return this.providerService.getData().subscribe((response) => {
      this.loaderFlag = true;
      this.resultArray = JSON.parse(response._body).data.splice(0, 10);
    }, respErr => {
        this.loaderFlag = true;
        this.erroFlag = false;
    });
  }
}
