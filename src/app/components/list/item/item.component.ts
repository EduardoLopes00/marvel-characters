import { CharacterDetailComponent } from './../../character-detail/character-detail.component';
import { FavoriteListService } from './../../../services/favorite-list.service';
import { Character } from 'src/app/models/marvelapi.model';
import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { CharacterDetailDirective } from 'src/app/directives/characterDetail.directive';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() character: Character = {} as Character;
  @Output() characterClick = new EventEmitter();

  constructor(
    private favoriteListService: FavoriteListService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  handleFavoriteClick() {
    const stringCharcterId = this.character.id.toString();

    try {
      if (this.character.isFavorite) {
        this.favoriteListService.removeFromFavoriteList(stringCharcterId);
      } else {
        this.favoriteListService.addToFavoriteList(stringCharcterId);
      }

      this.character.isFavorite = !this.character.isFavorite;
    } catch (message) {
      this.toastService.error(message as string, 'Error on add to favorite!');
    }
  }
}
