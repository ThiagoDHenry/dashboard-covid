import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/pr`;
  }

  obterDados() {
    return firstValueFrom(this.http.get(`${this.apiUrl}`)).then(
      (response) => response
    );
  }
}
