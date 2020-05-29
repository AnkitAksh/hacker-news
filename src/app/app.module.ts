import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/components/feed/feed.component';
import { FeedService } from './feed/services/feed.service';
import { HttpClientModule } from '@angular/common/http';
import { TimePipe } from './feed/pipes/time.pipe';
import { ShortUrlPipe } from './feed/pipes/short-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    TimePipe,
    ShortUrlPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
