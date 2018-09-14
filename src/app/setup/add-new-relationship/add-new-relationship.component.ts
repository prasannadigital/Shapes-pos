import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-relationship',
  templateUrl: './add-new-relationship.component.html',
  styleUrls: ['./add-new-relationship.component.css']
})
export class AddNewRelationshipComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
