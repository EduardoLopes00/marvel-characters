import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {
  constructor(private toastr: ToastrService) {}

  success(message: string, title: string = 'Success!') {
    this.toastr.success(message, title);
  }

  error(message: string, title: string = 'Error!') {
    this.toastr.error(message, title);
  }
}
