import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  saveData() {
    const listofPosts: Post[] = this.postService.getPosts();
    this.http
      .put(
        'https://postsapp-978c0-default-rtdb.firebaseio.com/post.json',
        listofPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchData() {
    this.http
      .get<Post[]>(
        'https://postsapp-978c0-default-rtdb.firebaseio.com/post.json'
      )
      .pipe(
        tap((listofPosts: Post[]) => {
          console.log(listofPosts);
          this.postService.setPost(listofPosts);
        })
      )
      .subscribe();
  }
}
