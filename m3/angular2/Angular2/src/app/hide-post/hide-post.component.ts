import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../interface/post.interface';
@Component({
  selector: 'app-hide-post',
  templateUrl: './hide-post.component.html',
  styleUrls: ['./hide-post.component.scss']
})
export class HidePostComponent implements OnInit {

  constructor(private ps: PostService) {
    this.ps.getPosts().then(x) => {
      console.log(x);
      for (let i = 0; i < x.length; i++) {
        if (x[i].active == true) {

        }

      }
    }
   }

  ngOnInit(): void {
  }

}
