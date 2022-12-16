export const getIsFavorite = (characterId: number) => {
  const favoriteList = localStorage.getItem('favoriteList')?.split(',');

  if (!favoriteList) return false;

  return favoriteList?.includes(characterId.toString());
};
