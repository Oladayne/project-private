import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { GucciComponent} from './examples/gucci/gucci.component';
import { LVComponent } from './examples/lv/lv.component';
import { DiorComponent } from './examples/dior/dior.component';
import { ChanlComponent } from './examples/chanl/chanl.component';
import { BalenciagaComponent } from './examples/balenciaga/balenciaga.component';
import { DolcegabanaComponent } from './examples/dolcegabana/dolcegabana.component';
import { ChromeheartsComponent } from './examples/chromehearts/chromehearts.component';
import { PradaComponent } from './examples/prada/prada.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './cart/cart.component';
import { CompareComponent } from './compare/compare.component';
import { ThemsuaxoaComponent } from './components/themsuaxoa/themsuaxoa.component';








const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
  
    { path: 'gucci',            component: GucciComponent},
    { path: 'lv',               component: LVComponent},
    { path: 'dior',             component: DiorComponent},
    { path: 'chanl',            component: ChanlComponent},
    { path: 'balenciaga',       component: BalenciagaComponent},
    { path: 'dolcegabana',      component: DolcegabanaComponent},
    { path: 'chromehearts',     component: ChromeheartsComponent},
    { path: 'prada',            component: PradaComponent},
    { path: 'search',           component: SearchComponent},
    { path: 'detail',           component: DetailComponent},
    { path: 'category',         component: CategoryComponent},
    { path: 'login',            component: LoginComponent},
    { path: 'cart',             component: CartComponent},
    { path: 'compare',          component: CompareComponent},
    { path: 'themsuaxoa',       component: ThemsuaxoaComponent},







];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
