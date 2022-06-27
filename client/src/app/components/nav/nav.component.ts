import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   links = [
    {url: 'home', name: 'בית'},
    {url: 'shop', name: 'חנות' },
    {url: 'about', name: 'אודות'  },
    {url: 'contact', name: 'צור קשר'}

  ];
  constructor() { }

  ngOnInit() {
  }

}
