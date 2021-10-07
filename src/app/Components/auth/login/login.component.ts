import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  CredentialService,
  AccountService,
  // CoreService   ::TO DO
} from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private credentialService: CredentialService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

}
