import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authorization/login/login.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MechanicsComponent } from './posts/post-create/mechanics/mechanics.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { PostFixedListComponent } from './post-fixed-list/post-fixed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostListComponent,
    PostCreateComponent,
    ErrorComponent,
    HeaderComponent,
    MechanicsComponent,
    PostFixedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
