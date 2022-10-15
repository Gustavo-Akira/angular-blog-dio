import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'post/:id',component:ContentComponent,},
      {path: 'new', component: FormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }