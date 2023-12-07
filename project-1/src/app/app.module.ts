import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { CategoryComponent } from './components/category/category.component';
import { GucciComponent } from './examples/gucci/gucci.component';
import { LVComponent } from './examples/lv/lv.component';
import { DiorComponent } from './examples/dior/dior.component';
import { ChanlComponent } from './examples/chanl/chanl.component';
import { BalenciagaComponent } from './examples/balenciaga/balenciaga.component';
import { DolcegabanaComponent } from './examples/dolcegabana/dolcegabana.component';
import { ChromeheartsComponent } from './examples/chromehearts/chromehearts.component';
import { PradaComponent } from './examples/prada/prada.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './cart/cart.component';
import { CompareComponent } from './compare/compare.component';


@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
    FooterComponent,
    CategoryComponent,
    GucciComponent,
    LVComponent,
    DiorComponent,
    ChanlComponent,
    BalenciagaComponent,
    DolcegabanaComponent,
    ChromeheartsComponent,
    PradaComponent,
    LoginComponent,
    CartComponent,
    CompareComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
