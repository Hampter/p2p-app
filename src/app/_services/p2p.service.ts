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

  sendFile(file: File, ip: string, port: string) {
    this.upload$ = this.http.post(`${{ip}}:${{port}}`, {
      "file": file
    })
  }
}
