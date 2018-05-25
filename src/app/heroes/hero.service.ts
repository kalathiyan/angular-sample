import { Injectable } from '@angular/core';
import { Hero } from './hero.classes';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService:MessageService) { }
  getHeroes():Observable<Hero[]> {
    this.messageService.add("HeroService: Fetched Heroes");
    return  of(Heroes);
  }
}
