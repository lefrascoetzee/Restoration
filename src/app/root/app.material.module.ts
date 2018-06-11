import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatInputModule,
      MatCardModule,
      MatFormFieldModule
    ],
      
  exports: [
      MatButtonModule,
       MatCheckboxModule,
       MatInputModule,
       MatCardModule,
       MatFormFieldModule
    ],
       
})
export class MyOwnCustomMaterialModule { }