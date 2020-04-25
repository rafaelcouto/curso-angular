import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  uniqueId: string = '_' + Math.random().toString(36).substr(2, 9);

  constructor() { }

  log(message) {
    console.log(this.uniqueId + ':' + message);
  }
}
