import { Character } from 'src/app/models/marvelapi.model';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { CharacterDetailDirective } from 'src/app/directives/characterDetail.directive';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  loading: boolean = true;
  @Input() characters: Character[] = [] as Character[];
  @ViewChild(CharacterDetailDirective, { static: true })
  characterDetail!: CharacterDetailDirective;

  ngOnInit() {}

  showCharacterDetail(character: Character) {
    this.characterDetail.ViewContainerRef.clear();
    const componentRef = this.characterDetail.ViewContainerRef.createComponent(
      CharacterDetailComponent
    );
    componentRef.instance.character = character;
    componentRef.instance.onClose.subscribe(() => {
      this.characterDetail.ViewContainerRef.clear();
    });
  }
}
