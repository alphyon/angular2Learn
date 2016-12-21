import { Component } from '@angular/core';
import { CourseService } from './course.service';
@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
                    {{title}}
                    <input type="text" autoGrow>
                    <ul>
                        <li *ngFor="let course of courses">{{course}}</li>
                    </ul>
                    `,
    
})
export class CourseComponet {
    title = 'prueba de datos';
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCouruses();
    }
}