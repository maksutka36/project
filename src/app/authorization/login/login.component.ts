import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Subscription } from 'rxjs';
import { UsersManagmentService } from 'src/app/users-managment/users-managment.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  subValid = false;
  sub!: Subscription;

  constructor(
    private authService: AuthorizationService,
    private usersManagmentService: UsersManagmentService
  ) { }

  ngOnInit(): void {
    this.usersManagmentService.setPage('Pokaż Zlecenia');
    this.form = new FormGroup({
      email: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.required)
    })
    this.sub = this.authService.getAuthStatusListener()
      .subscribe(result => {
        if(!result){
          this.subValid = true;
        }
      })
  }

  Submit(){
    this.authService.login(this.form.value.email, this.form.value.password)
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
