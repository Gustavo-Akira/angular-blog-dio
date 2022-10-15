import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data/data';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas: Data[] = [];
  principal!: Data;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.datas = this.dataService.getAll();
    this.principal = this.datas.filter(x=>x.grand)[0];
    this.datas = this.datas.filter(x=>!x.grand);
  }

}
