import { FormComponent } from './form/form.component';

import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { AppComponent } from './app.component';

import { BlockComponent } from './block/block.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'block',
    component: BlockComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
