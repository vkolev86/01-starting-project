import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //////////////////////////////// with signals
    calculate = output<InvestmentInput>();
    enteredInitialInvestment = signal('0');
    enteredAnnualInvestment = signal('0');
    enteredExpectedReturn = signal('5');
    enteredDuration = signal('10');

  //////////////////////////////// without signals
    // @Output() calculate = new EventEmitter<InvestmentInput>();
    // enteredInitialInvestment = '0';
    // enteredAnnualInvestment = '0';
    // enteredExpectedReturn = '5';
    // enteredDuration = '10';

  onSubmit(){
  //////////////////////////////// with signals
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });

  //////////////////////////////// without signals
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment,
    //   duration: +this.enteredDuration,
    //   expectedReturn: +this.enteredExpectedReturn,
    //   annualInvestment: +this.enteredAnnualInvestment,
    // });

  //////////////////////////////// reset inputs
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');
  }
}
