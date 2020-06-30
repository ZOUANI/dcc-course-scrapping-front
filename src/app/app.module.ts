import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CourseScrapingComponent} from './course-scraping/course-scraping.component';
import {CourseScrapingCreateComponent} from './course-scraping/course-scraping-create/course-scraping-create.component';
import {CourseScrapingListComponent} from './course-scraping/course-scraping-list/course-scraping-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
