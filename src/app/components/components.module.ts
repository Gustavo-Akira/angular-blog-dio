import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { BigCardComponent } from './big-card/big-card.component';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentModule } from '../pages/content/content.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    InputComponent
  ]
})
export class ComponentsModule { }
