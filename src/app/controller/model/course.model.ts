import {Chapter} from './chapter.model';

export class Course {
  constructor(
    public  entitled?: string,
    public description?: string,
    public hourlyVolume?: number,
    public difficulty?: string,
    public rating?: number,
    public language?: string,
    public courseLink?: string,
    public courseSummarySection?: string
  ) {
  }

  public id: number;
  public chapters = Array<Chapter>();
}
