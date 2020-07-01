import {ChapterMetaData} from './chapter-meta-data.model';

export class CourseMetaData {
  constructor(
    public  title?: string,
    public description?: string,
    public bagOfWords?: string,
  ) {
  }

  public id: number;
  public chaptersMetaData = Array<ChapterMetaData>();
}
