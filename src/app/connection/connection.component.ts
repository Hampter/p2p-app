import { Component } from '@angular/core';

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
}
