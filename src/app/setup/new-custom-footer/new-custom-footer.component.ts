import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-custom-footer',
  templateUrl: './new-custom-footer.component.html',
  styleUrls: ['./new-custom-footer.component.css']
})
export class NewCustomFooterComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
