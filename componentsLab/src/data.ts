import { Article } from "./models/article.model";
import { data } from "./data/seed";

export class ArticleData {
  getData(): Array<Article> {
    let articles : Article[] = [];

    data.forEach((article, i) => {
      articles[i] = new Article(article.title, article.description, article.author, article.imageUrl);
    });

    return articles;
  }
}
