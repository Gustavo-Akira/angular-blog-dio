import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import {Data} from '../../../data/data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  dataForm = new FormGroup({
    title: new FormControl('',[
      Validators.required,
      Validators.minLength(7),
    ]),
    description: new FormControl('',[
      Validators.required,
      Validators.minLength(7),
    ]),
    photoCover: new FormControl('',[
      Validators.required,
      Validators.minLength(7),
    ]),
  });


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let data: Data;
    console.log(this.dataForm.valid);
    if(this.dataForm.valid){
      data = {
        id: 0,
        description:this.dataForm.value.description!,
        photoCover: this.dataForm.value.photoCover!,
        title: this.dataForm.value.title!,
        grand: false
      }
      this.dataService.add(data);
      alert("Post salvo com sucesso");
    }
  }
}
