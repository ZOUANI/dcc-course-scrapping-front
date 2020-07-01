import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseMetaData} from '../model/course-meta-data.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CourseMetaDataService {

  constructor(private http: HttpClient) {
  }

  //================URLs======================
  private courseMetaDataUrl = 'http://localhost:8099/web-scraping/coursesMetaData/courseMetaData';

  //================Variables======================
  public courseMetaData_create = new CourseMetaData();

  public saveCourseMetaData() {
    this.http.post<CourseMetaData>(this.courseMetaDataUrl + '/', this.courseMetaData_create).subscribe(
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
        this.courseMetaData_create = new CourseMetaData();
      }, error1 => {
        console.log(error1);
      }
    );
  }

  public addCourseMetaData() {
    let courseMetaDataCreateClone = new CourseMetaData(this.courseMetaData_create.title,
      this.courseMetaData_create.description,
      this.courseMetaData_create.bagOfWords);

  }
}
