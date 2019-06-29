import { Category } from './Category';
import { Title } from '@angular/platform-browser';

export class Post {
    id: number;
    title: string;
    text: string;
    categories: (number|Category)[];

    createPost(title, text, categories){
        this.title = title;
        this.text = text;
        let idCategory = this.categories.length + 1;
        this.categories.push(new Category(idCategory, "CategoryA"));
    }

    addCategory(nameCategory){
        let idCategory = this.categories.length + 1;
        this.categories.push(idCategory, new Category(idCategory, nameCategory));
    }
}