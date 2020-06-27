import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  //================URLs======================
  private courseUrl = 'http://localhost:8099/web-scraping/courses/course';

  //================Variables======================
  public course_create = new Course();

  //public chaptercourses = Array<Course>();

  public addCourse(searchLocation: string) {
    this.http.post<Course>(this.courseUrl + '/searchLocation/' + searchLocation, this.course_create).subscribe(
      data => {
        this.course_create = data;
      }, error1 => {
        console.log(error1);
      }
    );
  }

  public saveCourse() {
    this.http.post<Course>(this.courseUrl + '/', this.course_create).subscribe(
      data => {
        console.log(data);
        this.course_create = new Course();
      }, error1 => {
        console.log(error1);
      }
    );
  }
}
