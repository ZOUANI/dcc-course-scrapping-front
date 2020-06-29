import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chapter} from '../model/chapter.model';


@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http: HttpClient) {
  }

//================URLs======================
  private chapterUrl = 'http://localhost:8099/web-scraping/chapters/chapter';
  //================Variables======================
  public page_HtmlContent = '';

  public getPageContent(chapterDto: Chapter) {
    this.http.post<Chapter>(this.chapterUrl + '/getChapterHtmlPageContent', chapterDto).subscribe(
      data => {
        this.page_HtmlContent = data.chapterHtmlPageContent;
      }, error1 => {
        console.log(error1);
      }
    );
  }
}
