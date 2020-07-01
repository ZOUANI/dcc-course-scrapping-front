import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseTheme} from '../model/course-theme.model';
import Swal from 'sweetalert2';
import {ThemeService} from './theme.service';

@Injectable({
  providedIn: 'root'
})
export class CourseThemeService {

  constructor(private http: HttpClient, private themeService: ThemeService) {
  }

  //================URLs======================
  private courseThemeUrl = 'http://localhost:8099/web-scraping/courseThemes/courseTheme';

  //================Variables======================
  public courseThemesByCourse = Array<CourseTheme>();

  public getCourseThemesByCourse(id: number) {
    this.http.get<Array<CourseTheme>>(this.courseThemeUrl + '/course_id/' + id).subscribe(
      data => {
        console.log(data);
        this.courseThemesByCourse = data;
      }, error1 => {
        console.log(error1);
      }
    );
  }

  public postCourseTheme(idCourse: number, idTheme: number) {
    console.log(idTheme);
    this.http.post<CourseTheme>(this.courseThemeUrl + '/createCourse/idCourse/' + idCourse + '/idTheme/' + idTheme, null).subscribe(
      data => {
        console.log(data);
        this.getCourseThemesByCourse(idCourse);
        this.themeService.getThemesToAdd(idCourse);
      }, error1 => {
        console.log(error1);
      }
    );
  }

  public deleteCourseTheme(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#07d600',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.http.delete(this.courseThemeUrl + '/id/' + id).subscribe(
          data => {
          }, error1 => {
            console.log(error1);
          }
        );
      }
    });
  }
}
