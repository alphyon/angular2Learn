import {Injectable} from '@angular/core';

@Injectable()
export class CourseService{
    getCouruses() : string[]{
      return  ['Course1','Course2','Course3']
    }
}