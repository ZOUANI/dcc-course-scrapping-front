import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Theme} from '../model/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) {
  }

  //================URLs======================
  private themeUrl = 'http://localhost:8099/web-scraping/themes/theme';

  //================Variables======================
  public themesToAdd = Array<Theme>();

  public getThemesToAdd(id: number) {
    this.http.get<Array<Theme>>(this.themeUrl + '/themesToAdd/course_id/' + id).subscribe(
      data => {
        console.log(data);
        this.themesToAdd = data;
      }, error1 => {
        console.log(error1);
      }
    );
  }
}
