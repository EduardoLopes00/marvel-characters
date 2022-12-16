import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FiltersComponent } from './components/filters/filters.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/list/item/item.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    ListComponent,
    ItemComponent,
    FavoritesComponent,
    CharactersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
