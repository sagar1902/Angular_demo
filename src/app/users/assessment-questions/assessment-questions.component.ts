import { Component } from '@angular/core';
import { UserService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-questions',
  templateUrl: './assessment-questions.component.html',
  styleUrls: ['./assessment-questions.component.css'],
})
export class AssessmentQuestionsComponent {
  constructor(private userService: UserService, private router: Router) {}

  scoreArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  questions: Questions[] = [
    {que: 'What is the capital of France?', response: {today: null, desired: null}},
    {que: "Who wrote the play 'Romeo and Juliet'?", response: {today: null, desired: null}},
    {que: 'What is the chemical symbol for gold?', response: {today: null, desired: null}},
    {que: 'In which year did World War II end?', response: {today: null, desired: null}},
    {que: 'What is the largest planet in our solar system?', response: {today: null, desired: null}},
    {que: 'Which famous scientist developed the theory of relativity?', response: {today: null, desired: null}},
    {que: 'What is the process of a liquid turning into a gas called?', response: {today: null, desired: null}},
    {que: "Which novel is the famous line 'It was the best of times, it was the worst of times' from?", response: {today: null, desired: null}},
    {que: 'What is the largest mammal?', response: {today: null, desired: null}},
    {que: 'What is the smallest prime number?', response: {today: null, desired: null}},
  ];
  currentQuestion: number = 0;

  activeResponse: ActiveResponse = {
    today: null,
    desired: null,
  };

  responses: Responses[] = [];

  setResponse(type: string, value: number): void {
    switch (type) {
      case 'today':
        this.activeResponse.today = value;
        break;
      case 'desired':
        this.activeResponse.desired = value;
        break;
      default:
        break;
    }
  }

  print(string: ActiveResponse): void {
    console.log(string);
  }

  nextQuestion() {
    // this.responses.push({
    //   ...this.activeResponse,
    //   question: this.questions[this.currentQuestion],
    // });
    this.questions[this.currentQuestion].response = {today: this.activeResponse.today, desired: this.activeResponse.desired}
    this.currentQuestion += 1;
    this.activeResponse = this.questions[this.currentQuestion].response
    // this.response
  }

  previousQuestion() {
    this.currentQuestion -= 1;
    this.activeResponse = this.questions[this.currentQuestion].response;
  }

  handleLogout() {
    this.userService.logoutUser();
    this.router.navigate(['/']);
  }
}

interface ActiveResponse {
  today: number | null;
  desired: number | null;
}

interface Questions {
  que: string | null;
  response: ActiveResponse;
}

interface Responses {
  today: number | null;
  desired: number | null;
  question: string | null;
}
