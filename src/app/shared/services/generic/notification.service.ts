import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {NotificationsComponent} from '../../components/notifications/notifications.component';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable()
export class NotificationService {

  constructor(private dialog: MatDialog) { }

  dialogRef;

  public open(options) {
    this.dialogRef = this.dialog.open(NotificationsComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      }
    });
  }
  public confirmed(): Observable<any> {

    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }

  // public success(title: string, text?: string, extraOptions?: object): void {
  //
  //   let options = {
  //     position: 'center',
  //     type: 'success',
  //     title,
  //     text: text ? text : '',
  //     confirmButtonText: 'אישור',
  //     timer: 2500
  //   };
  //
  //   if (extraOptions) {
  //     options = Object.assign(options, extraOptions);
  //   }
  //   swal.fire(options);
  // }
  //
  // public error(text?: string, title?: string, extraOptions?: object): void {
  //   let options = {
  //     type: 'error',
  //     title: title ? title : 'אירעה שגיאה',
  //     text,
  //     confirmButtonText: 'סגור'
  //   };
  //
  //   if (extraOptions) {
  //     options = Object.assign(options, extraOptions);
  //   }
  //
  //   swal.fire(options);
  // }
  //
  // public warning(title: string, text?: string, extraOptions?: object): Promise<any> {
  //   let options = {
  //     title,
  //     text: text ? text : '',
  //     type: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'אישור',
  //     cancelButtonText: 'ביטול'
  //   };
  //
  //   if (extraOptions) {
  //     options = Object.assign(options, extraOptions);
  //   }
  //
  //   return swal.fire(options);
  // }
  //
  // public info(title: string, text?: string, extraOptions?: object): Promise<any> {
  //   let options = {
  //     title,
  //     text: text ? text : '',
  //     type: 'info',
  //     showCancelButton: true,
  //     confirmButtonText: 'אישור',
  //     cancelButtonText: 'ביטול'
  //   };
  //
  //   if (extraOptions) {
  //     options = Object.assign(options, extraOptions);
  //   }
  //
  //   return swal.fire(options);
  // }
  //
  // public serverError(): void {
  //   return this.error('שגיאת שרת, נסה שנית או צור קשר.');
  // }

}
