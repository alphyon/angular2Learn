import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CourseComponet} from './course.componet';
import {AutorsComponent} from './autors.component';
import {CourseService} from './course.service';
import {AuthorService} from './author.service';
import {AutoGrowDirective} from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,CourseComponet,AutorsComponent,AutoGrowDirective],
  bootstrap:    [ AppComponent ],
  providers: [CourseService,AuthorService]
})
export class AppModule { }
