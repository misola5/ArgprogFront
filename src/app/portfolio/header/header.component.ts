import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicios/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form:FormGroup;
  dataHeader:any;
  constructor(private data:ServiceService, private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      //Con esto le da forma a la informacion que se va a manejar, de acuerdo al modelo del back
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required,Validators.minLength(8)]],
        deviceId:["17867868768"],
        deviceType: ["DEVICE_TYPE_ANDROID"],
        notificationToken:["67657575eececc34"]
    })
  }
    
   ngOnInit():void{

    this.data.getJson("http://localhost:8080/verPersona/1").subscribe(data2=>{
      this.dataHeader=data2
      // console.log ("servicio cabecera")
    })

    }

    //LOGIN
    get Email(){
      return this.form.get('email');
    }
    get Password(){
      return this.form.get('password');
    }


    // VENTANA MODAL
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  }












