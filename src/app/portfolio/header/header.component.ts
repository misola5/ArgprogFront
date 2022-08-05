import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicios/service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataHeader:any;
  constructor(private data:ServiceService) { }

   ngOnInit():void{
    this.data.getJson("http://localhost:8080/verPersona/1").subscribe(data=>this.dataHeader=data)
    
   }

  }












