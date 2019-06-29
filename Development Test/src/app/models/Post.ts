import { Category } from './Category';
import { Title } from '@angular/platform-browser';

export class Post {
    id: number;
    title: string;
    text: string;
    categories: (number|Category)[];
}