import { Component, OnInit } from '@angular/core';
import { CovidService } from './service/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dashboardcovid';
  dados: any;
  constructor(private covidService: CovidService) {}

  ngOnInit() {
    this.carregarDados();
  }
  carregarDados() {
    this.covidService
      .obterDados()
      .then((obj) => (this.dados = obj))
      .catch((erro) => {
        console.log(erro);
      });
  }
}
