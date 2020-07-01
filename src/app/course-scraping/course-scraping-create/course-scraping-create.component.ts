import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../controller/service/course.service';
import {Course} from '../../controller/model/course.model';
import Swal from 'sweetalert2';
import {Chapter} from '../../controller/model/chapter.model';
import {ChapterService} from '../../controller/service/chapter.service';


@Component({
  selector: 'app-course-scraping-create',
  templateUrl: './course-scraping-create.component.html',
  styleUrls: ['./course-scraping-create.component.css']
})
export class CourseScrapingCreateComponent implements OnInit {

  constructor(private courseService: CourseService, private chapterService: ChapterService) {
  }

  ngOnInit(): void {
  }

  public courseSummaryLocation: string;
  public chapter = new Chapter();

  get courseToAdd() {
    return this.courseService.course_create;
  }

  getChapter(item: Chapter) {
    this.chapter = item;
  }

  get courseCheck() {
    return this.courseService.course_check;
  }

  getCourseByLink(courseDto: Course) {
    return this.courseService.getCourseByLink(courseDto);
  }

  get course_chapters() {
    return this.courseService.course_chapters;
  }

  public deleteItem(item: Chapter) {
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
        this.course_chapters.splice(this.course_chapters.indexOf(item), 1);
      }
    });
  }

  checkIfCourseExist(searchLocation: string, courseDto: Course) {
    console.log(this.courseCheck);
    if (this.courseCheck == null) {
      let timerInterval;
      Swal.fire({
        title: 'Loading chapters',
        html: 'Please wait !<b></b> ',
        timer: 120000,
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
    if (courseDto.courseLink === '' || courseDto.courseLink === undefined) {
      Swal.fire({
        text: 'Course URL missing ',
        icon: 'warning',
      });
    } else if (searchLocation === '' || searchLocation === undefined) {
      Swal.fire({
        text: 'Search location missing ',
        icon: 'warning',
      });
    } else {
      this.getCourseByLink(courseDto);
      setTimeout(() => this.checkIfCourseExist(searchLocation, courseDto), 1000);
    }
  }

  saveCourse() {
    return this.courseService.saveCourse();
  }

  saveCourseWithChapters() {
    this.courseToAdd.chapters = this.course_chapters;
    this.saveCourse();
    this.courseService.course_chapters = Array<Chapter>();
    this.courseService.course_create = new Course();
    this.courseSummaryLocation = '';
  }

  getPageContent(courseDto: Course) {
    this.courseService.getPageContent(courseDto);
  }

  get pageHtmlContent() {
    return this.courseService.page_content;
  }

  getChapterPageContent(chapterDto: Chapter) {
    this.chapterService.getPageContent(chapterDto);
  }

  get chapterPageHtmlContent() {
    return this.chapterService.page_HtmlContent;
  }

  reset() {
    this.courseService.course_chapters = Array<Chapter>();
    this.courseService.course_create = new Course();
    this.courseSummaryLocation = '';
  }
}
