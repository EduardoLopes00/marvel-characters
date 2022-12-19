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
  buttonLabel: string = 'Search All';

  constructor() {
    this.filtersForm = new FormGroup({
      name: new FormControl(''),
      nameStartsWith: new FormControl(''),
      offset: new FormControl('1'),
    });
  }

  ngOnInit() {
    this.filtersForm.valueChanges.subscribe((values) => {
      this.buttonLabel = 'Filter';

      if (values.name == '' && values.nameStartsWith == '') {
        this.buttonLabel = 'Search All';
      }
    });
  }

  handleFilterClick() {
    this.filterClick.emit(this.filtersForm.value);
  }
}
