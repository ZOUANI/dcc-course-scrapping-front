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
  public courseBagOfWords: string;
  public listCourseBagOfWords = new Array<any>();
  public allCoursesMetaData = Array<CourseMetaData>();

  public saveCourseMetaData() {
    this.courseMetaData_create.bagOfWords = JSON.stringify(this.listCourseBagOfWords);
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
        this.listCourseBagOfWords = new Array<any>();
        this.getAllCoursesMetaData();
      }, error1 => {
        console.log(error1);
      }
    );
  }

  public getAllCoursesMetaData() {
    this.http.get<Array<CourseMetaData>>(this.courseMetaDataUrl + '/').subscribe(
      data => {
        console.log(data);
        this.allCoursesMetaData = data;
      }, error1 => {
        console.log(error1);
      }
    );
  }

  public editCourseMetaData(courseMetaData: CourseMetaData, id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1085ff',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.value) {
        this.http.put<CourseMetaData>(this.courseMetaDataUrl + '/id/' + id, courseMetaData).subscribe(
          data => {
            // $('#courseModal').modal('hide');
            this.getAllCoursesMetaData();
            console.log(data);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Course updated ',
              showConfirmButton: false,
              timer: 1500
            });
          }, error1 => {
            console.log(error1);
          }
        );
      }
    });
  }


  public deleteCourseMetaData(id: number) {
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
        this.http.delete(this.courseMetaDataUrl + '/id/' + id).subscribe(
          data => {
            this.getAllCoursesMetaData();
          }, error1 => {
            console.log(error1);
          }
        );
      }
    });
  }

}
