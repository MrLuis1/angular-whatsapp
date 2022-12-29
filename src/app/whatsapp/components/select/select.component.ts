import { Component, OnInit } from '@angular/core';
import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  mensajes: any[] = [];
  optionMsj: any;
  selectedMsj: any = '';

  constructor (private susService: SuscribeService) { }

  ngOnInit() {
    this.mensajes = [
      {
        name: 'mensaje 1',
        mensaje: 'este es el mensaje de la primera opcion'
      },
      {
        name: 'mensaje 2',
        mensaje: 'este es el mensaje de la segunda opcion'
      },
      {
        name: 'promos',
        promos: [
          {
            name: 'promo 1',
            mensaje: 'este es el mensaje de la primera promo'
          },
          {
            name: 'promo 2',
            mensaje: 'este es el mensaje de la segunda opcion'
          }
        ]
      }
    ]
  }

  prueba(){
    return new Promise(async(resolve:any, reject:any)=>{
      
      try {
        if(this.optionMsj.mensaje != undefined){
          this.selectedMsj = this.optionMsj.mensaje
          console.log(this.selectedMsj)

          this.susService.messageToSend.emit(this.selectedMsj)
        }
        resolve(this.selectedMsj)
      } catch (error) {
        reject(error)
      }

    })
  }

  
}
