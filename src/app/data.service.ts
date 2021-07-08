import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }
  public getCourses() {
    return this.http.get(this.dataUrl);
  }
}
