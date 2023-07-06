import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ReviewService } from '../review/api/review.service';
import { Reviewmodel } from '../review/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewform!: FormGroup;
  data:undefined|Reviewmodel[];

  constructor(private formbuilder: FormBuilder, private api: ReviewService) { }

  ngOnInit(): void {
    this.reviewform = this.formbuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      rating: ['', Validators.required]
      

    })
    this.getreview();
  }

  addreview(data: Reviewmodel) {
    //console.log(data)
    this.api.addreview(data).subscribe((res => {
      this.reviewform.reset();
    }))
    
}

  getreview() {
    this.api.getreview().subscribe(res => {
      this.data = res;
    })
  }
 

}


