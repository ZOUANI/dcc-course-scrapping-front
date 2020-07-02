import {Component, OnInit} from '@angular/core';
import {CourseMetaDataService} from '../../controller/service/course-meta-data.service';
import {ChapterMetaDataService} from '../../controller/service/chapterMeta-data.service';

@Component({
  selector: 'app-course-meta-data-create',
  templateUrl: './course-meta-data-create.component.html',
  styleUrls: ['./course-meta-data-create.component.css']
})
export class CourseMetaDataCreateComponent implements OnInit {

  constructor(private courseMetaDataService: CourseMetaDataService, private chapterMetaDataService: ChapterMetaDataService) {
  }

  ngOnInit(): void {
  }

  public inUpdateMode: boolean = false;
  public inUpdateMode2: boolean = false;
  public courseWord = '';
  public courseFrequency = '';
  public courseMetaDataBagWord: any;
  public chapterWord = '';
  public chapterFrequency = '';
  public chapterMetaDataBagWord: any;

  listCourseBagOfWords() {
    return this.courseMetaDataService.listCourseBagOfWords;
  }

  listChapterBagOfWords() {
    return this.chapterMetaDataService.listChapterBagOfWords;

  }

  get courseBagOfWords() {
    return this.courseMetaDataService.courseBagOfWords;
  }

  get courseMetaData() {
    return this.courseMetaDataService.courseMetaData_create;
  }

  get chapterMetaData() {
    return this.chapterMetaDataService.chapterMetaData_create;
  }

  addCourseBagOfWords() {
    let myObj = {
      word: this.courseWord,
      frequency: this.courseFrequency
    };
    this.listCourseBagOfWords().push(myObj);
    //console.log(JSON.stringify(this.listCourseBagOfWords()));
    this.courseWord = '';
    this.courseFrequency = '';
  }

  addChapterBagOfWords() {
    let myObj = {
      word: this.chapterWord,
      frequency: this.chapterFrequency
    };
    this.listChapterBagOfWords().push(myObj);
    this.chapterWord = '';
    this.chapterFrequency = '';
  }

  getCourseBagToUpdate(item) {
    this.courseMetaDataBagWord = item;
    this.inUpdateMode = true;
    this.courseWord = item.word;
    this.courseFrequency = item.frequency;
  }

  updateCourseBagOfWord() {
    this.listCourseBagOfWords().splice(this.listCourseBagOfWords().indexOf(this.courseMetaDataBagWord), 1);
    this.addCourseBagOfWords();
    this.inUpdateMode = false;
  }

  removeCourseBagOfWord(item) {
    this.listCourseBagOfWords().splice(this.listCourseBagOfWords().indexOf(item), 1);
  }

  getChapterBagToUpdate(item) {
    this.chapterMetaDataBagWord = item;
    this.inUpdateMode2 = true;
    this.chapterWord = item.word;
    this.chapterFrequency = item.frequency;
  }

  updateChapterBagOfWord() {
    this.listChapterBagOfWords().splice(this.listChapterBagOfWords().indexOf(this.chapterMetaDataBagWord), 1);
    this.addChapterBagOfWords();
    this.inUpdateMode2 = false;
  }

  removeChapterBagOfWord(item) {
    this.listChapterBagOfWords().splice(this.listChapterBagOfWords().indexOf(item), 1);
  }

  addChapterToList() {
    this.chapterMetaDataService.chapterMetaData_create.bagOfWords = JSON.stringify(this.listChapterBagOfWords());
    console.log(this.chapterMetaData);
    return this.chapterMetaDataService.addChapterMetaData();
  }

  removeChapterFromList(item) {
    this.courseMetaData.chaptersMetaData.splice(this.courseMetaData.chaptersMetaData.indexOf(item), 1);
  }

  saveCourseMetaDataWithChaptersMetaData() {
    return this.courseMetaDataService.saveCourseMetaData();
  }
}
