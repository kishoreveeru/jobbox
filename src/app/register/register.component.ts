import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from 'src/utils/validation';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  onSubmit(): void {
    //alert('hi')
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else {
      let body = {
        "fullname": this.form.value.fullname.trim(),
        "username": this.form.value.username.trim(),
        "email": this.form.value.email.trim(),
        "password": this.form.value.password.trim()
      }
      this.apiService.login("auth/v1/signup", body)
        .subscribe((res: any) => {
          if (res && res.success) {
            this.router.navigateByUrl('/login')
          }
        });

    }

    //console.log(JSON.stringify(this.form.value, null, 2));
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
