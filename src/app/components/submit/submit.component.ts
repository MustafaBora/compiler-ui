import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface Language {
  name: string,
  code: string
}

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  public autoResize: boolean = true;
  
  languages: Language[];

  submitForm = this.fb.group({
    name:[null, Validators.required],
    code:[null, Validators.required],
    language: [null],
  });
  submitCode() {

  }
  constructor(private readonly fb: FormBuilder, ) {
    this.languages = [
      {name: 'Java', code: 'NY'},
      {name: 'C#', code: 'RM'},
      {name: 'Javascript', code: 'LDN'},
      {name: 'C++', code: 'IST'},
      {name: 'C', code: 'PRS'}
  ];

  }

  ngOnInit(): void {
  }

}
