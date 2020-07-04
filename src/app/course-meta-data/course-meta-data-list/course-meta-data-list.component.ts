import {Component, OnInit} from '@angular/core';
import {CourseMetaData} from '../../controller/model/course-meta-data.model';
import {ChapterMetaData} from '../../controller/model/chapter-meta-data.model';
import {CourseMetaDataService} from '../../controller/service/course-meta-data.service';
import {ChapterMetaDataService} from '../../controller/service/chapterMeta-data.service';

@Component({
  selector: 'app-course-meta-data-list',
  templateUrl: './course-meta-data-list.component.html',
  styleUrls: ['./course-meta-data-list.component.css']
})
export class CourseMetaDataListComponent implements OnInit {


  constructor(private courseMetaDataService: CourseMetaDataService, private chapterMetaDataService: ChapterMetaDataService) {
  }

  ngOnInit(): void {
    this.courseMetaDataService.getAllCoursesMetaData();
  }

  public courseMetaData = new CourseMetaData();
  public chaptersMetaData = Array<ChapterMetaData>();
  public searchTextMetaData = '';
  public chapterWord = '';
  public chapterFrequency = '';
  public chapterMetaDataBagWord: any;
  public chapterToEdit = new ChapterMetaData();
  listChapterBagOfWords = new Array<any>();
  public courseWord = '';
  public courseFrequency = '';
  public courseMetaDataBagWord: any;
  public listCourseBagOfWords = new Array<any>();

  get allMetaDataCourses() {
    return this.courseMetaDataService.allCoursesMetaData;
  }

  getMetaDataCourseChapters(courseMetaData: CourseMetaData) {
    this.courseMetaData = courseMetaData;
    this.chaptersMetaData = courseMetaData.chaptersMetaData;
  }

  getCourseMetaDataForDetail(courseMetaData: CourseMetaData) {
    this.courseMetaData = courseMetaData;
    this.listCourseBagOfWords = JSON.parse(courseMetaData.bagOfWords);
  }

  deleteCourseMetaData(id: number) {
    this.courseMetaDataService.deleteCourseMetaData(id);
  }

  getCourseBagToUpdate(item) {
    this.courseMetaDataBagWord = item;
    this.courseWord = item.word;
    this.courseFrequency = item.tf;
  }

  removeCourseBagOfWord(item) {
    this.listCourseBagOfWords.splice(this.listCourseBagOfWords.indexOf(item), 1);
  }

  addCourseBagOfWords() {
    let myObj = {
      word: this.courseWord,
      tf: this.courseFrequency
    };
    this.listCourseBagOfWords.push(myObj);
    this.courseWord = '';
    this.courseFrequency = '';
  }

  updateCourseBagOfWord() {
    this.listCourseBagOfWords.splice(this.listCourseBagOfWords.indexOf(this.courseMetaDataBagWord), 1);
    this.addCourseBagOfWords();
  }

  editCourseMetaData(courseMetaData: CourseMetaData, id: number) {
    courseMetaData.bagOfWords = JSON.stringify(this.listCourseBagOfWords);
    this.courseMetaDataService.editCourseMetaData(courseMetaData, id);
  }

  deleteChapterMetaData(id: number) {
    this.chapterMetaDataService.deleteChapterMetaData(id);
  }

  selectToEditAChapterMetaData(chapterMetaData: ChapterMetaData) {
    this.listChapterBagOfWords = JSON.parse(chapterMetaData.bagOfWords);
    console.log(this.listChapterBagOfWords);
    this.chapterToEdit = chapterMetaData;
  }

  updateChapterBagOfWord() {
    this.listChapterBagOfWords.splice(this.listChapterBagOfWords.indexOf(this.chapterMetaDataBagWord), 1);
    this.addChapterBagOfWords();
  }

  addChapterBagOfWords() {
    let myObj = {
      word: this.chapterWord,
      tf: this.chapterFrequency
    };
    this.listChapterBagOfWords.push(myObj);
    this.chapterWord = '';
    this.chapterFrequency = '';
  }

  getChapterToUpdate(item) {
    this.chapterMetaDataBagWord = item;
    this.chapterWord = item.word;
    this.chapterFrequency = item.tf;
  }

  removeChapterBagOfWord(item) {
    this.listChapterBagOfWords.splice(this.listChapterBagOfWords.indexOf(item), 1);
  }

  editChapterMetaData(chapterMetaData: ChapterMetaData, id: number) {
    chapterMetaData.bagOfWords = JSON.stringify(this.listChapterBagOfWords);
    this.chapterMetaDataService.editChapterMetaData(chapterMetaData, id);
    this.listChapterBagOfWords = new Array<any>();
  }

}
