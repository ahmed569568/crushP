import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  games = [
    {
      id: '1',
      name: 'car',
      gender: 'first',
    },
    {
      id: '2',
      name: 'bus',
      gender: 'second',
    },
    {
      id: '3',
      name: 'plan',
      gender: 'thee',
    },
    {
      id: '4',
      name: 'land',
      gender: 'four',
    },
  ];
  cars = [
    {
      id: '1',
      name: 'opera',
      gender: 'first',
    },
    {
      id: '2',
      name: 'toyota',
      gender: 'second',
    },
    {
      id: '3',
      name: 'nisan',
      gender: 'thee',
    },
    {
      id: '4',
      name: 'jeep',
      gender: 'four',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
