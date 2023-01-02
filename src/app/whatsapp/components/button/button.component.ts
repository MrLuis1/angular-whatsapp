import { Component, OnInit } from '@angular/core';
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

  constructor(private susService: SuscribeService, private sendWhatsapp: DataService) { }

  ngOnInit(): void {
    this.susService.phone$.subscribe(phone => {
      this.newPhone = phone;
      console.log(this.newPhone)
    })
    this.susService.messageToSend.subscribe(message => {
      console.log(message);
      this.newMessage = message.mensaje;
      if(message.hasOwnProperty('img')){
        this.newImage = message.img
      }else{
        this.newImage = '';
      }
    })

  }

  sendMessage() {
    this.sendWhatsapp.SendWaNotif(this.newMessage, this.newPhone, this.newImage)
  }
}
