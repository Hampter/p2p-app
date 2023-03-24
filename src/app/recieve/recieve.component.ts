import { Component } from '@angular/core';
import { P2pService } from '../_services/p2p.service';


@Component({
  selector: 'app-recieve',
  templateUrl: './recieve.component.html',
  styleUrls: ['./recieve.component.scss']
})
export class RecieveComponent {
  port = '';

  constructor(private p2p: P2pService) {}

  portUpdate(value: string) {
    this.port = value;
  }

  recieveFile() {
    if (this.port) {
      const download$ = this.p2p.recieveFile(this.port);
      download$.subscribe((e) => {
        console.log(e);
      })
    }
  }
}
