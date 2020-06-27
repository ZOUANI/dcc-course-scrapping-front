import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../controller/service/course.service';
import {Course} from '../../controller/model/course.model';

@Component({
  selector: 'app-course-scraping-create',
  templateUrl: './course-scraping-create.component.html',
  styleUrls: ['./course-scraping-create.component.css']
})
export class CourseScrapingCreateComponent implements OnInit {

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
  }

  public courseSummaryLocation: string;
  public courseLink: string;

  get courseToAdd() {
    return this.courseService.course_create;
  }


  addCourse(searchLocation: string) {
    return this.courseService.addCourse(searchLocation);
    /* let timerInterval;
     Swal.fire({
       title: 'Loading chapters',
       html: 'Please wait !<b></b> ',
       timer: 7000,
       timerProgressBar: true,
       onBeforeOpen: () => {
         Swal.showLoading();
         timerInterval = setInterval(() => {
           const content = Swal.getContent();
           if (content) {
             const b = content.querySelector('b');
             if (b) {
             }
           }
         }, 100);
       },
     }).then((result) => {
      */
    /*if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer');
    }
  });
  setTimeout(afterTwoSeconds => {
    return this.courseService.addCourse(searchLocation);
  }, 100);
*/
  }

  saveCourse() {
    return this.courseService.saveCourse();
  }

  reset() {
    this.courseService.course_create = new Course();
  }
}
