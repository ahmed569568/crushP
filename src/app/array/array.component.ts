import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent implements OnInit {
  p: number = 1;
  searchText: any;
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
    {
      id: '5',
      ' name': 'hoh',
      gender: 'fife',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
