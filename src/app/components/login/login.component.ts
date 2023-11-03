import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IUser {
  name: string;
  email: string;
  password: string;
  showPassword: boolean;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  public validate(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.info('Name:', this.user.name);
    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);
  }

}
