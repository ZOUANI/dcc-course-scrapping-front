import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../controller/service/course.service';
import {Chapter} from '../../controller/model/chapter.model';
import {Course} from '../../controller/model/course.model';

@Component({
  selector: 'app-course-scraping-list',
  templateUrl: './course-scraping-list.component.html',
  styleUrls: ['./course-scraping-list.component.css']
})
export class CourseScrapingListComponent implements OnInit {

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAllCourses();
  }

  public chapters = Array<Chapter>();
  public course = new Course();
  public searchText = '';


  getCourseChapters(course: Course) {
    this.course = course;
    this.chapters = course.chapters;
  }

  getCourseForDetail(course: Course) {
    this.course = course;
  }

  get allCourses() {
    return this.courseService.allCourses;
  }

}
