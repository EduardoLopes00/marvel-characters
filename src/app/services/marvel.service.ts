import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MarvelApiResponse, Character } from '../models/marvelapi.model';
import { environment } from '../environment/environment';
import { getIsFavorite } from '../utils/getIsFavorite';
import { FormFieldsName, FormFiltersFields } from '../models/formFilters.model';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  getCharacters(filters?: FormFiltersFields): Observable<Character[]> {
    let options = new HttpParams().set('apikey', environment.MARVEL_PUBLIC_KEY);

    if (filters) {
      console.log('fqiosjiqofjqiow');

      Object.keys(filters).forEach((item) => {
        const filterName: FormFieldsName = item as FormFieldsName;

        const filterValue = filters[filterName];

        if (filterValue != '') {
          options = options.set(filterName, filterValue);
        }
      });
    }

    console.log(options);

    return this.http
      .get<MarvelApiResponse>(environment.MARVEL_API_URL, { params: options })
      .pipe(
        map((data: MarvelApiResponse) => {
          return data.data.results.map((character) => {
            return { ...character, isFavorite: getIsFavorite(character.id) };
          }) as Character[];
        })
      );
  }
}
