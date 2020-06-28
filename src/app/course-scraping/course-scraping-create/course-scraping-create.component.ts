import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../controller/service/course.service';
import {Course} from '../../controller/model/course.model';
import Swal from 'sweetalert2';


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
  public courseHtml;

  get courseToAdd() {
    return this.courseService.course_create;
  }

  get courseCheck() {
    return this.courseService.course_check;
  }

  getCourseByLink(courseDto: Course) {
    return this.courseService.getCourseByLink(courseDto);
  }

  checkIfCourseExist(searchLocation: string, courseDto: Course) {
    console.log(this.courseCheck);
    if (this.courseCheck == null) {
      let timerInterval;
      Swal.fire({
        title: 'Loading chapters',
        html: 'Please wait !<b></b> ',
        timer: 40000,
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

        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
      setTimeout(afterTwoSeconds => {
        return this.courseService.addCourse(searchLocation, courseDto);
      }, 1000);

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Ce lien a été déjà exporter.'
      });
    }
  }

  addCourse(searchLocation: string, courseDto: Course) {
    this.getCourseByLink(courseDto);
    setTimeout(() => this.checkIfCourseExist(searchLocation, courseDto), 1000);
  }

  saveCourse() {
    return this.courseService.saveCourse();
  }

  getPageContent(courseDto: Course) {
    this.courseService.getPageContent(courseDto);
    this.courseHtml = new DOMParser().parseFromString(this.courseService.page_content, 'text/html');
    console.log(new XMLSerializer().serializeToString(this.courseHtml));
  }

  get pageHtmlContent() {
    return this.courseService.page_content;
  }

  reset() {
    this.courseService.course_create = new Course();
    this.courseSummaryLocation = '';
  }
}
