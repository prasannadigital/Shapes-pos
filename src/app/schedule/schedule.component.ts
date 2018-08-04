import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {}
  showSuccess() {
    this.messageService.add({key: 'tl',severity:'success', summary: 'Success Message', detail:'Order submitted'});
}
  

}
