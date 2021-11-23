import { Posts } from './../interface/posts';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Posts[] = [];
  title: any;
  p: number = 1;
  myError: any = '';
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postsService.getPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (err) => {
        console.log(err.message);
      },
      () => console.log('complete')
    );
  }
  //search function
  Search() {
    if (this.title == '') {
      this.ngOnInit();
    } else {
      this.posts = this.posts.filter((res) => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }
  //sort function
  key: string = 'id';
  reverse: boolean = false;
  Sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
