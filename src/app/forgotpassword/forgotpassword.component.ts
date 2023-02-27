import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,private apiService: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else
    {
      let body = { email:this.form.value.email.trim()}
      // this.apiService.login('/register', body).subscribe((res: any) => {
      //   if (res && res.Status === "Success") {
      //   this.router.navigateByUrl('/home')
      //   }
      // })

    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
