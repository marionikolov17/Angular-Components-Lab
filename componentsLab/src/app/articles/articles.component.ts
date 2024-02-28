import { Component, OnInit } from '@angular/core';
import { ArticleData } from 'src/data';
import { Article } from 'src/models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor() {
    this.articles = [];
  }

  ngOnInit(): void {
      this.articles = new ArticleData().getData();
  }
}
