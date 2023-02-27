import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,private apiService: ApiService,private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
  }
  onSubmit(): void {
    //alert('hi')
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    else
    {
      let body = { "email" : this.loginForm.value.username.trim(), "password" : this.loginForm.value.password.trim() }
      // this.apiService.login('/login', body).subscribe((res: any) => {
      //   if (res && res.Status === "Success") {
      //   this.router.navigateByUrl('/home')
      //   }
      // })
      this.apiService.login("auth/v2/login",body)
      .subscribe((res:any) => {
        if (res && res.success) {
            //localStorage.setItem("loginStatus", "success");
            this.sharedService.setLoginStatus(false);
            this.router.navigateByUrl('/home')
            }
      });

    }

    console.log(JSON.stringify(this.loginForm.value, null, 2));
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
