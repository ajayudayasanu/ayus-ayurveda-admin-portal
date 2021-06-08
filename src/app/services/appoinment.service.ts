import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Message } from '../models/messages.model';
@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  constructor(private db: AngularFireDatabase) { }
  
  // getAppoinment():Observable<Message[]>{
  //  return this.db.list<Message>('/messages').valueChanges();
  // }

}
