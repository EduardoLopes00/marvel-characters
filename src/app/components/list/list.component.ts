import { Character } from 'src/app/models/marvelapi.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  loading: boolean = true;
  @Input() characters: Character[] = [] as Character[];
  normalCharacters: Character[] = [] as Character[];
  favoriteCharacters: Character[] = [] as Character[];

  ngOnInit() {
    this.normalCharacters = this.characters.filter(
      (character) => character.id < 10
    );
    this.favoriteCharacters = this.characters.filter(
      (character) => character.id > 10
    );
  }
}
