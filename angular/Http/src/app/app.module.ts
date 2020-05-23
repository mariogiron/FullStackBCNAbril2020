import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpGetComponent } from './http-get/http-get.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpPostComponent } from './http-post/http-post.component';
import { FormsModule } from '@angular/forms';
import { HttpPutComponent } from './http-put/http-put.component';
import { HttpDeleteComponent } from './http-delete/http-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpGetComponent,
    HttpPostComponent,
    HttpPutComponent,
    HttpDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
