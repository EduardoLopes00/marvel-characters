import { FavoriteListService } from './../../../services/favorite-list.service';
import { Character } from 'src/app/models/marvelapi.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() character: Character = {} as Character;

  constructor(
    private favoriteListService: FavoriteListService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  handleFavoriteClick() {
    if (this.character.isFavorite) {
      this.favoriteListService.removeFromFavoriteList(
        this.character.id.toString()
      );

      this.character.isFavorite = !this.character.isFavorite;

      return;
    }

    if (this.favoriteListService.hasReachedFavoriteLimit()) {
      this.toastService.error(
        "You can't add more than 5 favorites",
        'Error on add to favorite!'
      );

      return;
    }

    this.favoriteListService.addToFavoriteList(this.character.id.toString());

    this.character.isFavorite = !this.character.isFavorite;
  }
}
