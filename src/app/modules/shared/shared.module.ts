import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from 'src/app/core/material.module';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    DialogComponent
  ]
})
export class SharedModule { }
