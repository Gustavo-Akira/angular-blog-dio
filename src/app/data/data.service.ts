import { Injectable } from '@angular/core';
import { Data } from './data';
import { dataFake } from './dataFake';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data[] = dataFake;
  constructor() { }

  add(newData: Data): void{
    newData.id = this.data.length+1;
    this.data.push(newData);
  }

  getAll(): Data[]{
    return this.data;
  }
}
