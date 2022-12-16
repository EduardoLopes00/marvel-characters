import { Character } from './models/marvelapi.model';
import { Component, OnInit } from '@angular/core';
import { MarvelService } from './services/marvel.service';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-premiersoft';
  characters: Character[] = [] as Character[];

  constructor(
    private marvelService: MarvelService,
    private scrollDispatcher: ScrollDispatcher
  ) {
    this.scrollDispatcher
      .scrolled()
      .subscribe((x) => console.log('I am scrolling'));
  }

  ngOnInit(): void {
    const container = document.getElementsByClassName('content');

    this.marvelService
      .getCharacters()
      .subscribe((data) => (this.characters = data));
  }

  onScroll(event: any) {}
}
