import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CourseScrapingComponent} from './course-scraping/course-scraping.component';
import {CourseScrapingCreateComponent} from './course-scraping/course-scraping-create/course-scraping-create.component';
import {CourseScrapingListComponent} from './course-scraping/course-scraping-list/course-scraping-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseScrapingComponent,
    CourseScrapingCreateComponent,
    CourseScrapingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
