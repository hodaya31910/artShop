import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class HelpersService {
  pageSpinnerSubject: Subject<boolean> = new Subject();
  lastUrlSubject: Subject<string> = new Subject();

  setPageSpinner(isShown: boolean): void {
    setTimeout(() => this.pageSpinnerSubject.next(isShown), 0);
  }

  viewFile(file: Blob): boolean {
    if (this.detectIE()) {
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(file);
      }
    } else {
      const url = window.URL.createObjectURL(file);
      const win = window.open(url);
      if (win) {
        win.focus();
        return true;
      } else {
        return false;
      }
    }
  }
  printFile(file: Blob): void {
    if (this.detectIE()) {
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(file);
      }
    } else {
      const url = window.URL.createObjectURL(file);
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = url;
      document.body.appendChild(iframe);
      iframe.contentWindow.print();
    }
  }
  detectIE(): boolean {
    const ua = window.navigator.userAgent;
    const browsers = ['MSIE ', 'Trident/', 'Edge/'];

    for (let i = 0; i < browsers.length; i++) {
      if (ua.indexOf(browsers[i]) !== -1) {
        return true;
      }
    }

    return false;
  }
}
