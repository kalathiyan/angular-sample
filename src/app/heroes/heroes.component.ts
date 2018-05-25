import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.classes';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Array<Hero>;
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((response) => {
      this.heroes = response;
    });
  }

  onSelect(heroDetail: Hero) {
    this.selectedHero = heroDetail;
  }

}
