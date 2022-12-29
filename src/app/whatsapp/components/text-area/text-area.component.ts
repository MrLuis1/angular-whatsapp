import { Component, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})

export class TextAreaComponent {
  @ViewChild('textArea') message!: ElementRef<string>;

  promos: any = []
  messageName: string = '';
  messageBody: string = '';

  constructor( private promo: DataService){ }

  ngOnInit() {
   this.promos = this.promo.getPromo()
   console.log(this.promos)
  }
}
