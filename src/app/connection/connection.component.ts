import { Component, OnInit } from '@angular/core';
import { P2pService } from '../_services/p2p.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {
  address = '';
  port = "5667";
  password = '';
  popup = false;
  mySocket: any;

  constructor(private p2p: P2pService) {}

  ngOnInit() {
    this.mySocket = this.p2p.setupSocket("127.0.0.1", "5667", "");
  }

  addressUpdate(value: string) {
    this.address = value;
  }

  portUpdate(value: string) {
    this.port = value;
  }

  passwordUpdate(value: string) { 
    this.password = value;
  }

  togglePopUp() {
    this.popup = !this.popup;
  }

  connect() {
    if (this.address && this.port && this.password) {
      this.p2p.setupSocket(this.address, this.port, this.password);
    }
  }
}
