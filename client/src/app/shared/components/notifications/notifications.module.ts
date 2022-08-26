import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {NotificationService} from '../../services/generic/notification.service';



@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [NotificationsComponent],
  // entryComponents: [NotificationsComponent],
  // providers: [NotificationService]
})
export class NotificationsModule { }
