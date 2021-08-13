import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  edit: boolean = false;
  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let title = '';
    let paragraph = '';
    let imgPath = '';
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        paragraph = post.paragraph;
        imgPath = post.imgPath;
        this.edit = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      paragraph: new FormControl(paragraph, [Validators.required]),
      imgPath: new FormControl(imgPath, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.form.value.title;
    const paragraph = this.form.value.paragraph;
    const imgPath = this.form.value.imgPath;

    const post: Post = new Post(
      title,
      paragraph,
      imgPath,
      'details',
      new Date(),
      0
    );

    if (this.edit) {
      this.postService.editPost(this.index, post);
    } else {
      this.postService.addPost(post);
    }
    this.router.navigate(['/post-list']);
  }
}
