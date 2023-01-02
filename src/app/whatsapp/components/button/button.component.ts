import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit { 

  newPhone: string = '';
  newMessage: string = '';
  newImage: string = '';
  requestResponse: string = '';

  constructor(private susService: SuscribeService, private sendWhatsapp: DataService, private renderer2 : Renderer2) { }

  ngOnInit(): void {
    this.susService.phone$.subscribe(phone => {
      this.newPhone = phone;
    })
    this.susService.messageToSend.subscribe(message => {
      this.requestResponse = ''
      this.newMessage = message.mensaje;
      if(message.hasOwnProperty('img')){
        this.newImage = message.img
      }else{
        this.newImage = '';
      }
    })

  }

  sendMessage() {
    this.sendWhatsapp.SendWaNotif(this.newMessage, this.newPhone, this.newImage).then((res)=>{
      if(res){
        this.requestResponse = 'El mensaje fue enviado\ncon exito';
      }else{
        this.requestResponse = 'El mensaje no pudo\nser enviado';
      }
    });
  }
}
