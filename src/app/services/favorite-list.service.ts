import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { isArrayEmpty } from '../utils/isArrayEmpty';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteListService {
  maxFavorites = 5;

  constructor() {}

  getFavoriteList = (): string[] => {
    return localStorage.getItem('favoriteList')?.split(',') ?? [];
  };

  addToFavoriteList = (characterId: string): void => {
    if (this.hasReachedFavoriteLimit()) {
      throw new Error("You can't add more than 5 favorites");
    }

    const actualFavoriteList = this.getFavoriteList();

    actualFavoriteList.push(characterId);

    localStorage.setItem('favoriteList', actualFavoriteList.toString());
  };

  removeFromFavoriteList = (characterId: string): void => {
    const actualFavoriteList = this.getFavoriteList();
    const newFavoriteList = actualFavoriteList?.filter(
      (value) => value != characterId
    );

    if (isArrayEmpty(newFavoriteList)) {
      localStorage.removeItem('favoriteList');
    } else {
      localStorage.setItem('favoriteList', newFavoriteList.toString());
    }
  };

  private hasReachedFavoriteLimit = () => {
    const actualFavoriteList = this.getFavoriteList();

    return actualFavoriteList.length === this.maxFavorites;
  };
}
