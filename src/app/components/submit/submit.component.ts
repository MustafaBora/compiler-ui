import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Code } from 'src/app/models/code';
import { SubmissionsService } from 'src/app/services/submit.service';

interface Language {
  name: string,
  code: string
}
interface Task {
  name: string,
  explanation: string
}

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  public autoResize: boolean = true;

  languages: Language[];
  tasks: Task[];

  constructor(private readonly fb: FormBuilder, private readonly service: SubmissionsService,
    private messageService: MessageService) {
    this.languages = [
      { name: 'Java', code: 'java' },
      { name: 'C#', code: 'csharp' },
      { name: 'Javascript', code: 'js' },
      { name: 'C++', code: 'c++' },
      { name: 'C', code: 'c' }
    ];
    this.tasks = [
      { name: 'Fibonacci', explanation: 'Write the first 10 fibonacci numbers starting from 1 1.' },
      { name: 'Palindrome', explanation: 'Find the palindromic numbers until 100.' },
      { name: 'FizzBuzz', explanation: 'Write positive numbers but if it can be divided by 3 place Fizz. And if it can be divided by 5 write Buzz.' },
    ];
  }

  ngOnInit(): void {
    this.submitForm.controls['language'].disable();
    this.submitForm.controls['description'].disable();
  }

  submitForm = this.fb.group({
    name: [null, Validators.required],
    task: [null],
    description: [null],
    language: [null],
    script: [null, Validators.required]
  });

  submitCode() {
    this.submitForm.value['language'] = { code: 'java', name: 'Java' };
    console.log(this.submitForm.value);
    const code: Code = <Code>{};
    code.language = 'java';   // other languages are in premium
    code.name = this.submitForm.value['name'];
    code.script = this.submitForm.value['script'];
    code.task = this.submitForm.value['task'].name;
    code.stdin = '';
    code.versionIndex = '0';
    this.service.submitCode(code).subscribe({
      next: (val) => {
        this.messageService.add({ severity: 'success', summary: 'Submit complete', detail: val + " id submit is done." });
        this.submitForm.reset();
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Submit error', detail: JSON.stringify(err) });
      },
      complete: () => { }
    });
  }

  onTaskChange(event: { originalEvent: PointerEvent, value: Task }) {
    this.submitForm.controls['description'].setValue(event.value.explanation);

  }

}
