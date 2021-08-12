import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listofPosts: Post[] = [
    new Post(
      'Title 1',
      'Paragraph 1',
      'https://i.redd.it/0l3w8fhbsrv21.png',
      'Details 1',
      new Date()
    ),
    new Post(
      'Title 2',
      'Paragraph 2',
      'https://i.redd.it/0l3w8fhbsrv21.png',
      'Details 2',
      new Date()
    ),
    new Post(
      'Title 3',
      'Paragraph 3',
      'https://i.redd.it/0l3w8fhbsrv21.png',
      'Details 3',
      new Date()
    ),
  ];

  getPosts() {
      return this.listofPosts;
  }

  addPost(post: Post) {
      this.listofPosts.push(post);
  }

  editPost(index: number, post: Post) {
      this.listofPosts[index] = post;
  }

  deletePost(index: number) {
      this.listofPosts.splice(index, 1);
  }
}
