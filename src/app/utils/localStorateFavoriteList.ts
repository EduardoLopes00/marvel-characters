export const getFavoriteList = (): string[] => {
  return localStorage.getItem('favoriteList')?.split(',') ?? [];
};

export const addToFavoriteList = (characterId: string): void => {
  const actualFavoriteList = getFavoriteList();

  actualFavoriteList.push(characterId);

  console.log(getFavoriteList());

  localStorage.setItem('favoriteList', actualFavoriteList.toString());
};

export const removeFromFavoriteList = (characterId: string): void => {
  const actualFavoriteList = getFavoriteList();
  const newFavoriteList = actualFavoriteList?.filter(
    (value) => value != characterId
  );

  if (newFavoriteList.length > 0) {
    localStorage.setItem('favoriteList', newFavoriteList.toString());
    return;
  }

  localStorage.removeItem('favoriteList');
};
