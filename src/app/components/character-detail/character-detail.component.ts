import { Character } from './../../models/marvelapi.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character = {} as Character;
  @Output() onClose = new EventEmitter();

  ngOnInit() {
    console.log(this.character);
  }
}
