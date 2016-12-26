import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CourseComponet} from './course.componet';
import {AutorsComponent} from './autors.component';
import {CourseService} from './course.service';
import {AuthorService} from './author.service';
import {BtnComponent} from './btn.componet';
import {TxtComponent} from './txt2bind.component';
import { FormsModule } from '@angular/forms';
import {StarComponent} from './star.componet';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,BtnComponent,TxtComponent,StarComponent],
  bootstrap:    [ AppComponent ],
  providers: [CourseService,AuthorService]
})
export class AppModule { }
