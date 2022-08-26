import {Component, OnInit, Inject, HostListener} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  message: string;
  type: string;
  constructor(@Inject(MAT_DIALOG_DATA)  public data: {
                cancelText: string,
                confirmText: string,
                message: string,
                title: string
              },
              private dialogRef: MatDialogRef<NotificationsComponent>) {
  }

  ngOnInit() {
  }
  public cancel() {
    this.close(false);
  }
  public close(value) {
    this.dialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
  @HostListener('keydown.esc')
  public onEsc() {
    this.close(false);
  }
}
