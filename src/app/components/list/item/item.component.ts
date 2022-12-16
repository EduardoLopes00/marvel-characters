import { Character } from 'src/app/models/marvelapi.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import {
  addToFavoriteList,
  removeFromFavoriteList,
} from 'src/app/utils/localStorateFavoriteList';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() character: Character = {} as Character;

  ngOnInit() {}

  handleFavoriteClick() {
    if (this.character.isFavorite) {
      removeFromFavoriteList(this.character.id.toString());
    } else {
      addToFavoriteList(this.character.id.toString());
    }

    this.character.isFavorite = !this.character.isFavorite;
  }
}
