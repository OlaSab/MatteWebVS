import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'multiAddSub',
  templateUrl: './multiAddSub.template.html'
})
export class MultiAddSubComponent implements OnInit {
  @Input() calculationMode: string;

  title: string;
  factor1: number;
  factor2: number;
  answer: number;
  wrongAnswer: boolean;
  numberOfCorrectAnswers: number;
  numberOfIncorrectAnswers: number;
  symbol: string;

  

  ngOnInit()
  {
    console.log( "calcmode: " + this.calculationMode);
    this.title = this.calculationMode;
    switch (this.calculationMode)
    {
      case 'Multiplication':
        this.title = "Multiplikation";
        this.symbol = "*";
        break;
      case 'Addition':
        this.title = "Addition";
        this.symbol = "+";
        break;
      case 'Subtraction':
        this.title = "Subtraktion";
        this.symbol = "-";
        break;
      case 'Division':
        this.title = "Division";
        this.symbol = "/";
        break;
    }


    this.resetCalculation();
  }

  resetCalculation()
  {
    var min: number;
    var max: number;
    this.setNewFactors();
    this.wrongAnswer = false;
    this.numberOfCorrectAnswers = 0;
    this.numberOfIncorrectAnswers = 0;
  }

  setNewFactors()
  {

    var excludes: number[] = [];

    var min: number = 1;
    var max: number;

    switch (this.calculationMode)
    {

      case 'Multiplication':
        max = 10;
        break;
      case 'Addition':
        max = 100;
        break;
      case 'Subtraction':
        max = 100;
        break;
      case 'Division':
        let exludes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        max = 40;
        break;
    }

    this.factor1 = this.getRandomInt(min, max);
    while(excludes.some(x => x == this.factor1))
    {
      this.factor1 = this.getRandomInt(min, max);
    }

    if (this.calculationMode == 'Subtraction' || this.calculationMode == 'Division')
    {
      max = this.factor1;
    }

    this.factor2 = this.getRandomInt(min, max);

    while (this.calculationMode == 'Division' && this.factor1%this.factor2!=0)
    {
        this.factor2 = this.getRandomInt(min, max);
    }
  }

  validateAnswer()
  {
    var sum: number;

    switch (this.calculationMode)
    {

      case 'Multiplication':
        sum = this.factor1 * this.factor2;
        break;
      case 'Addition':
        sum = this.factor1 + this.factor2;
        break;
      case 'Subtraction':
        sum = this.factor1 - this.factor2;
        break;
      case 'Division':
        sum = this.factor1 / this.factor2;
        break;
    }

    if (sum == this.answer)
    {
      this.numberOfCorrectAnswers++;
      this.wrongAnswer = false;
      this.setNewFactors();
      this.answer = null;
    }
    else{
      this.numberOfIncorrectAnswers++;
      this.wrongAnswer = true;
    }
  }

   getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  getBorderStyle() {
    if (this.wrongAnswer)
    {
      return "red";
    }
    else
    {
      return "black";
    }

  }
}
