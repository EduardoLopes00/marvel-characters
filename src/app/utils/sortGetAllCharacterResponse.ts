import { Character } from '../models/marvelapi.model';

export const sortCharactersByIsFavorite = (characters: Character[]) => {
  return characters.sort((a, b) => {
    if (a.isFavorite && !b.isFavorite) return -1;
    if (!a.isFavorite && b.isFavorite) return 1;

    return 0;
  });
};
