import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CredentialService } from 'src/app/core/services/credential.service';
import { AccountService } from 'src/app/core/services/account.service';
import { Router } from '@angular/router';
import { ConstEnum } from 'src/app/core/enums/const.enum';
// import { CoreService } from 'src/app/core/services/account.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private credentialService: CredentialService,
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem(ConstEnum.username)) {
      this.loginForm.patchValue({});
      this.loginForm.setValue({
        name: localStorage.getItem(ConstEnum.username),
        password: localStorage.getItem(ConstEnum.password),
        rememberMe: true
      });
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }

  login() {
    this.accountService.login(this.loginForm.value).subscribe(
      (res: any) => {
        if (this.loginForm.value.rememberMe) {
          localStorage.setItem(ConstEnum.username, this.loginForm.value.name);
          localStorage.setItem(ConstEnum.password, this.loginForm.value.password);
        } else {
          localStorage.removeItem(ConstEnum.username);
          localStorage.removeItem(ConstEnum.password);
        }

        localStorage.setItem(ConstEnum.token, res.token);
        if (this.credentialService.isAdmin()) {
          this.router.navigate(['/home']);
        } else if (this.credentialService.isNormalUser()) {
          this.router.navigate(['/admin']);
        }
      }
    )
  }

}
