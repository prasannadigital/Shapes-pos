import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-add-packages',
  templateUrl: './add-packages.component.html',
  styleUrls: ['./add-packages.component.css']
})
export class AddPackagesComponent implements OnInit {
  packs: SelectItem[];
  selectedPack: string[] = [];

  constructor(private router: Router) {
     this.packs = [
            {label: 'Audi', value: 'Audi' },
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];
    }
   

  ngOnInit() {
  }
  
  backToMembership() {
    this.router.navigate(['management']);
  }

}
