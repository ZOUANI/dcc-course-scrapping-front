import {Course} from './course.model';
import {Theme} from './theme.model';

export class CourseTheme {

  public id: number;
  public course = new Course();
  public theme = new Theme();
}
