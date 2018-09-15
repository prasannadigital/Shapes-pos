import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectItem} from 'primeng/api';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-packages',
  templateUrl: './add-packages.component.html',
  styleUrls: ['./add-packages.component.css']
})
export class AddPackagesComponent implements OnInit {
  packs:SelectItem[]=[];
  selectedPack: string[] = [];
  serviceData:any;
  constructor(private router: Router,private http: HttpClient) {
     
    }
    ngOnInit() {
      this.http.get(environment.host + 'services').subscribe(data => {
        this.serviceData = data;
     
        console.log(this.serviceData.length);
        for(let i=0;i<this.serviceData.length;i++){
          this.packs.push( {label: this.serviceData[i].service_name, value: this.serviceData[i].service_name })
        }
     });
    }



  backToMembership() {
    this.router.navigate(['management']);
  }

}
