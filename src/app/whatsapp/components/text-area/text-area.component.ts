import { Component, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})

export class TextAreaComponent {

  messageName: string = '';
  messageBody: string = '';

  constructor( private promo: DataService, private susService: SuscribeService){ }

  ngOnInit() {
   this.susService.messageToSend.subscribe(message => {
    this.messageName = message.name;
    this.messageBody = message.mensaje;
    console.log(this.messageBody);
  })
  }
}
