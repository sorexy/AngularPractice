import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './routes';

@NgModule({
  imports: [
      CommonModule,
	  RouterModule.forRoot(routes) //what the fock
  ],
	exports: [ RouterModule ], // what the fock
	declarations: []
})
export class AppRoutingModule { }
