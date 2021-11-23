import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  myNums = [1, 2, 3, 4, 5];
  myName = 'AboEleZz';
  myFriends = ['ahmed', 'ali', 'esa', 'hamza'];
  myBooks = ['one', '@', 'two', '@'];
  testV: boolean = false;
  constructor() {}

  ngOnInit(): void {
    let myDiv = document.createElement('div');
    console.log(myDiv);

    ////
    let allList = document.querySelectorAll('ul li');
    allList.forEach((res) => {
      // console.log(res);
    });
    ////
    let book = this.myBooks
      .filter((res) => {
        return res != '@';
      })
      .join(' ');
    // console.log(book);

    //////
    let friend = this.myFriends.filter((res) => {
      return res.startsWith('a');
    });
    // console.log(friend);

    ///
    let name = this.myName
      .split('')
      .map((res) => {
        return res === res.toUpperCase() ? res.toLowerCase() : res.toLowerCase();
      })
      .join('');
    // console.log(name);

    ////
    let num = this.myNums.filter((res) => {
      return res % 2 === 0;
    });
    // console.log(num);
  }
  test() {
    let test = document.querySelector('.button');
    test.classList.toggle('my-style');
  }
}
