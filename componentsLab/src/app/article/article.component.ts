import { Component, Input } from '@angular/core';
import { Article } from 'src/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  constructor() {
    this.descToShow = "";
    this.articleDescLen = 0;
  }

  readMore(): void {
    this.articleDescLen += this.symbols;

    if (this.articleDescLen > this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descToShow += this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageButtonTitle = this.imageIsShown ? "Hide Image" : "Show Image";
    this.imageIsShown = !this.imageIsShown;
  }

  hideDesc(): void {
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }
}
