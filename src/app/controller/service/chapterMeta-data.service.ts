import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseMetaDataService} from './course-meta-data.service';
import {ChapterMetaData} from '../model/chapter-meta-data.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ChapterMetaDataService {

  constructor(private http: HttpClient, private courseMetaDataService: CourseMetaDataService) {
  }

  //================URLs======================
  private chapterMetaDataUrl = 'http://localhost:8099/web-scraping/chaptersMetaData/chapterMetaData';

  //================Variables======================
  public chapterMetaData_create = new ChapterMetaData();
  public listChapterBagOfWords = new Array<any>();


  public addChapterMetaData() {
    let chapterMetaDataCreateClone = new ChapterMetaData(this.chapterMetaData_create.title, this.chapterMetaData_create.bagOfWords);
    this.courseMetaDataService.courseMetaData_create.chaptersMetaData.push(chapterMetaDataCreateClone);
    this.chapterMetaData_create = new ChapterMetaData();
    this.listChapterBagOfWords = new Array<any>();
  }

  public editChapterMetaData(chapterMetaData: ChapterMetaData, id: number) {
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
        this.http.put<ChapterMetaData>(this.chapterMetaDataUrl + '/id/' + id, chapterMetaData).subscribe(
          data => {
            // $('#courseModal').modal('hide');
            console.log(data);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Chapter updated ',
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


  public deleteChapterMetaData(id: number) {
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
        this.http.delete(this.chapterMetaDataUrl + '/id/' + id).subscribe(
          data => {
            this.courseMetaDataService.getAllCoursesMetaData();
          }, error1 => {
            console.log(error1);
          }
        );
      }
    });
  }
}
