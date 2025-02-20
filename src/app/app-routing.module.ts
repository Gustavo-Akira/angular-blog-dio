import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content',
    loadChildren: ()=>import('./pages/content/content.module').then(m=> m.ContentModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
