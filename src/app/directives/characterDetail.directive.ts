import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCharacterDetail]',
})
export class CharacterDetailDirective {
  constructor(public ViewContainerRef: ViewContainerRef) {}
}
