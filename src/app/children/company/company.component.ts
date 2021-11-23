import { PostsService } from './../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    const currentUrl = this.router.url.split('/');
    const currentPage = currentUrl[currentUrl.length - 1];
    this.postsService.setCurrentPage(currentPage);
  }
}
