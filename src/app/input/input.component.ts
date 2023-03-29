import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { P2pService } from '../_services/p2p.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {
  address = '';
  port = "5667";
  password = '';
  fileName = '';
  file: File | undefined;

  constructor(private p2p: P2pService, private http: HttpClient) {}

  addressUpdate(value: string) {
    this.address = value;
  }

  portUpdate(value: string) {
    this.port = value;
  }

  passwordUpdate(value: string) { 
    this.password = value;
  }

  fileAttached(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
      this.fileName = event.target.files[0].name;
    }
    // file = {
    //   lastModified
    //   lastModifiedDate
    //   name
    //   path
    //   size
    //   type
    //   webkitRelativePath
    // }
  }

  sendFile() {
    if (this.address && this.port && this.file) {
      this.p2p.sendFile(this.file, this.address, this.port, "");
    }
  }
}
