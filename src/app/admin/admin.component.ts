import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  links = [
    {url: '/admin/orders', name: 'הזמנות'},
    // {url: 'categories', name: 'categories' },
    {url: '/admin/products', name: 'מוצרים'  },
    {url: '/admin/users', name: 'משתמשים'}

  ];
  constructor() { }

  ngOnInit() {
  }

}
