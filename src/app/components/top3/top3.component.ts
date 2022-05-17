import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from 'src/app/services/submit.service';

@Component({
  selector: 'app-top3',
  templateUrl: './top3.component.html',
  styleUrls: ['./top3.component.css']
})
export class Top3Component implements OnInit {

  top3 = Array<Object>();

  constructor( private readonly submissionService: SubmissionsService) {
  }

  ngOnInit(): void {
    this.getTop3Rows();
  }

  getTop3Rows() {
    this.submissionService.getTop3Rows().subscribe((val) => {
      console.log(val);
      this.top3.push(val);
      console.log("degerini datatablea yazmak!");
    });
  }

}
