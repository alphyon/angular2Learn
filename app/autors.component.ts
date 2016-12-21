import {Component} from '@angular/core';
import {AuthorService} from './author.service';
@Component({
    selector: 'author',
    template: `<h2>Authors</h2>
                {{title}}
                <ul>
                    <li *ngFor="let author of authors">{{author}}</li>
                </ul>`
})
export class AutorsComponent{
    title = 'lista de autores';
    authors;
    constructor(authosService: AuthorService){
        this.authors = authosService.getAuthors();
    }
}