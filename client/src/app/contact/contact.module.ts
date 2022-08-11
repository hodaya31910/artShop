import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NotificationService} from '../shared/services/generic/notification.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {NotificationsComponent} from '../shared/components/notifications/notifications.component';
const routes: Routes = [
  { path: '', component: ContactComponent },
];

@NgModule({
  providers: [NotificationService],
  declarations: [ContactComponent, NotificationsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogModule

  ],
  entryComponents: [NotificationsComponent]
})
export class ContactModule { }
