import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuscribeService {

  phone$ = new EventEmitter<string>();
  messageToSend = new EventEmitter<any>();

  constructor() { }
}
