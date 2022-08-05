import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicios/service.service';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent implements OnInit {
  datosPersona:any;
  constructor(private data:ServiceService) { }

  ngOnInit(): void {
    this.data.getJson("http://localhost:8080/verPersona/1").subscribe(data=>{this.datosPersona=data})
  }

}
