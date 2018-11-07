import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatSortModule,
  MatGridListModule,
  MatProgressBarModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
    ],
      
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
    ],
       
})
export class MyOwnCustomMaterialModule { }