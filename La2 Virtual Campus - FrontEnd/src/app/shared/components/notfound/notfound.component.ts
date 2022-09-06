import { Component } from '@angular/core';
import { ExternApiService } from '../../sevices/externApi.service';
import { Character } from '../../models/character';

@Component({
  selector: 'fte-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {
  charactersResponse!: Character;

  constructor(private _externApi: ExternApiService) {
    
    const valor = this._externApi.getExternApi().subscribe(
      response => {
        this.charactersResponse = response.characters[0];
       }
    );
  }
}
