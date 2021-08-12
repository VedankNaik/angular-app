import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
