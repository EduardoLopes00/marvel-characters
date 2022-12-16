import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() filterClick = new EventEmitter();

  filtersForm: FormGroup;

  constructor() {
    this.filtersForm = new FormGroup({
      name: new FormControl(''),
      nameStartsWith: new FormControl(''),
    });
  }

  ngOnInit() {}

  handleFilterClick() {
    this.filterClick.emit(this.filtersForm.value);
  }
}
