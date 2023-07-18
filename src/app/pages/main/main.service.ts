import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";




@Injectable({
    providedIn: 'root'
})
export class MainService {
    constructor(
        private httpClient: HttpClient,
    ) { }

    url= 'http://localhost:3000/sendmail';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    sendEmail(mfg:FormGroup): Observable<any> {
              return this.httpClient.post<any>(`${this.url}`, JSON.stringify(mfg.value),this.httpOptions)
    
        }
}