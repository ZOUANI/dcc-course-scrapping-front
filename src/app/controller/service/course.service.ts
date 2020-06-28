import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../model/course.model';
import Swal from 'sweetalert2';
import {Chapter} from '../model/chapter.model';

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
  public course_check = new Course();
  public course_chapters = Array<Chapter>();
  public page_content = '';


  public addCourse(searchLocation: string, courseDto: Course) {
    console.log(this.course_create);
    this.http.post<Course>(this.courseUrl + '/searchLocation/' + searchLocation, courseDto).subscribe(
      data => {
        this.course_create = data;
        this.course_chapters = this.course_create.chapters;
        console.log(this.course_create);
      }, error1 => {
        console.log(error1);
      }
    );
  }

  public saveCourse() {
    this.http.post<Course>(this.courseUrl + '/', this.course_create).subscribe(
      data => {
        console.log(data);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
        Toast.fire({
          icon: 'success',
          title: 'Saved successfully'
        });
      }, error1 => {
        console.log(error1);
      }
    );
  }

  public getPageContent(courseDto: Course) {
    this.http.post<Course>(this.courseUrl + '/getPageContent', courseDto).subscribe(
      data => {
        //console.log(data);
        this.page_content = data.htmlPageContent;
      }, error1 => {
        console.log(error1);
      }
    );
  }

  public getCourseByLink(courseDto: Course) {
    this.http.post<Course>(this.courseUrl + '/findByCourseLink', courseDto).subscribe(
      data => {
        console.log(data);
        this.course_check = data;
      }, error1 => {
        console.log(error1);
      }
    );
  }
}
