import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  links = [
    {url: '/home', name: 'בית'},
    {url: '/shop', name: 'חנות' },
    {url: '/about', name: 'אודות'  },
    {url: '/contact', name: 'צור קשר'}

  ];
  constructor() { }

  ngOnInit() {
  }

}
