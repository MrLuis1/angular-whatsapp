import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  mensajes: any[] = [];
  selectedMsj: any;
  promos: any;

  constructor ( private susService: SuscribeService, private promo: DataService ) { }

  ngOnInit() {

    this.promo.getPromo()
    .then((result) => {
      this.promos = result  
      this.mensajes = [
        {
          name: 'Zelle',
          mensaje: `ZELLE:\n\npagos3@fibextelecom.net Fibex Telecom LLC`
        },
        {
          name: 'Bank of America',
          mensaje: `BANK OF AMERICA:\n\nCONEX TELECOM LLC\n222 Broadway New York, NY 10038\nACCOUNT #: 898107524154\nSWIFT: BOFAUS3N\nABA: 26009593\nROUTING: 026009593`
        },
        {
          name: 'Fibex Play',
          mensaje: `FibexPlay\n\nDisfruta hoy en todos tus dispositivos, 30 días GRATIS 80\ncanales TV nacionales e internacionales con FibexPlay. Un\nservicio exclusivo para clientes con Internet Fibex\nTelecom. Para acceder, descarga nuestra App\nhttps://app.fibextelecom.net\n\n🎬 Series y películas\n🥅 Deportes\n🛝Infantiles\n🎵 Músicales\n🤩 Variedades\n📚 Culturales y más ...\n\nToma el control también desde https://fibexplay.tv\n🤩 Ingresa email y cédula de identidad de titular del servicio y\nprepárate para vivir una experiencia de contenidos y\nentretenimiento, para tu hogar.`,
        },
        {
          name: 'Cobranza',
          mensaje: `Cobranza\n\nFibex Telecom le informa que su factura Internet\nse encuentra vencida. Evite suspensión del servicio\nreportando su pago por https://app.fibextelecom.net`
        },
        {
          name: 'promos',
          promos: [
            {
              name: this.promos[0].Tipo,
              mensaje: `${this.promos[0].name}`,
              description: `${this.promos[0].description}`,
              img: this.promos[0].img
            },
            {
              name: this.promos[1].Tipo,
              mensaje: `${this.promos[1].name}`,
              description: `${this.promos[1].description}`,
              img: this.promos[1].img
            }
          ]
        }
      ]
    }).catch((err) => {
      /// console.log('err :>> ', err);
    });

  }

  prueba(){
    return new Promise(async(resolve:any, reject:any)=>{
      
      try {
        if(this.selectedMsj.mensaje != undefined){
          this.susService.messageToSend.emit(this.selectedMsj)
        }
        resolve(this.selectedMsj)
      } catch (error) {
        reject(error)
      }

    })
  }

  
}
