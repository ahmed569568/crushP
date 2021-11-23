import { Subject, BehaviorSubject } from 'rxjs';
import { Posts } from './../interface/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  currentPage: string = '';
  currentPage$: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentPage);
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<Posts[]>(this.url);
  }
  getPost(id: number) {
    return this.http.get<Posts[]>(`${this.url}/${id}`);
  }
  setCurrentPage(currentPage: string) {
    this.currentPage = currentPage;
    this.currentPage$.next(this.currentPage);
  }
}
