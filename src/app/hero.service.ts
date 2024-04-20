import { Injectable } from '@angular/core';
import { Hero } from './Models/hero';
import { HEROES } from './Models/mock-heroes';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
