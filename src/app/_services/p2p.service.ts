import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class P2pService {

  constructor(private http: HttpClient) {}

  peer: any;
  connection: any;
  upload$: Observable<any> | undefined;
  download$ : Observable<any> | undefined;

  sendFile(file: File, ip: string, port: string) {
    this.upload$ = this.http.post(`${{ip}}:${{port}}`, {
      "file": file
    })
    return this.upload$;
  }
  
  recieveFile(port: string) {
    // this.download$ = this.http.get(`127.0.0.1:${{port}}`);
    this.download$ = this.http.get("127.0.0.1:" + port);
    return this.download$;
  }
}
