import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/messages.model';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
 
  constructor(private messageService : MessageService) { }
  messages : Message[];
//  displayedColumns: string[] = ['name', 'Medical concern', 'Consultation type', 'Phone'];
displayedColumns: string[] = ['name','medical_concern','consultation_type','phone'];

  ngOnInit(): void {
    this.messageService.getAppoinment().subscribe(
      res=>{
        this.messages=res;
      }
    )
  }

}
