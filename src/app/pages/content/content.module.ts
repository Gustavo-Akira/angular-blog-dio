import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [ContentComponent, FormComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],

})
export class ContentModule { }
