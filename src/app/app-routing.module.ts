import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseScrapingComponent} from './course-scraping/course-scraping.component';
import {CourseMetaDataComponent} from './course-meta-data/course-meta-data.component';


const routes: Routes = [

  {path: 'scrapingCourses', component: CourseScrapingComponent},
  {path: 'metaData', component: CourseMetaDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
