import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseMetaDataService} from './course-meta-data.service';
import {ChapterMetaData} from '../model/chapter-meta-data.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterMetaDataService {

  constructor(private http: HttpClient, private courseMetaDataService: CourseMetaDataService) {
  }

  //================Variables======================
  public chapterMetaData_create = new ChapterMetaData();


  public addChapterMetaData() {
    let chapterMetaDataCreateClone = new ChapterMetaData(this.chapterMetaData_create.title, this.chapterMetaData_create.bagOfWords);
    this.courseMetaDataService.courseMetaData_create.chaptersMetaData.push(chapterMetaDataCreateClone);
  }
}
