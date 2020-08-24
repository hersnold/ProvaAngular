import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    PricingComponent,
    BlockComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
