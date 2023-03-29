import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class P2pService {

  constructor(private http: HttpClient) {}

  peer: any;
  connection: any;
  password: string | undefined;
  upload$: Observable<any> | undefined;
  download$ : Observable<any> | undefined;
  socket: any;

  sendFile(file: File, ip: string, port: string, password: string) {
    this.setupSocket(ip, port, password);
  }
  
  recieveFile(port: string) {
    // this.download$ = this.http.get(`127.0.0.1:${{port}}`);
    this.download$ = this.http.get("127.0.0.1:"  + port);
    return this.download$;
  }

  setupSocket(ip: string, port: string, password: string) {
    this.password = password;
    this.socket = io("http://" + ip + ":" + port + "/");
    return this.socket;
  }

  closeSocket() {
    this.socket.disconnect();
  }
}
