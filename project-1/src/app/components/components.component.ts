import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Brands } from 'app/model/brands';
import { BrandService } from 'app/service/brand.service';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    index = ["id", "brandName", "routeLink", "image", "ownerImage", "linkOwner", "ownerName"];
    listBrands : Brands[] = [];

    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer2, public httpClient : HttpClient, private brandService : BrandService) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
        this.getBrands();
    }

    getBrands(): void {
        this.brandService.getBrands().subscribe(
            (data) => {
              this.listBrands = data;
            },
            (error) => {
                console.log(error);
            }
        )
    }
    onProuly() {
   
        if  (confirm){
          alert('Your massage has been sent');
        }
      }
      onNormalt(){
        if (confirm('We will improve service quality')){
         sessionStorage.clear()
        }
    }
    onUnsatisfied(){
        if (confirm('What makes you unsatisfied? Please give us feedback by email below ')){
         sessionStorage.clear()
        }
    }
}
