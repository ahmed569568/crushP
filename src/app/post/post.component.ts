import { Posts } from './../interface/posts';
import { PostsService } from './../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, AfterContentChecked {
  itemId: number;
  post: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    public postsService: PostsService,
    private cdref: ChangeDetectorRef
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.itemId = params.id;
    });
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
    this.getPost(this.itemId);
  }

  getPost(id: number) {
    this.postsService.getPost(id).subscribe((res) => {
      this.post = res;
    });
  }
}
