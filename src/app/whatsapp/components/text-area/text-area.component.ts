import { Component } from '@angular/core';
import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})

export class TextAreaComponent {
  
  descriptionMessage: string = '';
  messageTitle: string = '';
  messageName: string = '';
  promoExist: boolean = false;
  promoImg: string = '';

  constructor( private susService: SuscribeService ){ }

  ngOnInit() {

    this.susService.messageToSend.subscribe(message => {

      // console.log(message)

      this.messageTitle = message.name;
      this.messageName = message.mensaje;
      if(message.hasOwnProperty('img')){
        this.promoImg = message.img;
        this.descriptionMessage = message.description
        this.promoExist = true;
      }else{
        this.promoExist = false
      }
    })

  }
}
