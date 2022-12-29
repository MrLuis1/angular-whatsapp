import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators'
import { EventEmitter } from '@angular/core'
import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  value: any;

  constructor( private route: ActivatedRoute, private susService: SuscribeService ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(filter((param) => param['number'])).subscribe((res) => {
      console.log('res :>> ', res);
      if (res['number']) {
        this.value = `${res['number']}`;
        this.susService.phone$.emit(this.value)
      }
    });
  }

}
