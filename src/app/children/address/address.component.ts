import { PostsService } from './../../services/posts.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    const currentUrl = this.router.url.split('/');
    const currentPage = currentUrl[currentUrl.length - 1];
    this.postsService.setCurrentPage(currentPage);
  }
}
