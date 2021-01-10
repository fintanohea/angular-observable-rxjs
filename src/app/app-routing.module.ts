import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { FormcopmComponent } from './formcopm/formcopm.component';

const routes: Routes = [
  {
    path: 'acomp',
    component: AcompComponent,
    data: { title: 'Component A' }
  },
  {
    path: 'bcomp',
    component: BcompComponent,
    data: { title: 'Component B' }
  },
  {
    path: 'formcomp',
    component: FormcopmComponent,
    data: { title: 'Form Comp' }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
