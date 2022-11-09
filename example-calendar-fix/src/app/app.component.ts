import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  semana: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  festiuNacional:string = "rgb(0, 128, 0)";
  festiuRegional:string = "rgb(128, 0, 128)";
  festiuLocal:string = "rgb(199, 21, 133)";
  festiuCentre:string = "rgb(255, 255, 0)";


 
  seleccionarMes: any[];
  seleccionarMes2: any[];
  seleccionarDia: any;
  seleccionarDia2: any;

  ngOnInit(): void {
    this.getDaysFromDate(9, 2022)
    this.getDaysFromDate2(10,2022)
  }
  
  getDaysFromDate(month, year) {

    const startDate = moment.utc(`${year}/${month}/01`) 
    const endDate = startDate.clone().endOf('month') 
    this.seleccionarDia = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.seleccionarMes = arrayDays;
  }

  getDaysFromDate2(month2, year2) {
    const startDate2 = moment.utc(`${year2}/${month2}/01`)
    const endDate2 = startDate2.clone().endOf('month')
    this.seleccionarDia2 = startDate2;

    const diffDays2 = endDate2.diff(startDate2, 'days', true)
    const numberDays2 = Math.round(diffDays2);

    const arrayDays2 = Object.keys([...Array(numberDays2)]).map((b: any) => {
      b = parseInt(b) + 1;
      const dayObject2 = moment(`${year2}-${month2}-${b}`);
      return {
        name: dayObject2.format("dddd"),
        value2: b,
        indexWeek2: dayObject2.isoWeekday()
      };
    });

    this.seleccionarMes2 = arrayDays2;
  }

}
