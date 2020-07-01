import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../controller/service/course.service';
import {Chapter} from '../../controller/model/chapter.model';
import {Course} from '../../controller/model/course.model';
import {ThemeService} from '../../controller/service/theme.service';
import {CourseThemeService} from '../../controller/service/course-theme.service';
import {Theme} from '../../controller/model/theme.model';

@Component({
  selector: 'app-course-scraping-list',
  templateUrl: './course-scraping-list.component.html',
  styleUrls: ['./course-scraping-list.component.css']
})
export class CourseScrapingListComponent implements OnInit {

  constructor(private courseService: CourseService, private themeService: ThemeService, private courseThemeService: CourseThemeService) {
  }

  ngOnInit(): void {
    this.courseService.getAllCourses();
  }

  public chapters = Array<Chapter>();
  public course = new Course();
  public searchText = '';
  public theme = new Theme();


  getCourseChapters(course: Course) {
    this.course = course;
    this.chapters = course.chapters;
  }

  getCourseForDetail(course: Course) {
    this.course = course;
    this.getThemesToAdd(course.id);
    this.getCourseThemesByCourse(course.id);
  }

  get allCourses() {
    return this.courseService.allCourses;
  }

  editCourse(course: Course, id: number) {
    return this.courseService.editCourse(course, id);
  }

  get themesToAdd() {
    return this.themeService.themesToAdd;
  }

  getThemesToAdd(id: number) {
    return this.themeService.getThemesToAdd(id);
  }

  postCourseTheme(idCourse: number, idTheme: number) {
    return this.courseThemeService.postCourseTheme(idCourse, idTheme);
  }

  getCourseThemesByCourse(idCourse: number) {
    return this.courseThemeService.getCourseThemesByCourse(idCourse);
  }

  get courseThemesOfCourse() {
    return this.courseThemeService.courseThemesByCourse;
  }

  deleteCourseTheme(id: number, idCourse: number) {
    return this.courseThemeService.deleteCourseTheme(id, idCourse);
  }

  deleteCourse(id: number) {
    return this.courseService.deleteCourse(id);
  }


  getPageContent(courseDto: Course) {
    this.courseService.getPageContent(courseDto);
  }

  get pageHtmlContent() {
    return this.courseService.page_content;
  }

}
