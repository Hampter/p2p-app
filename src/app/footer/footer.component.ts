import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private httpClient: HttpClient) {}

  ipAddress = '';

  ngOnInit() {
    this.getIpAddress();
  }

  getIpAddress() {
    this.httpClient.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
    });
  }
}
