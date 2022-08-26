import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {NotificationService} from '../shared/services/generic/notification.service';
const routes: Routes = [
  { path: '', component: ContactComponent },
];

@NgModule({
  providers: [NotificationService],
  declarations: [ContactComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule, MatInputModule, MatButtonModule

  ],
  entryComponents: []
})
export class ContactModule { }
