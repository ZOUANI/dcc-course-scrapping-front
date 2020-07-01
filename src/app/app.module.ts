import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CourseScrapingComponent} from './course-scraping/course-scraping.component';
import {CourseScrapingCreateComponent} from './course-scraping/course-scraping-create/course-scraping-create.component';
import {CourseScrapingListComponent} from './course-scraping/course-scraping-list/course-scraping-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CourseMetaDataComponent} from './course-meta-data/course-meta-data.component';
import {CourseMetaDataListComponent} from './course-meta-data/course-meta-data-list/course-meta-data-list.component';
import {CourseMetaDataCreateComponent} from './course-meta-data/course-meta-data-create/course-meta-data-create.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseScrapingComponent,
    CourseScrapingCreateComponent,
    CourseScrapingListComponent,
    CourseMetaDataComponent,
    CourseMetaDataListComponent,
    CourseMetaDataCreateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
