import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { TypographyComponent } from './typography/typography.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { SlideComponent} from './slide/slide.component';


import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { DetailComponent } from '../detail/detail.component';
import { SearchComponent } from '../search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app.routing';
import { ThemsuaxoaComponent } from './themsuaxoa/themsuaxoa.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        ComponentsComponent,
        TypographyComponent,
        NotificationComponent,
        SlideComponent,
        DetailComponent,
        SearchComponent,
        NgbdModalComponent,
        NgbdModalContent,
        ThemsuaxoaComponent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
