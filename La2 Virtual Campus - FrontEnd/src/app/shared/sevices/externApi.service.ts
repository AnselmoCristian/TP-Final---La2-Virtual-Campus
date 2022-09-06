import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs'
import { CharactersResponse, Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ExternApiService {

  constructor(private _http: HttpClient) {
    console.log('ExternApi Services');
  }

  API_URI = 'https://rickandmortyapi.com/api/';

  getExternApi() {
    return this._http.get( `${this.API_URI}/character/` ).pipe(
      
      // Hacer console.log() del response
      /*tap((response: any) => {
        console.log(response);
      }), */

      // Separar con map y meter en variable, si response true   
      map((response: any) => {
        const characters:Character[] = []        

        if(response.results) {
          response.results.map((characterItem: any) => {
            const character: Character = {
              image: characterItem.image,
            };
            characters.push(character);
          });
        }

        const charactersResponse: CharactersResponse = {
          characters: characters,
        };
        
        return charactersResponse;
      })
    );
  }  
}